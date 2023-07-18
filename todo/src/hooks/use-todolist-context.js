import { useContext } from "react";
import TodoListContext from "../context/todoList";

function useTodoListContext() {
  return useContext(TodoListContext);
}

export default useTodoListContext;
