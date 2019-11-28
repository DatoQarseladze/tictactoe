import React from "react";
import ChildDiv from "./ChildDiv/ChildDiv";

const Div = ({ name, width, totalTurns, index, context, length }) => {
  let rowName = "r";


  return (
    <div key={`${name}`} className={`box ${rowName + parseInt(index + 1)} `}>
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
