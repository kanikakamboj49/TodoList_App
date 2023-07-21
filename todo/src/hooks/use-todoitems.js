import { useState } from "react";
import useTodoListContext from "../hooks/use-todolist-context";

function useTodoItems() {
  const { todoList } = useTodoListContext();
  const [todoItems, setTodoItems] = useState([]);

  const handleSearch = (title) => {
    console.log(title);
    if (title === "") {
      setTodoItems(todoList);
    } else {
      const updatedItems = todoList.filter((item) => {
        return item.title.includes(title);
      });
      console.log(updatedItems);
      setTodoItems(updatedItems);
    }
  };

  const sortTodoList = (item) => {
    if (item.criteria === "Creation Date") {
      const sortOrder = item.order === "Asc" ? 1 : -1;
      const updatedItems = todoItems.sort((itemA, itemB) => {
        return (
          (new Date(itemA.creationDate) - new Date(itemB.creationDate)) *
          sortOrder
        );
      });
      setTodoItems(updatedItems);
    } else if (item.criteria === "Status") {
      const completeItems = todoItems.filter((item) => {
        return item.isComplete === true;
      });
      const incompleteItems = todoItems.filter((item) => {
        return item.isComplete === false;
      });

      if (item.order === "Complete") {
        console.log("complete items");
        const updatedItems = [...completeItems, ...incompleteItems];
        setTodoItems(updatedItems);
        console.log(todoItems);
      } else if (item.order === "Incomplete") {
        console.log("incomplete items");
        const updatedItems = [...incompleteItems, ...completeItems];
        setTodoItems(updatedItems);
        console.log(todoItems);
      }
    }
  };

  const filtertodoList = (criteria) => {
    if (criteria !== "All") {
      const updatedItems = todoList.filter((item) => {
        return item.priority === criteria;
      });
      setTodoItems(updatedItems);
    } else {
      setTodoItems(todoList);
    }
  };

  return {
    todoList,
    todoItems,
    setTodoItems,
    sortTodoList,
    filtertodoList,
    handleSearch,
  };
}

export default useTodoItems;
