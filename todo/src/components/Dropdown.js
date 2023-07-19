import DropdownItem from "./DropdownItem";

function Dropdown({ items }) {
  const dropdownItems = (
    <div className="absolute bg-yellow-500 w-20 rounded">
      <ul>
        {items.map((item, index) => {
          return (
            <li>
              <DropdownItem
                key={index}
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
