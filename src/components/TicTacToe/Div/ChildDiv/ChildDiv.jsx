import React from "react";
import { MyContext } from "../../../../contexts/Test";

const ChildDiv = ({ width, value }) => {
  let test = (value, context) => {
    if (value !== "X" && val !== "O") {
      value = "laslda";
    }
  };
  return (
    <MyContext.Consumer>
      {context => (
        <div
          onClick={() => test(value, context.ChangeTurn)}
          className="row"
        ></div>
      )}
    </MyContext.Consumer>
  );
};

export default ChildDiv;
