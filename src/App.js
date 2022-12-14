import { useState } from "react";
import Header from "./components/Header";
import List from "./components/List";
import New from "./components/New";

function App() {
  const initialTodos = [
    {
      id: 1,
      task: "Give dog a bath",
      complete: true,
    },
    {
      id: 2,
      task: "Do laundry",
      complete: true,
    },
    {
      id: 3,
      task: "Vacuum floor",
      complete: false,
    },
    {
      id: 4,
      task: "Feed cat",
      complete: true,
    },
    {
      id: 5,
      task: "Change light bulbs",
      complete: false,
    },
    {
      id: 6,
      task: "Go to Store",
      complete: true,
    },
  ];

  const [todos, setTodos] = useState(initialTodos);

  function addTodo(inputTodo) {
    const newTodo = {
      id: todos.length + 1,
      task: inputTodo,
      complete: false,
    };
    setTodos([...todos, newTodo]);
  }

  const handleToggle = (id) => {
    let mapped = todos.map((task) => {
      return task.id === Number(id)
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setTodos(mapped);
  };

  function handleFilter(value) {
    if (value === "active") {
      let filtered = todos.filter((todo) => {
        return todo.complete === false;
      });
      setTodos(filtered);
    } else if (value === "completed") {
      let filtered = todos.filter((todo) => {
        return todo.complete === true;
      });
      setTodos(filtered);
    } else {
      setTodos(initialTodos);
    }
  }

  function handleDelete() {
    let filtered = todos.filter((todo) => {
      return todo.complete === false;
    });
    setTodos(filtered);
  }

  return (
    <div className="App">
      <Header />
      <div className="todolist">
        <New addTodo={addTodo} />
        <List
          todos={todos}
          handleToggle={handleToggle}
          handleDelete={handleDelete}
          handleFilter={handleFilter}
        />
      </div>
      {/* <p>Drag and drop to reorder list</p> */}
    </div>
  );
}

export default App;
