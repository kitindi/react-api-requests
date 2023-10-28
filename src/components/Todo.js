import React from "react";

const Todo = (props) => {
  return (
    <div className="todo">
      <p style={{ fontSize: "18px" }}>{props.task}</p>
      <button
        className="delete"
        onClick={() => {
          props.deleteTask(props.task);
        }}
      >
        X
      </button>
    </div>
  );
};

export default Todo;
