import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import Button from "./Button.js"
import Reaction from "./Reaction.js"

class App extends Component{
  render() {
    return (
      <div className="App">
        <h1> Hello, World! </h1>
        <Button/>
        <div style={{margin: '120px'}}>
          <Reaction/>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);