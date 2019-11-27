import React from "react";
import "./Tictactoe.css";
import { MyContext } from "../../contexts/Test";
import Div from './Div/Div';

const TicTacToe = () => {
  let currentTurn = 'O'
  let buildTable = context => {
    let width = context.width;
    let length = context.length;
    let box = [...Array(parseInt(length))].map((el, i) => {
      return (
        <Div key={`${i}`} name={`${i}`} child={width}>
     
        </Div>
        // <div key={i} className={`box ${i}`}>
        //   {[...Array(parseInt(width))].map((child, k) => {
        //     return (
        //       <div onClick={chooseRow} key={k} data-id={k} className="row">
              
        //       </div>
        //     );
        //   })}
        // </div>
      );
    });
    return box;
  };

  let chooseRow = event => {
    console.log(event.currentTarget.textContent !== 'X')
    if((event.currentTarget.textContent !== 'X') &&  (event.currentTarget.textContent !== 'O')){
    currentTurn === 'O' ? currentTurn = 'X' : currentTurn = 'O' 
    return event.currentTarget.textContent = currentTurn;
    } 
    alert('yleee');

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
