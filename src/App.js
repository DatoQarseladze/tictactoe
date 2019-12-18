/* eslint-disable */
import React, { Component } from "react";
import MyProvider, { MyContext } from "./contexts/TictacStatsContext";
import TicTacToe from "./components/TicTacToe/TicTacToe";
import Input from "./components/Input/Input";
import appStyles from "./App.module.css";
import WinAlert from "./components/WinAlert/WinAlert";

class App extends Component {
  render() {
    return (
        <MyProvider>
          <div className={appStyles.container}>
            <MyContext.Consumer>
              {context => <TicTacToe ctx={context} />}
            </MyContext.Consumer>
            <Input />
            <MyContext.Consumer>
            {context => <WinAlert ctx={context} />}
            </MyContext.Consumer>
          </div>
        </MyProvider>
    );
  }
}

export default App;
