import classNames from "classnames";

function Priority({ level }) {
  const classes = classNames(
    "w-2 h-2 rounded",
    level === "High" && "bg-red-600",
    level === "Medium" && "bg-amber-500",
    level === "Low" && "bg-green-800"
  );

  return <div className={classes}></div>;
}

export default Priority;
