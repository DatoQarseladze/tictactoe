import React from "react";
import "./App.css";
import Input from "./components/Input/Input";
import TicTacToe from "./components/TicTacToe/TicTacToe";
import { Test, numbers } from './contexts/Test'

function App() {
  return (
    <div className="container">
{ numbers.number1 > 0 && <TicTacToe /> }
      <Input />
    </div>
  );
}

export default App;
