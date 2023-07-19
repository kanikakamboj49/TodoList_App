import ListItem from "./ListItem";
import useTodoListContext from "../hooks/use-todolist-context";
import AddItem from "./AddItem";
import { MdFilterList } from "react-icons/md";
import { BiSortAlt2 } from "react-icons/bi";
import { useState } from "react";
import Dropdown from "./Dropdown";

function TodoList() {
  const { todoList } = useTodoListContext();
  const [showFilter, setShowFilter] = useState(false);
  const [showSort, setShowSort] = useState(false);

  const handleSortClick = () => {
    if (showFilter === true) {
      setShowFilter(false);
    }
    setShowSort(!showSort);
  };

  const handleFilterClick = () => {
    if (showSort === true) {
      setShowSort(false);
    }
    setShowFilter(!showFilter);
  };

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

  const renderedList = todoList.map((item) => {
    return (
      <div key={item.id}>
        <ListItem item={item} />
      </div>
    );
  });

  return (
    <div className="flex flex-col items-center m-5 w-4/4">
      <div className="flex justify-around bg-gradient-to-r from-indigo-600 to-indigo-400 ... w-80 h-10 text-center font-black text-xl rounded-tl rounded-tr">
        <div className="flex flex-col justify-center">
          <button onClick={handleSortClick}>
            <BiSortAlt2 />
          </button>
          {showSort && <Dropdown items={items} />}
        </div>
        My Todo List
        <div className="flex flex-col justify-center">
          <button onClick={handleFilterClick}>
            <MdFilterList />
          </button>
          {showFilter && <Dropdown items={items} />}
        </div>
      </div>
      <AddItem />
      <div className="w-80">{renderedList}</div>
    </div>
  );
}

export default TodoList;
