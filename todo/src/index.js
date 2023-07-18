import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TodoListProvider } from "./context/todoList";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
  <TodoListProvider>
    <App />
  </TodoListProvider>
);
