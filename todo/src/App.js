import { useContext, useEffect } from "react";
import TodoList from "./components/TodoList";
import TodoListContext from "./context/todoList";

function App() {
  const { fetchTodoList } = useContext(TodoListContext);

  useEffect(() => {
    fetchTodoList();
  }, [fetchTodoList]);

  return <TodoList />;
}

export default App;
