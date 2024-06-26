import "./TodoList.css";
import TodoItem from "../todoItem/TodoItem";

export default function TodoList({todos,importantColor,
                              changeCompleted}) {
  const style = {
    ul: {
      listStyle: "none",
      padding: "0",
      fontSize: "2rem",
      color: "black",
    },
  };

  let showTodos = todos.length > 0 ? todos.map((todo,idx) => (
      <TodoItem key={todo.id} todo={todo} num={idx+1}
        importantColor={importantColor}
        changeCompleted={changeCompleted}
      />
    ))  :
    <h5>No more TODOs</h5>;

  return (
    <ul style={style.ul}>
      {showTodos}
    </ul>
  );
}
