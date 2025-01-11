import { MdCheck, MdDeleteForever } from "react-icons/md";

function TodoList({
  uniqueId,
  content,
  checked,
  onHandleTodoDelete,
  onHandleTodoChecked,
}) {
  return (
    <li key={uniqueId} className="todo-item">
      <span className={checked ? "checkList" : "notCheckList"}>{content}</span>
      <button
        className="check-btn"
        onClick={() => onHandleTodoChecked(uniqueId)}>
        <MdCheck />
      </button>
      <button
        className="delete-btn"
        onClick={() => onHandleTodoDelete(uniqueId)}>
        <MdDeleteForever />
      </button>
    </li>
  );
}

export default TodoList;
