import React from "react";
import ReactDOM from "react-dom";
import App from "./controller/App";
import Router from "./router/BasicExample";

class BrokenButton extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router />
        <App />
      </React.Fragment>
    );
  }
}

ReactDOM.render(<BrokenButton />, document.getElementById("root"));
