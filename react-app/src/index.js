import React from 'react'
import ReactDOM from 'react-dom'

class BrokenButton extends React.Component {
    constructor(props) {
        super(props);
        this.description= false;  // I declare the variable here
    }
  render() {
    return (
      <input type="text">
        Set background to red
      </input>
    )
  }

  handleClick() {
      console.log(this.description);
    this.description= true ;
  }
}

ReactDOM.render(
  <BrokenButton />,
  document.getElementById('root')
)
