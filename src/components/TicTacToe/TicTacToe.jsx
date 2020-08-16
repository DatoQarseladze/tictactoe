import React, { useEffect } from "react";
import tictacStyles from "./Tictactoe.module.css";
import Div from "./Div/Div";

const TicTacToe = (ctx) => {
  let width = parseInt(ctx.ctx.state.details.width);
  let length = parseInt(ctx.ctx.state.details.length);
  let row = parseInt(ctx.ctx.state.details.rows);
  let checkWinConditions = async (winnerCount, row, player) => {
    if (winnerCount === row - 1) {
      ctx.ctx.setWinner(player);
    }
  };

  let checkVertical = (stats, num, row, player) => {
    let winnerNum = num;
    let winnerCount = 0;
    for (let i = 1; i < row; i++) {
      winnerNum = [winnerNum[0] + 1, winnerNum[1] + width];
      for (let i = 0; i < stats.length; i++) {
        if (stats[i][0] === winnerNum[0] && stats[i][1] === winnerNum[1]) {
          winnerCount++;
          checkWinConditions(winnerCount, row, player);
        }
      }
    }
  };

  let checkHorizontal = (stats, num, row, player) => {
    let winnerNum = num;
    let winnerCount = 0;
    for (let i = 1; i < row; i++) {
      winnerNum = [winnerNum[0], winnerNum[1] + 1];
      for (let i = 0; i < stats.length; i++) {
        if (stats[i][0] === winnerNum[0] && stats[i][1] === winnerNum[1]) {
          winnerCount++;
          checkWinConditions(winnerCount, row, player);
        }
      }
    }
  };

  let checkDiagonal = (stats, num, row, statement, player) => {
    let winnerNum = num;
    let winnerCount = 0;
    switch (statement) {
      case "diagonal":
        for (let i = 1; i < row; i++) {
          winnerNum = [winnerNum[0] + 1, winnerNum[1] + width + 1];
          for (let i = 0; i < stats.length; i++) {
            if (stats[i][0] === winnerNum[0] && stats[i][1] === winnerNum[1]) {
              winnerCount++;
              checkWinConditions(winnerCount, row, player);
            }
          }
        }
        break;

      case "reverse":
        for (let i = 1; i < row; i++) {
          winnerNum = [winnerNum[0] + 1, winnerNum[1] + width - 1];
          for (let i = 0; i < stats.length; i++) {
            if (stats[i][0] === winnerNum[0] && stats[i][1] === winnerNum[1]) {
              winnerCount++;
              checkWinConditions(winnerCount, row, player);
            }
          }
        }
        break;
      default:
        break;
    }
  };

  let verticalCheck = (stats, player) => {
    stats.forEach((element) => {
      checkVertical(stats, element, row, player);
    });
  };

  let horizontCheck = (stats, player) => {
    stats.sort().forEach((num) => {
      checkHorizontal(stats, num, row, player);
    });
  };

  let diagonalCheck = (stats, player) => {
    stats.sort().forEach((num) => {
      checkDiagonal(stats, num, row, "diagonal", player);
    });
  };

  let reverseDiagonalCheck = (stats, player) => {
    stats.sort().forEach((num) => {
      checkDiagonal(stats, num, row, "reverse", player);
    });
  };

  let findWinner = async (stats, player) => {
    if (stats.length) {
      //Vertical
      await verticalCheck(stats, player);
      //Horizont
      await horizontCheck(stats, player);
      //Diagonal
      await diagonalCheck(stats, player);
      //Reverse Diagonal
      await reverseDiagonalCheck(stats, player);
    }
  };

  /*State listeners start*/
  useEffect(() => {

    ctx.ctx.state.Xturns
      ? findWinner(ctx.ctx.state.Xturns, "X")
      : findWinner(ctx.ctx.state.Oturns, "O");

  }, [ctx.ctx.state.Xturns, ctx.ctx.state.Oturns]);

  useEffect(() => {
    if (ctx.ctx.state.currentTurn === width * length) {
      alert("draw");
    }
  }, [ctx.ctx.state.currentTurn]);
  /*State listeners end  */

  let buildTable = (context) => {
    let mult = width * length;

    let box = [...Array(parseInt(length))].map((el, i) => {
      return (
        <Div
          name={`${i}`}
          key={i}
          index={i}
          totalTurns={mult}
          width={width}
          length={length}
          context={context}
        ></Div>
      );
    });
    return box;
  };

  if (ctx.ctx.state.active) {
    return (
      <div className={tictacStyles.tictacContainer}>{buildTable(ctx.ctx)}</div>
    );
  }
  return <div className={tictacStyles.tictacContainer}>Enter Options</div>;
};

export default TicTacToe;
