import React, { useState } from "react";
import "../index.css";

export default function TodoListItem({
  id,
  description,
  deadline,
  handleUpdate,
  handleDelete,
}) {
  const [checked, setCheckedTodoItem] = useState(false);
  const [editedTodo, setEditTodo] = useState(false);
  const [updatedDescription, setUpdateDescription] = useState("");

  const changeTodoItemStyle = (e) => {
    setCheckedTodoItem(e.target.checked);
  };
  const isChecked = (item) => (item ? "checkedTodo" : "uncheckedTodo");

  const editTodo = () => {
    setEditTodo(true);
    setUpdateDescription(description);
  };

  const updateInputValue = (event) => {
    setUpdateDescription(event.target.value);
  };

  const updateTodo = () => {
    if (updatedDescription === "") {
      alert("Please, add any description for your todo!");
    } else {
      handleUpdate(id, updatedDescription);
      setEditTodo(false);
    }
  };

  return (
    <li className={isChecked(checked)}>
      <div>
        <input
          type="checkbox"
          onChange={changeTodoItemStyle}
          className="checkboxStyle"
        ></input>
        {editedTodo ? (
          <>
            <input
              type="text"
              value={updatedDescription}
              onChange={updateInputValue}
              className="inputStyle"
            />
          </>
        ) : (
          description
        )}{" "}
        | {deadline}
      </div>
      <div className="buttonWrapper">
        {editedTodo ? (
          <button
            className="buttonStyle buttonDeleteStyle"
            onClick={updateTodo}
          >
            Update
          </button>
        ) : (
          <button className="buttonStyle buttonDeleteStyle" onClick={editTodo}>
            Edit
          </button>
        )}
        <button
          className="buttonStyle buttonDeleteStyle"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </li>
  );
}
