import React, { useState } from "react";

const ChildDiv = ({ totalTurns, parentIndex, ownIndex, width, context }) => {
  let turn;
  const [value, setValue] = useState("");
  let test = (event, context) => {
    //Check if value is empty
    if (value !== "O" && value !== "X") {
      if (context.getTotalTurns() !== totalTurns) {
        context.setTotalTurns(totalTurns);
      }

      context.currentTurn();
      //Get which player clicks
      context.getTurn() === "O" ? (turn = "X") : (turn = "O");
      let currentIndex = parseInt(event.currentTarget.className.split("-")[1]);
      context.setCoords(turn, currentIndex);

      //Just for background
      turn === "X"
        ? event.target.classList.add("activeX")
        : event.target.classList.add("activeY");
      context.changeTurn(turn);
      setValue(prevCount => turn);
      //Check if all values are filled
      // if (context.getCurrentTurn() === totalTurns) {
      //   alert("Draw");
      // }
    }
  };

  return (
    <div
      onClick={e => test(e, context)}
      className={`row r-${parentIndex * width + ownIndex}`}
    >
      <p>{value}</p>
    </div>
  );
};

export default ChildDiv;
