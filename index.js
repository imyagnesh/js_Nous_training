import React, { Component } from "react";
import ReactDOM from "react-dom";
// import App from './App'
import "./index.css";

// Whenever i change state or props value that time only component rerender

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.clickCounter = this.clickCounter.bind(this);
  }

  clickCounter() {
    this.setState(
      (state) => ({ counter: state.counter + 1 }),
      () => {
        console.log(this.state.counter);
      }
    );

    
  }

  render() {
    console.log("render method");

    const { name, title } = this.props;

    return (
      <>
        <h1>{name}</h1>
        <h2>{title}</h2>
        <h3>{this.state.counter}</h3>
        <button onClick={this.clickCounter}>Click Counter</button>
      </>
    );
  }
}

ReactDOM.render(
  <App name="Yagnesh" title="Full Stack Developer" />,
  document.getElementById("root")
);
