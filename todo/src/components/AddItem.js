import { useState } from "react";
import useTodoListContext from "../hooks/use-todolist-context";

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
      setPriority("");
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

      <div className="mt-2 text-md ml-1">Priority</div>
      <div className="flex justify-around w-40" onChange={handlePriorityChange}>
        <div>
          <input
            type="radio"
            className="accent-indigo-400"
            id="high"
            name="priority"
            value="High"
          />
          <label for="high" className="text-xs text-slate-500">
            High
          </label>
        </div>
        <div>
          <input
            type="radio"
            className="accent-indigo-400"
            id="medium"
            name="priority"
            value="Medium"
          />
          <label for="medium" className="text-xs text-slate-500">
            Medium
          </label>
        </div>
        <div>
          <input
            type="radio"
            className="accent-indigo-400"
            id="low"
            name="priority"
            value="Low"
          />
          <label for="low" className="text-xs text-slate-500">
            Low
          </label>
        </div>
      </div>
      {errorMessage !== "" && errorMessagePanel}
    </div>
  );
}

export default AddItem;
