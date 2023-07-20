import classNames from "classnames";
import Dropdown from "./Dropdown";

function DropdownButton({ children, items, className, ...rest }) {
  const classes = classNames(className, "flex justify-center items-center m-2");
  return (
    <div className="flex flex-col justify-center items-center w-4/5" {...rest}>
      <button className={classes}>{children}</button>
      {rest.showmenu === "true" && <Dropdown items={items} />}
    </div>
  );
}

export default DropdownButton;
