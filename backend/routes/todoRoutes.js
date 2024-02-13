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

router.route("/add/:id").post(protect, addTodo);
router.route("/getTodo/:id").get(protect, getToDos);
router.route("/delTodo/:id/:todoId").delete(protect, deleteTodo);
router.route("/uStatus/:id/:todoId").put(protect, updateStatus);
router.route("/editTodo/:id/:todoId").put(protect, editTodos);

module.exports = router;
