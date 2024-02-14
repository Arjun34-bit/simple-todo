const express = require("express");
const {
  addTodo,
  getToDos,
  deleteTodo,
  updateStatus,
  editTodos,
} = require("../controllers/todoController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.route("/add/:id").post(addTodo);
router.route("/getTodo/:id").get(getToDos);
router.route("/delTodo/:id/:todoId").delete(deleteTodo);
router.route("/uStatus/:id/:todoId").put(updateStatus);
router.route("/editTodo/:id/:todoId").put(editTodos);

module.exports = router;
