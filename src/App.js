import React, { Component } from "react";
import MyProvider from "./contexts/Test";
import TicTacToe from "./components/TicTacToe/TicTacToe";
import Input from "./components/Input/Input";
import "./App.css";

class App extends Component {
  render() {
    return (
      <MyProvider>
        <div className="container">
          <TicTacToe />
          <Input />
        </div>
      </MyProvider>
    );
  }
}

export default App;
