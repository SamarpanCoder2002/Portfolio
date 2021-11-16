import React from "react";
import ReactDOM from "react-dom";
import "./css/style.css";
import RoutesEntryPoint from "./routes";

require("dotenv").config();

ReactDOM.render(<RoutesEntryPoint />, document.getElementById("root"));
