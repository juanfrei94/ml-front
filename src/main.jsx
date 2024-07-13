import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { MeliChallangeApp } from "./MeliChallangeApp";
import "./styles.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MeliChallangeApp />
    </BrowserRouter>
  </React.StrictMode>
);
