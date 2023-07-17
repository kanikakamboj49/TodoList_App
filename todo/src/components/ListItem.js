import { RiDeleteBin5Line } from "react-icons/ri";

function ListItem({ item }) {
  return (
    <div
      className="flex justify-between w-1/1 p-3 bg-slate-50 mb-3 rounded"
      key={item}
    >
      <input type="checkbox" />
      {item}
      <RiDeleteBin5Line />
    </div>
  );
}

export default ListItem;
