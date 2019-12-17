import React, {useRef} from "react";
import WinStyles from "./WinAlert.module.css";

const WinAlert = ctx => {
  const modalContainer = useRef(null);
   let test = (event) => {
      console.log(modalContainer.current.contains(event.target));
      if(!modalContainer.current.contains(event.target)){

      ctx.ctx.setWinner('');
      }
   }

  if (ctx.ctx.state.winner) {
    return (
      <div className={WinStyles.container} onClick={test}>
        <div className={WinStyles.box} ref={modalContainer}>
            Winner is {ctx.ctx.state.winner}
        </div>
      </div>
    );
  }
  return null
};

export default WinAlert;
