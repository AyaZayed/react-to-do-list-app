import { useState } from "react";
import Header from "./components/Header";
import List from "./components/List";
import New from "./components/New";
// import useLocalStorage from "use-local-storage";

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

  // const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  // const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const [theme, setTheme] = useState('dark');

  function addTodo(inputTodo) {
    const newTodo = {
      id: todos.length + 1,
      task: inputTodo,
      complete: false,
    };
    setTodos([...todos, newTodo]);
  }

  function handleToggle(id) {
    let mapped = todos.map((task) => {
      return task.id === Number(id)
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setTodos(mapped);
  }

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

  function handleClear() {
    let filtered = todos.filter((todo) => {
      return todo.complete === false;
    });
    setTodos(filtered);
  }

  function handleDelete(id) {
    let filtered = todos.filter((todo) => {
      return todo.id !== Number(id);
    });
    setTodos(filtered);
  }

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <div className="App" data-theme={theme}>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <div className="todolist">
        <New addTodo={addTodo} />
        <List
          todos={todos}
          handleToggle={handleToggle}
          handleClear={handleClear}
          handleFilter={handleFilter}
          handleDelete={handleDelete}
        />
      </div>
      <p className="bottom-p">Drag and drop to reorder list</p>
    </div>
  );
}

export default App;
