import React from "react";
import ReactDOM from "react-dom/client";
import { ContadorApp } from "./ContadorApp";
import "./Styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContadorApp value={10000}/>
  </React.StrictMode>
);
