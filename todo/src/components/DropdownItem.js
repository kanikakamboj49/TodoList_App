function DropdownItem({ name, handleItemClick }) {
  const handleClick = () => {
    handleItemClick();
  };

  return <div onClick={handleClick}>{name}</div>;
}

export default DropdownItem;
