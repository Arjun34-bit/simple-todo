const User = require("../models/User");
const ToDo = require("../models/ToDo");

const getToDos = async (req, res) => {
  try {
    const { id } = req.params;

    const isUser = await User.findOne({ _id: id });

    if (!isUser) {
      return res.status(404).json({ message: "User Not Found" });
    }

    const todos = await ToDo.find({ userId: id });

    if (todos) {
      return res.status(200).json(todos);
    } else {
      return res.status(404).json({ message: "No Todos found for this user" });
    }
  } catch (error) {
    return res.status(401).json({ message: error });
  }
};

const addTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    console.log(id);

    const isUser = await User.findOne({ _id: id });

    if (!isUser) {
      return res.status(404).json({ message: "User Not Found" });
    }

    const todoTitle = await ToDo.findOne({ title: title });

    if (todoTitle) {
      return res.status(400).json({ message: "Title already inserted" });
    }

    const todo = await ToDo.create({
      userId: id,
      title,
      description,
      status: false,
    });

    const todos = await ToDo.find({ userId: id });
    if (todo) {
      return res.status(200).json(todos);
    } else {
      return res.status(401).json({ message: "ToDo creation failed" });
    }
  } catch (error) {
    return res.status(401).json({ message: error });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { id, todoId } = req.params;

    const isUser = await User.findOne({ _id: id });

    if (!isUser) {
      return res.status(404).json({ message: "User Not Found" });
    }

    const isTodo = await ToDo.findOne({ _id: todoId });

    if (!isTodo) {
      return res.status(404).json({ message: "Task Not Found" });
    }

    const delTodo = await ToDo.findByIdAndDelete({ _id: todoId });

    const todos = await ToDo.find({ userId: id });
    if (delTodo) {
      return res.status(200).json(todos);
    } else {
      return res.status(400).json({ message: "Task deletedtion failed" });
    }
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

const updateStatus = async (req, res) => {
  try {
    const { id, todoId } = req.params;

    const isUser = await User.findOne({ _id: id });

    if (!isUser) {
      return res.status(404).json({ message: "User Not Found" });
    }

    const isTodo = await ToDo.findOne({ _id: todoId });

    if (!isTodo) {
      return res.status(404).json({ message: "Task Not Found" });
    }
    if (!isTodo.status) {
      const todo = await ToDo.findOneAndUpdate(
        { _id: todoId },
        { $set: { status: true } },
        { new: true }
      );
      const todos = await ToDo.find({ userId: id });
      if (todo) {
        return res.status(200).json(todos);
      } else {
        return res.status(400).json({ message: "Status Updation failed" });
      }
    } else {
      return res.status(400).json({ message: "You cannot update the fields" });
    }
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

const editTodos = async (req, res) => {
  try {
    const { id, todoId } = req.params;

    const { title, description } = req.body;

    const isUser = await User.findOne({ _id: id });

    if (!isUser) {
      return res.status(404).json({ message: "User Not Found" });
    }

    const isTodo = await ToDo.findOne({ _id: todoId });

    if (!isTodo) {
      return res.status(404).json({ message: "Task Not Found" });
    }
    let updateFields = {};
    if (title) {
      updateFields.title = title;
    }
    if (description) {
      updateFields.description = description;
    }

    const todo = await ToDo.findOneAndUpdate(
      { _id: todoId },
      { $set: updateFields },
      { new: true }
    );
    if (todo) {
      return res.status(201).json({ message: "Field updated" });
    } else {
      return res.status(400).json({ message: "Field Updation Failed" });
    }
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

module.exports = { getToDos, addTodo, deleteTodo, updateStatus, editTodos };
