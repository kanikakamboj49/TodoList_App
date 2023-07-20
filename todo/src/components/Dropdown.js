import DropdownItem from "./DropdownItem";

function Dropdown({ items }) {
  const dropdownItems = (
    <div className="absolute">
      <ul>
        {items.map((item, index) => {
          return (
            <li key={index}>
              <DropdownItem
                name={item.name}
                handleItemClick={item.handleClick}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );

  return <div className="relative">{dropdownItems}</div>;
}

export default Dropdown;
