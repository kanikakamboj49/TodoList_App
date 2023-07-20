import classNames from "classnames";

function Button({ children, items, className, ...rest }) {
  const classes = classNames(className, "flex justify-center items-center m-2");
  return (
    <div className="flex flex-col justify-center" {...rest}>
      <button className={classes}>{children}</button>
    </div>
  );
}

export default Button;
