import "./TodoItem.css";

export default function TodoItem({ todo, num, importantColor,
                                   changeCompleted }) {

  const { id, text, completed, important } = todo;
  const defaultColor = "white";
  const style = {
    li: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      margin: "1rem 2rem",
      padding: "0.5rem",
      border: "1px solid #ccc",
      borderRadius: "2px",
      background: important ? importantColor : defaultColor,
    },
    span: {
      display: "flex",
      alignItems: "center",
    },
    checkbox: {
      marginRight: "1rem",
    },
  };

  return (
    <li style={style.li}>
      <span style={style.span}
            className={completed?"completed":""}>
        <input type="checkbox" style={style.checkbox}
            checked={completed} 
            onChange={() => {changeCompleted(id)}} />
        <strong>{num + ".\xa0"}</strong>
        {text}
      </span>
      <button className="delete">&times;</button>
    </li>
  );
}
