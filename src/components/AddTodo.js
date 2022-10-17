import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Moment from "moment";

export default function AddTodo({ addTodo }) {
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState(null);

  const handleDeadline = (date) => {
    setDeadline(date);
  };

  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (description === "" || deadline === null) {
      alert("Please, add some description and a deadline for your todo!");
      return;
    } else {
      const formattedDeadline = Moment(deadline).format("L");
    addTodo(description, formattedDeadline);
      setDeadline("");
      setDescription("");
      document.getElementById("description").value = "";
    }

  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="formInputWrapper">
        <div className="formColumnStyle">
          <label htmlFor="description">Todo:</label>
          <input
            type="text"
            className="inputStyle"
            placeholder="Description"
            name="description"
            id="description"
            value={description.description}
            onChange={handleDescription}
          />
        </div>
        <div className="formColumnStyle">
          <label htmlFor="deadline">Deadline:</label>
          <DatePicker
            className="inputStyle"
            selected={deadline}
            onChange={handleDeadline}
            name="deadline"
            dateFormat="MM/dd/yyyy"
            placeholderText="Select a date"
            calendarStartDay={1}
            minDate={new Date()}
          />
        </div>
      </div>
      <button className="buttonStyle" onSubmit={handleSubmit}>
        Add New Todo
      </button>
    </form>
  );
}
