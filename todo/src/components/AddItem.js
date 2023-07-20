import { useState } from "react";
import useTodoListContext from "../hooks/use-todolist-context";
import Button from "./Button";
import { GrFormAdd } from "react-icons/gr";

function AddItem() {
  const [title, setTitle] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [priority, setPriority] = useState("");
  const { addTodoItem } = useTodoListContext();

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleClick = () => {
    if (title !== "" && priority !== "") {
      addTodoItem(title, priority);
      setTitle("");
      setErrorMessage("");
    } else if (title === "") {
      setErrorMessage("Please enter valid title");
    } else if (priority === "") {
      setErrorMessage("Please select a priority level");
    }
  };

  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
  };

  const errorMessagePanel = (
    <div className="text-xs text-red-500 text-center">{errorMessage}</div>
  );

  return (
    <div className="w-80 p-3 bg-slate-50 mb-3">
      <div className={"flex justify-around  rounded"}>
        <input
          type="text"
          className="w-60 rounded"
          placeholder="New Item..."
          value={title}
          onChange={handleChange}
        ></input>
        <Button
          className="bg-gradient-to-r from-indigo-600 to-indigo-400 ... w-8 h-5 rounded-full"
          onClick={handleClick}
        >
          <GrFormAdd />
        </Button>
      </div>

      <div className="mt-2 text-md ml-1">Priority</div>
      <div className="flex justify-around w-40" onChange={handlePriorityChange}>
        <div>
          <input
            type="radio"
            className="accent-indigo-400 w-2 cursor-pointer"
            id="high"
            name="priority"
            value="High"
          />
          <label
            htmlFor="high"
            className="cursor-pointer text-xs text-slate-500 ml-1"
          >
            High
          </label>
        </div>
        <div>
          <input
            type="radio"
            className="accent-indigo-400 w-2 cursor-pointer"
            id="medium"
            name="priority"
            value="Medium"
          />
          <label
            htmlFor="medium"
            className="cursor-pointer text-xs text-slate-500 ml-1"
          >
            Medium
          </label>
        </div>
        <div>
          <input
            type="radio"
            className="accent-indigo-400 w-2 cursor-pointer"
            id="low"
            name="priority"
            value="Low"
          />
          <label
            htmlFor="low"
            className="cursor-pointer text-xs text-slate-500 ml-1"
          >
            Low
          </label>
        </div>
      </div>
      {errorMessage !== "" && errorMessagePanel}
    </div>
  );
}

export default AddItem;
