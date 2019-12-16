import React from "react";
import ChildDiv from "./ChildDiv/ChildDiv";
import tictacStyles from '../Tictactoe.module.css'

const Div = ({ name, width, totalTurns, index, context, length }) => {
  let rowName = "r";


  return (
    <div key={`${name}`}  className={`${tictacStyles.box}  ${rowName + parseInt(index + 1)} `}>
      {[...Array(parseInt(width))].map((el, i) => {
        return (
          <ChildDiv
            key={i}
            parentIndex={index}
            ownIndex={i + 1}
            width={width}
            totalTurns={totalTurns}
            context={context}
            length={length}
          ></ChildDiv>
        );
      })}
    </div>
  );
};
export default Div;
