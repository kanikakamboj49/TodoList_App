import { RiDeleteBin5Line, RiEdit2Line, RiSave3Line } from "react-icons/ri";
import { MdDownloadDone } from "react-icons/md";
import useTodoListContext from "../hooks/use-todolist-context";
import { useState } from "react";

function ListItem({ item }) {
  const { editTodoItem, deleteTodoItem, editTodoItemStatus } =
    useTodoListContext();
  const [showPanel, setShowPane] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [errorMessage, setErrorMessage] = useState(
    "Note : Please enter valid title"
  );

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
        <button
          className="flex justify-center w-5 h-4 bg-gradient-to-r from-slate-400 to-slate-300 ..."
          onClick={handleSaveClick}
        >
          <MdDownloadDone />
        </button>
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
          className="accent-indigo-400"
          checked={item.isComplete}
          onChange={handleCheckboxChange}
        />
        {item.title}
        <div className="w-10 flex flex-row justify-between">
          <RiDeleteBin5Line onClick={handleDeleteClick} />
          {!item.isComplete && <RiEdit2Line onClick={handleEditClick} />}
        </div>
      </div>
      {showPanel && editPanel}
    </div>
  );
}

export default ListItem;
