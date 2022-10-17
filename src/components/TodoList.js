import React, { useState, useEffect } from "react";
import TodoListItem from "./TodoListItem.js";
import dobby from "../data/dobby.gif";
import AddTodo from "./AddTodo.js";
import Border from "./Border";
import PropTypes from "prop-types";

export default function TodoList({ fetchUrl }) {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    async function fetchTodo() {
      const response = await fetch(fetchUrl);
      const fetchedTodo = await response.json(response);
      setTodoList(fetchedTodo);
    }
    fetchTodo();
  }, [fetchUrl]);

  function addTodo(description, deadline) {
    if (description === "" && deadline === null) {
      alert("Please, add some description and a deadline for your todo!");
      return;
    } else {
      let todoId;
      if (todoList.length === 0) {
        todoId = 1;
      } else {
        todoId = todoList[todoList.length - 1].id + 1;
      }
      console.log(todoList);
      return setTodoList((todoList) => [
        ...todoList,
        { id: todoId, description, deadline },
      ])
    };
  }

  const handleUpdate = (id, newDescription) => {
    const updatedTodoList = [...todoList].map((todo) => {
      if (todo.id === id) {
        todo.description = newDescription;
      }
      return todo;
    });
    setTodoList(updatedTodoList);
  };

  const deleteTodo = (id) => {
    setTodoList((todoList) => todoList.filter((todo) => todo.id !== id));
  };

  const todos = todoList.map((todo, i) => {
    return (
      <Border key={todo.id}>
        <TodoListItem
          index={i}
          key={todo.id}
          description={todo.description}
          deadline={todo.deadline}
          handleUpdate={handleUpdate}
          handleDelete={() => deleteTodo(todo.id)}
        ></TodoListItem>
      </Border>
    );
  });

  return todos.length > 0 ? (
    <div>
      <AddTodo addTodo={addTodo} />
      <ul className="todoListStyle"> {todos} </ul>
    </div>
  ) : (
    <div>
      <AddTodo addTodo={addTodo} />
      <p>No todo for you today!</p>
      <img src={dobby} alt="Dobby is free"></img>
    </div>
  );
}

TodoListItem.propTypes = {
  handleUpdate: PropTypes.func,
  description: PropTypes.string,
};
