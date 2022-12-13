import { useState } from "react";
import Header from "./components/Header";
import List from "./components/List";
// import New from "./components/New";

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
    {
      id: 7,
      task: "Fill gas tank",
      complete: true,
    },
    {
      id: 8,
      task: "Change linens",
      complete: false,
    },
    {
      id: 9,
      task: "Rake leaves",
      complete: true,
    },
    {
      id: 10,
      task: "Bake Cookies",
      complete: false,
    },
  ];

  const [todos, setTodos] = useState(initialTodos);

  return (
    <div className="App">
      <Header />
      {/* <New todos={todos} setTodos={setTodos} /> */}
      <List todos={todos} />
    </div>
  );
}

export default App;
