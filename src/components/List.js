import React from "react";
import Todo from "./Todo";

export default function List({
  todos,
  handleToggle,
  handleDelete,
  handleFilter,
}) {
  // const filters = ["all", "active", "completed"];
  // const [active, setActive] = React.useState("all");
  // useEffect(() => {
  //   handleFilter(active);
  // }, [active, handleFilter]);

  return (
    <div>
      <div className="todos-list">
        {todos.map((todo) => {
          return <Todo handleToggle={handleToggle} todo={todo} />;
        })}
      </div>
      <div className="list-bottom">
        <span>{todos.length} items left</span>
        <div className="filters">
          <button onClick={() => handleFilter("all")}>All</button>
          <button onClick={() => handleFilter("active")}>Active</button>
          <button onClick={() => handleFilter("completed")}>Completed</button>
        </div>
        <button onClick={handleDelete}>Clear Completed</button>
      </div>
    </div>
  );
}
