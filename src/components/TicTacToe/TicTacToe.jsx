import React, { useEffect } from "react";
import "./Tictactoe.css";
import Div from "./Div/Div";

const TicTacToe = ctx => {
  let width = parseInt(ctx.ctx.state.details.width);
  let length = parseInt(ctx.ctx.state.details.length);
  let row = parseInt(ctx.ctx.state.details.rows);

  let mult = width * length;


  let alertDraw = winner => {
    if(!winner && (ctx.ctx.state.currentTurn === mult)){
      alert('Draw');
    }
  }

  let checkVertical = (stats,player,counter, counterWin) => {
      while (counter + width < mult + width) {
          counter = counter + width;
          if (stats.includes(counter)) {
            counterWin++;
          } else {
            counterWin = 0;
            break;
          }
          if (counterWin === row - 1) {
            ctx.ctx.setWinner();
            alert(player + " Won from function!");
          }
        }
        counter = num;
        return true;
  }
  
   const findWinner =  (stats, player) => {
    if (stats.length) {
      let counter = 0;
      let counterWin = 0;
      stats.sort().forEach(async num => {
        counter = num;

        //Vertical
        await checkVertical(stats,player,counter, counterWin);

        // while (counter + width < mult + width) {
        //   counter = counter + width;
        //   if (stats.includes(counter)) {
        //     counterWin++;
        //   } else {
        //     counterWin = 0;
        //     break;
        //   }

        //   if (counterWin === row - 1) {
        //     ctx.ctx.setWinner();
        //     alert(player + " Won!");
        //   }
        // }
        // counter = num;

        //Horizont
        // while (counter + 1 < Math.ceil(counter / width) * width + 1) {
        //   counter = counter + 1;
        //   if (stats.includes(counter)) {
        //     counterWin++;
        //   } else {
        //     counterWin = 0;
        //     break;
        //   }
        //   if (counterWin === row - 1) {
        //     ctx.ctx.setWinner();
        //     alert(player + " Won!");
        //   }
        // }
        // counter = num;

        //Diagonal
        // while (counter + (width - 1) < mult) {
        //   counter = counter + width - 1;
        //   if (stats.includes(counter)) {
        //     counterWin++;
        //   } else {
        //     counterWin = 0;
        //     break;
        //   }
        //   if (counterWin === row - 1) {
        //     ctx.ctx.setWinner();
        //     alert(player + " Won!");
        //   }
        // }
        // counter = num;

        //Reverse Diagonal
        // while (counter + (width + 1) < mult + width) {
        //   counter = counter + width + 1;
        //   if (stats.includes(counter)) {
        //     counterWin++;
        //   } else {
        //     counterWin = 0;
        //     break;
        //   }
        //   if (counterWin === row - 1) {
        //     ctx.ctx.setWinner();
        //     alert(player + " Won!");
        //   }
        // }
        // counter = num;
      });
    }
  };

  useEffect(() => {
    findWinner(ctx.ctx.state.Xturns, "X");
  }, [ctx.ctx.state.Xturns]);

  useEffect(() => {
    findWinner(ctx.ctx.state.Oturns, "O");
  }, [ctx.ctx.state.Oturns]);


  useEffect(() => {
    alertDraw(ctx.ctx.state.winner)
  }, [ctx.ctx.state.winner])

  let buildTable = context => {
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
    return <div className="tictac-container">{buildTable(ctx.ctx)}</div>;
  }
  return <div className="tictac-container">Enter Options</div>;
};

export default TicTacToe;
