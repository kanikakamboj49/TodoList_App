import { useState } from "react";
import ListItem from "./ListItem";

function TodoList() {
  const [todoList, setTodoList] = useState(["Apple", "Banana"]);

  const renderedList = todoList.map((item) => {
    return <ListItem item={item} />;
  });

  return (
    <div className="flex flex-col items-center m-5 w-4/4">
      <div className="bg-gradient-to-r from-indigo-700 to-indigo-500 ... w-80 h-10 text-center font-black text-xl">
        My Todo List
      </div>
      <div className="w-80">{renderedList}</div>
    </div>
  );
}

export default TodoList;
