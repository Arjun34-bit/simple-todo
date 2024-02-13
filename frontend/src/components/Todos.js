const Todos = () => {
  return (
    <>
      {/* Input Box code */}
      <div className="parent-box">
        <div className="child-box">
          <div>
            <label style={{ color: "white" }}>Title</label>
            <br />
            <input className="todo-input" type="text" name="title" />
          </div>
          <div>
            <label style={{ color: "white" }}>Description</label>
            <br />
            <input className="todo-input" type="text" name="description" />
          </div>
        </div>
        <div>
          <button className="todo-btn" type="submit" name="add">
            Add Todo
          </button>
        </div>
      </div>
      {/* //Input Box code ends */}

      {/* ToDo list Code  */}
      <div className="todo-scroll-container">
        <div className="todo-box-scroll">
          <div className="todos">
            <div>
              <h2 className="task-name">Task1</h2>
              <p className="desc-name">Testing the apis</p>
            </div>
            <div>
              <button className="complete-btn">Complete</button>
              <button className="delete-btn">Delete</button>
            </div>
          </div>
          <div className="todos">
            <div>
              <h2 className="task-name">Task1</h2>
              <p className="desc-name">Testing the apis</p>
            </div>
            <div>
              <button className="complete-btn">Complete</button>
              <button className="delete-btn">Delete</button>
            </div>
          </div>
          <div className="todos">
            <div>
              <h2 className="task-name">Task1</h2>
              <p className="desc-name">Testing the apis</p>
            </div>
            <div>
              <button className="complete-btn">Complete</button>
              <button className="delete-btn">Delete</button>
            </div>
          </div>
          <div className="todos">
            <div>
              <h2 className="task-name">Task1</h2>
              <p className="desc-name">Testing the apis</p>
            </div>
            <div>
              <button className="complete-btn">Complete</button>
              <button className="delete-btn">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Todos;
