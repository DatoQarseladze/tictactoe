import React from "react";
import "./Tictactoe.css";
import { MyContext } from "../../contexts/Test";

const TicTacToe = () => {
  let buildTable = context => {
    let width = context.width;
    let length = context.length;
    console.log('asd');
    let box = [...Array(parseInt(length))].map((el, i) => {
      return (
        <div key={i} className='box'>
          {[...Array(parseInt(width))].map((child, k) => {
            return <div key={k} className='row'> </div>;
          })}
        </div>
      );
    });
    return box;
  };

  return (
    <MyContext.Consumer>
      {context => {
        if (context.state.age > 100) {
         
          return (
            <div className="tictac-container">
              <h1>I'm Inside provider</h1>
              {buildTable(context.state.details)}
            </div>
          );
        }
        return <div className="tictac-container"></div>;
      }}
    </MyContext.Consumer>
  );
};

export default TicTacToe;
