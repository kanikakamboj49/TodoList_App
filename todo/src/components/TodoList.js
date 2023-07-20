import ListItem from "./ListItem";
import useTodoListContext from "../hooks/use-todolist-context";
import AddItem from "./AddItem";
import { MdFilterList, MdOutlineSearch } from "react-icons/md";
import { GrFormAdd } from "react-icons/gr";
import { BiSortAlt2 } from "react-icons/bi";
import { useEffect, useState } from "react";
import SearchItem from "./SearchItem";
import Button from "./Button";
import DropdownButton from "./DropdownButton";
import Header from "./Header";

function TodoList() {
  const { todoList } = useTodoListContext();
  const [todoItems, setTodoItems] = useState([]);
  const [additem, setAddItem] = useState(false);
  const [searchitem, setSearchItem] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [showSort, setShowSort] = useState(false);

  useEffect(() => {
    setTodoItems(todoList);
  }, [todoList]);

  const handleAddItemClick = () => {
    if (searchitem === true) {
      setSearchItem(false);
    }
    setAddItem(!additem);
  };

  const handleSearchItemClick = () => {
    if (additem === true) {
      setAddItem(false);
    }
    setSearchItem(!searchitem);
  };

  const handleSearch = (title) => {
    console.log(title);
    if (title === "") {
      setTodoItems(todoList);
    } else {
      const updatedItems = todoList.filter((item) => {
        return item.title.includes(title);
      });
      setTodoItems(updatedItems);
    }
  };

  const handleSortEnter = () => {
    setShowSort(true);
  };

  const handleSortLeave = () => {
    setShowSort(false);
  };

  const handleFilterEnter = () => {
    setShowFilter(true);
  };

  const handleFilterLeave = () => {
    setShowFilter(false);
  };

  const sortTodoList = (name) => {
    console.log(`Sort for ${name}`);
  };

  const filtertodoList = (criteria) => {
    console.log(`Filtering for ${criteria}`);
    if (criteria !== "All") {
      const updatedItems = todoList.filter((item) => {
        return item.priority === criteria;
      });
      setTodoItems(updatedItems);
    } else {
      setTodoItems(todoList);
    }
  };

  const sortItems = [
    {
      name: "Creation Date",
      handleClick: () => sortTodoList("Creation Date"),
    },
    {
      name: "Completion Status",
      handleClick: () => sortTodoList("Completion Status"),
    },
  ];

  const filterItems = [
    {
      name: "High Priority",
      handleClick: () => filtertodoList("High"),
    },
    {
      name: "Medium Priority",
      handleClick: () => filtertodoList("Medium"),
    },
    {
      name: "Low Priority",
      handleClick: () => filtertodoList("Low"),
    },
    {
      name: "All",
      handleClick: () => filtertodoList("All"),
    },
  ];

  const renderedList = todoItems.map((item) => {
    return (
      <div key={item.id}>
        <ListItem item={item} />
      </div>
    );
  });

  return (
    <div className="flex flex-col items-center m-5 w-4/4">
      <Header className="bg-gradient-to-r from-indigo-600 to-indigo-400 ... w-80 font-black text-xl rounded-tl rounded-tr">
        <Button
          className=" bg-gradient-to-r from-indigo-700 to-indigo-500 ... w-7 rounded-full"
          onClick={handleAddItemClick}
        >
          <GrFormAdd />
        </Button>
        My Todo List
        <Button
          className="bg-gradient-to-r from-indigo-500 to-indigo-700 ... w-7 rounded-full"
          onClick={handleSearchItemClick}
        >
          <MdOutlineSearch />
        </Button>
      </Header>

      <div>
        {additem && <AddItem />}
        {searchitem && <SearchItem onTitleChange={handleSearch} />}
      </div>

      <div className="flex w-80 p-1 bg-slate-50 mb-1 justify-around">
        <DropdownButton
          className="bg-gradient-to-r from-slate-300 to-slate-200 ... w-4/5 p-1 rounded"
          items={sortItems}
          showmenu={showSort.toString()}
          onMouseEnter={handleSortEnter}
          onMouseLeave={handleSortLeave}
        >
          <BiSortAlt2 />
        </DropdownButton>
        <DropdownButton
          className="bg-gradient-to-r from-slate-300 to-slate-200 ... w-4/5 p-1 rounded"
          items={filterItems}
          showmenu={showFilter.toString()}
          onMouseEnter={handleFilterEnter}
          onMouseLeave={handleFilterLeave}
        >
          <MdFilterList />
        </DropdownButton>
      </div>
      <div className="w-80">{renderedList}</div>
    </div>
  );
}

export default TodoList;
