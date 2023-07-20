import { RiDeleteBin5Line, RiEdit2Line } from "react-icons/ri";
import { MdDownloadDone } from "react-icons/md";
import useTodoListContext from "../hooks/use-todolist-context";
import { useState } from "react";
import Priority from "./Priority";
import Button from "./Button";

function ListItem({ item }) {
  const { editTodoItem, deleteTodoItem, editTodoItemStatus } =
    useTodoListContext();
  const [showPanel, setShowPane] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    setNewTitle(event.target.value);
  };

  const handleCheckboxChange = () => {
    editTodoItemStatus(item.id, item);
  };

  const handleDeleteClick = () => {
    deleteTodoItem(item.id);
  };

  const handleEditClick = () => {
    setErrorMessage("");
    setShowPane(!showPanel);
  };

  const handleSaveClick = () => {
    if (newTitle !== "") {
      editTodoItem(item.id, item, newTitle);
      setNewTitle("");
      setErrorMessage("");
      setShowPane(false);
    } else {
      setErrorMessage("Please enter valid title");
    }
  };

  const errorMessagePanel = (
    <div className="text-xs text-red-500 text-center">{errorMessage}</div>
  );

  const editPanel = (
    <div>
      <div className="flex justify-around mt-3">
        <input
          value={newTitle}
          onChange={handleChange}
          placeholder="New Title..."
        ></input>
        <Button
          className="w-5 h-4 border-2 border-slate-300 bg-gradient-to-r from-slate-400 to-slate-300 ... rounded"
          onClick={handleSaveClick}
        >
          <MdDownloadDone />
        </Button>
      </div>
      {errorMessage !== "" && errorMessagePanel}
    </div>
  );

  return (
    <div className="w-1/1 p-3 bg-slate-50 mb-1 rounded">
      <div
        className={`flex justify-between ${item.isComplete && "line-through"}`}
      >
        <input
          value={item}
          type="checkbox"
          className="accent-indigo-400 cursor-pointer"
          checked={item.isComplete}
          onChange={handleCheckboxChange}
        />
        <div>{item.title}</div>
        <div className="w-20 flex flex-row justify-around items-center">
          <Priority level={item.priority} />
          <RiDeleteBin5Line
            onClick={handleDeleteClick}
            className="cursor-pointer"
          />
          {!item.isComplete && (
            <RiEdit2Line onClick={handleEditClick} className="cursor-pointer" />
          )}
        </div>
      </div>
      {showPanel && editPanel}
    </div>
  );
}

export default ListItem;
