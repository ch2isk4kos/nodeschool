import React from "react";
import ReactDOM from "react-dom";
import TodoBox from "./views/index.jsx";

let data = JSON.parse(
  document.getElementById("initial-data").getAttribute("data-json")
);

ReactDOM.render(<TodoBox data={data} />, document.getElementById("app"));

/**
 * this code allows to use React on the front end
 * and assumes that there will be some data attached to a DOM element with the id initial-data
 * i.e.: <TodoBox ... />
 * which will be injected into whichever DOM element has an id of "app".
 */
