import React, { Component } from "react";
import Home from "./Home";
// Parent
class App extends Component {
  // statefull
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
