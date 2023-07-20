function DropdownItem({ name, handleItemClick }) {
  const handleClick = () => {
    handleItemClick();
  };

  return (
    <div
      className="border-2 border-indigo-100 text-xs text-center font-bold bg-slate-100 opacity-90 w-20 rounded cursor-pointer"
      onClick={handleClick}
    >
      {name}
      <br className=""></br>
    </div>
  );
}

export default DropdownItem;
