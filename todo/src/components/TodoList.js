import ListItem from "./ListItem";
import AddItem from "./AddItem";
import { MdFilterList, MdOutlineSearch } from "react-icons/md";
import { GrFormAdd } from "react-icons/gr";
import { BiSortAlt2 } from "react-icons/bi";
import { useEffect } from "react";
import SearchItem from "./SearchItem";
import Button from "./Button";
import DropdownButton from "./DropdownButton";
import Header from "./Header";
import useAddSearch from "../hooks/use-add-search";
import useFilterSort from "../hooks/use-filter-sort";
import useTodoItems from "../hooks/use-todoitems";

function TodoList() {
  const { additem, searchitem, handleAddItemClick, handleSearchItemClick } =
    useAddSearch();
  const {
    showFilter,
    showSort,
    setShowFilter,
    setShowSort,
    handleFilterEnter,
    handleFilterLeave,
    handleSortEnter,
    handleSortLeave,
  } = useFilterSort();
  const {
    todoList,
    todoItems,
    setTodoItems,
    sortTodoList,
    filtertodoList,
    handleSearch,
  } = useTodoItems();

  useEffect(() => {
    setTodoItems(todoList);
  }, [todoList]);

  const sortItems = [
    {
      name: "Creation Date (Asc)",
      handleClick: () => {
        sortTodoList({ criteria: "Creation Date", order: "Asc" });
        setShowSort(false);
      },
    },
    {
      name: "Creation Date (Desc)",
      handleClick: () => {
        sortTodoList({ criteria: "Creation Date", order: "Desc" });
        setShowSort(false);
      },
    },
    {
      name: "Complete First",
      handleClick: () => {
        sortTodoList({ criteria: "Status", order: "Complete" });
        setShowSort(false);
      },
    },
    {
      name: "In-complete First",
      handleClick: () => {
        sortTodoList({ criteria: "Status", order: "Incomplete" });
        setShowSort(false);
      },
    },
  ];

  const filterItems = [
    {
      name: "High Priority",
      handleClick: () => {
        filtertodoList("High");
        setShowFilter(false);
      },
    },
    {
      name: "Medium Priority",
      handleClick: () => {
        filtertodoList("Medium");
        setShowFilter(false);
      },
    },
    {
      name: "Low Priority",
      handleClick: () => {
        filtertodoList("Low");
        setShowFilter(false);
      },
    },
    {
      name: "All",
      handleClick: () => {
        filtertodoList("All");
        setShowFilter(false);
      },
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
