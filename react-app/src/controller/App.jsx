import React, { Component } from "react";
import Home from "./Home";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <input
          type="text"
          onChange={event => this.setState({ input: event.target.value })}
        />
        <Home input={this.state.input} />
      </React.Fragment>
    );
  }
}

export default App;
