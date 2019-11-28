import React, { Component } from "react";
import MyProvider, { MyContext } from "./contexts/TictacStatsContext";
import TicTacToe from "./components/TicTacToe/TicTacToe";
import Input from "./components/Input/Input";
import "./App.css";

class App extends Component {
  render() {
    return (
      <MyProvider>
        <div className="container">
          <MyContext.Consumer>
            {context => 
            <TicTacToe ctx={context}/>
            }
            </MyContext.Consumer>
          <Input />
        </div>
      </MyProvider>
    );
  }
}

export default App;
