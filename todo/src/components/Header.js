import classNames from "classnames";

function Header({ children, className }) {
  const classes = classNames(className, "flex flex-wrap justify-around");
  return <div className={classes}>{children}</div>;
}

export default Header;
