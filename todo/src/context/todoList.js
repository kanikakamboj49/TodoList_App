import { createContext, useState } from "react";
import axios from "axios";

const TodoList = createContext();

function TodoListProvider({ children }) {
  const [todoList, setTodoList] = useState();

  //   const fetchTodoList = async () => {
  //     const response = await axios.get("http://localhost:3001/todoList");
  //     console.log()
  //   };
}
