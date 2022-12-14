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
    <div className="list">
      <div className="todos">
        {todos.map((todo) => {
          return <Todo handleToggle={handleToggle} todo={todo} />;
        })}
      </div>
      <div className="list-bottom">
        <span className="items-left">{todos.length} items left</span>
        <div className="filters">
          <button onClick={() => handleFilter("all")}>All</button>
          <button onClick={() => handleFilter("active")}>Active</button>
          <button onClick={() => handleFilter("completed")}>Completed</button>
        </div>
        <button className="clear-button" onClick={handleDelete}>
          Clear Completed
        </button>
      </div>
    </div>
  );
}
