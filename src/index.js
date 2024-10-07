import "bootstrap/dist/css/bootstrap.min.css"; // Import CSS của Bootstrap
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css"; // Import các style tùy chỉnh nếu có
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
