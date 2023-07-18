import ListItem from "./ListItem";
import useTodoListContext from "../hooks/use-todolist-context";
import AddItem from "./AddItem";

function TodoList() {
  const { todoList } = useTodoListContext();

  const renderedList = todoList.map((item) => {
    return (
      <div>
        <ListItem key={item.id} item={item} />
      </div>
    );
  });

  return (
    <div className="flex flex-col items-center m-5 w-4/4">
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-400 ... w-80 h-10 text-center font-black text-xl rounded-tl rounded-tr">
        My Todo List
      </div>
      <AddItem />
      <div className="w-80">{renderedList}</div>
    </div>
  );
}

export default TodoList;
