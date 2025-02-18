import React from "react";
import ReactDOM from "react-dom/client";

import { Popup } from "./popup";

import "./index.css";

function init() {
  const root = document.getElementById("app-container");

  if (!root) {
    throw new Error("Can not find #app-container");
  }

  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <Popup />
    </React.StrictMode>,
  );
}

init();
