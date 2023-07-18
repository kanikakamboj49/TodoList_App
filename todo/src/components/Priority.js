import classNames from "classnames";

function Priority({ level }) {
  //   const classes = classNames(
  //     "w-2 h-2 bg-red-500 rounded",
  //     level === "High" && "bg-red-500",
  //     level === "Medium" && "bg-yellow-500",
  //     level === "Low" && "bg-green-500"
  //   );

  return (
    <div
      className={`w-2 h-2 bg-red-500 rounded ${
        level === "High" ? "bg-red-500" : "bg-yellow-500"
      }`}
    ></div>
  );
}

export default Priority;
