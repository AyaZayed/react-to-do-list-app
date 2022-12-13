import React from "react";

export default function New({ addTodo }) {
  const [inputTodo, setInputTodo] = React.useState("");

  function handleChange(e) {
    setInputTodo(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    addTodo(inputTodo);
    setInputTodo("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputTodo} onChange={handleChange} />
    </form>
  );
}
