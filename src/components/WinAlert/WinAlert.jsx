import React from "react";
import WinStyles from "./WinAlert.module.css";

const WinAlert = ctx => {
   let test = (event) => {
       console.log(event.target);
   }

  if (ctx.ctx.state.winner) {
    return (
      <div className={WinStyles.container} onClick={test}>
        <div className={WinStyles.box}>
            Winner is {ctx.ctx.state.winner}
        </div>
      </div>
    );
  }
  return null
};

export default WinAlert;
