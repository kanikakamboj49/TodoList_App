import { useContext, useEffect } from "react";
import TodoListContext from "./context/todoList";
import Dropdown from "./components/Dropdown";
import TodoList from "./components/TodoList";

function App() {
  const { fetchTodoList } = useContext(TodoListContext);

  useEffect(() => {
    fetchTodoList();
  }, [fetchTodoList]);

  const items = [
    {
      name: "Item 1",
      handleClick: () => console.log(`This item is Item 1`),
    },
    {
      name: "Item 2",
      handleClick: () => console.log(`This item is Item 2 `),
    },
    {
      name: "Item 3",
      handleClick: () => console.log(`This item is Item 3`),
    },
  ];

  return (
    <div>
      {/* <div className="flex flex-col items-center bg-red-500">
        <Dropdown items={items} />
        <Dropdown items={items} />
      </div> */}
      <TodoList />
      {/* <div className="relative bg-red-500 w-20 h-20"></div>
      <div className="absolute bg-blue-500 w-20 h-20"></div> */}
    </div>
  );
}

export default App;
