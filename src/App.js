import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import Button from "./Button.js"

class App extends Component{
  render() {
    return (
      <div className="App">
        <h1> Hello, World! </h1>
        <Button/>
      </div>
    );
  }
}

export default hot(module)(App);