import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  deleteTodo,
  editTodo,
  getTodosById,
} from "../redux/actions/todoActions";

const Todos = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const { user, todos } = useSelector((state) => state.user);

  useEffect(() => {
    if (user) {
      dispatch(getTodosById(user._id));
      console.log(todos._id);
    }
  }, [user]);

  const handleAddTodo = () => {
    dispatch(addTodo(user._id, title, description));
    setTitle("");
    setDescription("");
  };

  const handleDelete = (todoId) => {
    dispatch(deleteTodo(user._id, todoId));
  };

  const handleStatus = (todoId) => {
    dispatch(editTodo(user._id, todoId));
  };

  return (
    <>
      {/* Input Box code */}
      <div className="parent-box">
        <div className="child-box">
          <div>
            <label style={{ color: "white" }}>Title</label>
            <br />
            <input
              className="todo-input"
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label style={{ color: "white" }}>Description</label>
            <br />
            <input
              className="todo-input"
              type="text"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <div>
          <button
            className="todo-btn"
            type="submit"
            name="add"
            onClick={handleAddTodo}
          >
            Add Todo
          </button>
        </div>
      </div>
      {/* //Input Box code ends */}

      {/* ToDo list Code  */}
      <div className="todo-scroll-container">
        <div className="todo-box-scroll">
          {todos ? (
            todos &&
            todos.map(
              (t) =>
                t && (
                  <div className="todos" key={t._id}>
                    <div>
                      <h2
                        className={
                          t.status ? "task-name-completed" : "task-name"
                        }
                      >
                        {t.title}
                      </h2>
                      <p
                        className={
                          t.status ? "desc-name-completed" : "desc-name"
                        }
                      >
                        {t.description}
                      </p>
                    </div>
                    <div>
                      {t.status ? (
                        ""
                      ) : (
                        <button
                          className="complete-btn"
                          onClick={() => handleStatus(t._id)}
                        >
                          Complete
                        </button>
                      )}

                      <button
                        className="delete-btn"
                        onClick={() => handleDelete(t._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                )
            )
          ) : (
            <h1>
              <center>No Todos</center>
            </h1>
          )}
        </div>
      </div>
    </>
  );
};
export default Todos;
