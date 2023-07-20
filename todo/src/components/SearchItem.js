import { useEffect, useState } from "react";

function SearchItem({ onTitleChange }) {
  const [title, setTitle] = useState("");

  useEffect(() => {
    const intervalId = setTimeout(() => {
      onTitleChange(title);
    }, 400);

    return () => {
      clearTimeout(intervalId);
    };
  }, [title]);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

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
      </div>
    </div>
  );
}

export default SearchItem;
