import { createContext, useCallback, useState } from "react";
import axios from "axios";

const TodoListContext = createContext();

function TodoListProvider({ children }) {
  const [todoList, setTodoList] = useState([]);

  const fetchTodoList = useCallback(async () => {
    const response = await axios.get("http://localhost:3001/todoList");
    setTodoList(response.data);
  }, []);

  const addTodoItem = async (title) => {
    const response = await axios.post("http://localhost:3001/todoList", {
      title,
    });

    const updatedTodoList = [...todoList, response.data];
    setTodoList(updatedTodoList);
  };

  const deleteTodoItem = async (id) => {
    axios.delete(`http://localhost:3001/todoList/${id}`);

    const updatedTodoList = todoList.filter((item) => {
      return item.id !== id;
    });
    setTodoList(updatedTodoList);
  };

  const editTodoItem = async (id, item, newTitle) => {
    const response = await axios.put(`http://localhost:3001/todoList/${id}`, {
      ...item,
      title: newTitle,
    });

    const updatedTodoList = todoList.map((item) => {
      if (item.id === id) {
        return { ...item, ...response.data };
      }
      return item;
    });

    setTodoList(updatedTodoList);
  };

  const editTodoItemStatus = async (id, item) => {
    const response = await axios.put(`http://localhost:3001/todoList/${id}`, {
      ...item,
      isComplete: !item.isComplete,
    });

    const updatedTodoList = todoList.map((item) => {
      if (item.id === id) {
        return { ...item, ...response.data };
      }
      return item;
    });

    setTodoList(updatedTodoList);
  };

  const contextData = {
    todoList,
    fetchTodoList,
    addTodoItem,
    editTodoItem,
    editTodoItemStatus,
    deleteTodoItem,
  };

  return (
    <TodoListContext.Provider value={contextData}>
      {children}
    </TodoListContext.Provider>
  );
}

export default TodoListContext;
export { TodoListProvider };
