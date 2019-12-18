/* eslint react/prop-types: 0 */
import React, { useRef, useEffect, useCallback } from "react";
import WinStyles from "./WinAlert.module.css";

const WinAlert = ctx => {
  const endGame = () => {
    ctx.ctx.setWinner("");
    ctx.ctx.endGame(false);
    ctx.ctx.clearCoords([], 0);
  };

  const handleUserKeyPress = useCallback(event => {
    const { keyCode } = event;
    if (keyCode === 27 && !ctx.ctx.state.winner) {
      endGame();
      //eslint-disable-next-line
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);
    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, [handleUserKeyPress]);

 
  const modalContainer = useRef(null);
  let test = event => {
    if (!modalContainer.current.contains(event.target)) {
      endGame();
    }
  };

  if (ctx.ctx.state.winner) {
    return (
      <div className={WinStyles.container} onClick={test}>
        <div className={WinStyles.box} ref={modalContainer}>
          Winner is {ctx.ctx.state.winner}
        </div>
      </div>
    );
  }
  return null;
};

export default WinAlert;
