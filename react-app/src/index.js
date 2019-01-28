import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// import App from "./components/App";
import Nav from "./router/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <div className="container">
    <BrowserRouter>
      <Nav />
    </BrowserRouter>
    {/* <App /> */}
  </div>,
  document.getElementById("root")
);

serviceWorker.unregister();
