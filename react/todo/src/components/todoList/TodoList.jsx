import "./TodoList.css";
import TodoItem from "../todoItem/TodoItem";

export default function TodoList({todos,importantColor,
                                      changeCompleted, 
                                      deleteTodo}) {
  const style = {
    ul: {
      listStyle: "none",
      padding: "0",
      fontSize: "2rem",
      color: "black",
    },
  };
// MISSION:
// Check if the list of todos is empty and if it is, 
// show <h5>Sorry, no more missions</h5>
  return (
    <ul style={style.ul}>
      {todos.map((todo,idx) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          num={idx+1}
          importantColor={importantColor}
          changeCompleted={changeCompleted}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}
