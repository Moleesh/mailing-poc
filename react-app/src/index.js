import React from "react";
import ReactDOM from "react-dom";
import App from "./controller/App";

class BrokenButton extends React.Component {
  render() {
    return <App />;
  }
}

ReactDOM.render(<BrokenButton />, document.getElementById("root"));
