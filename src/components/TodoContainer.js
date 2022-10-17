import React from "react";
import TodoHeader from "../components/TodoHeader";
import TodoList from "../components/TodoList";
import Timer from "../components/Timer";

export default function TodoContainer() {
  return (
    <div>
      <TodoHeader />
      <Timer />
      <TodoList fetchUrl =
  "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw"
 />
    </div>
  );
}
