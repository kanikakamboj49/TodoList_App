import ListItem from "./ListItem";
import useTodoListContext from "../hooks/use-todolist-context";
import { useState } from "react";

function TodoList() {
  const [title, setTitle] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { todoList, addTodoItem } = useTodoListContext();

  const renderedList = todoList.map((item) => {
    return <ListItem key={item.id} item={item} />;
  });

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleClick = () => {
    if (title !== "") {
      addTodoItem(title);
      setTitle("");
      setErrorMessage("");
    } else {
      setErrorMessage("Please enter valid title");
    }
  };

  const errorMessagePanel = (
    <div className="text-xs text-red-500 text-center">{errorMessage}</div>
  );

  return (
    <div className="flex flex-col items-center m-5 w-4/4">
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-400 ... w-80 h-10 text-center font-black text-xl rounded-tl rounded-tr">
        My Todo List
      </div>
      <div className="w-80 p-3 bg-slate-50 mb-1">
        <div className={"flex justify-around  rounded"}>
          <input
            type="text"
            className="w-60 rounded"
            placeholder="New Item..."
            value={title}
            onChange={handleChange}
          ></input>
          <button
            className="bg-indigo-400 w-8 rounded-[50px] font-black"
            onClick={handleClick}
          >
            +
          </button>
        </div>
        {errorMessage !== "" && errorMessagePanel}
      </div>
      <div className="w-80">{renderedList}</div>
    </div>
  );
}

export default TodoList;
