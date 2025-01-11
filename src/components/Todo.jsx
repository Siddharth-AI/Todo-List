import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoDate from "./TodoDate";
import { toastEvent, UniqueIdFn } from "./data";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Todo.css";
import {
  getlocalStorageTodoData,
  setlocalStorageTodoData,
} from "./TodoLocalStorage";

function Todo() {
  const [task, setTask] = useState(getlocalStorageTodoData);

  const handleFormSubmit = (inputValue) => {
    let newId = UniqueIdFn(task);
    if (!inputValue || task.some(({ content }) => content === inputValue)) {
      toastEvent("warning", "Task already exists or input is empty!");
      return;
    }
    setTask((prevTask) => {
      return [...prevTask, { id: newId, content: inputValue, checked: false }];
    });
    toastEvent("success", "Your Data added successfully");
  };

  setlocalStorageTodoData(task);

  const handleAllTaskClear = () => {
    task.length > 0
      ? (setTask([]), toastEvent("error", "All tasks cleared"))
      : toastEvent("error", "Nothing to erase");
  };

  const handleTaskDelete = (uniqueId) => {
    setTask((prevTask) => prevTask.filter(({ id }) => id !== uniqueId));
    toastEvent("error", "Task deleted successfully");
  };

  const handleTaskChecked = (uniqueId) => {
    setTask((prevTask) =>
      prevTask.map((item) => {
        if (uniqueId === item.id) {
          toastEvent(
            item.checked ? "warning" : "info",
            item.checked ? "Task status is ongoing" : "Task status complete"
          );
          return { ...item, checked: !item.checked };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <section className="todo-container">
      <ToastContainer />
      <header>
        <h1>Todo List</h1>
        <TodoDate />
      </header>
      <TodoForm onAddTodo={handleFormSubmit} />
      <section className="myUnOrdList">
        <ul>
          {task.map(({ id, content, checked }, index) => {
            return (
              <TodoList
                key={index}
                uniqueId={id}
                content={content}
                checked={checked}
                onHandleTodoDelete={handleTaskDelete}
                onHandleTodoChecked={handleTaskChecked}
              />
            );
          })}
        </ul>
      </section>
      <button className="clear-btn" onClick={handleAllTaskClear}>
        Clear All
      </button>
    </section>
  );
}
export default Todo;
