import React from "react";
import Todo from "./Todo";

export default function List({ todos }) {
  return (
    <div>
      {todos.map((todo) => {
        return <Todo todo={todo} key={todo} />;
      })}
    </div>
  );
}
