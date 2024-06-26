import { useState } from "react";
import Header from "./components/header/Header";
import TodoList from "./components/todoList/TodoList";

function App() {
  const [wrapperColor, setWrapperColor] = useState("white");
  const [appTitle, setAppTitle] = useState("Todo App");

  const color = "orange";
  const [todos, setTodos] = useState([
    { id: 1, text: "Run 10 km", completed: true, important: false },
    { id: 22, text: "React for 7 hours", completed: false, important: true },
    { id: 73, text: "Wash Dishes", completed: false, important: false },
    { id: 1004, text: "Buy Eggs and Rice", completed: false, important: true },
  ]);

  const changeCompleted = (id) => {

    const newTodos = todos.map(todo => {

      if (todo.id === id) todo.completed = !todo.completed;
      return todo;

    })

    setTodos(newTodos);

  }

  const removeTodo = (id) => {

    const newTodos = todos.filter(todo => todo.id !== id );
    setTodos(newTodos);

  }

  console.log(`wrapperColor outside "changeColor" function is ${wrapperColor}`);

  const changeColor = () => {
    console.log(`wrapperColor before the change is ${wrapperColor}`);

    setWrapperColor(
      wrapperColor === "white"
        ? "lightblue"
        : wrapperColor === "lightblue"
        ? "lightgreen"
        : "white"
    );
    console.log(`wrapperColor after the change is ${wrapperColor}`);
  };

  const changeTitle = () => {
    const titles = [
      "Todo App",
      "Todo List",
      "Todo",
      "To-Do List",
      "To-Do App",
      "To-Do",
    ];

    setAppTitle(titles[Math.floor(Math.random() * titles.length)]);
  };

  return (
    <div className="App">
      <Header appTitle={appTitle} />
      <div className="wrapper" style={{ background: wrapperColor }}>
        <button onClick={changeColor} style={{marginLeft: "2rem"}}>Change Color</button>
        <button onClick={changeTitle}>Change Title</button>
        <TodoList importantColor={color} todos={todos}
                  changeCompleted={changeCompleted} 
                  deleteTodo={removeTodo} />
      </div>
    </div>
  );
}

export default App;
