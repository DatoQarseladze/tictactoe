import React, { Component } from "react";

// first we will make a new context
export const MyContext = React.createContext();

// Then create a provider Component
class MyProvider extends Component {
  state = {
    active: false,
    details: {},
    turn: "O",
    Xturns: [],
    Oturns: [],
    totalTurns: 0,
    currentTurn: 0,
    winner: "",
    playSound: false
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,

          startGame: stats =>
            this.setState(prev => {
              return {
                active: !this.state.active,
                details: stats,
                playSound: true
              };
            }),

          endGame: bool => {
            this.setState(prev => {
              return {
                active: bool,
                playSound: bool
              };
            });
          },

          getTurn: () => {
            return this.state.turn;
          },

          changeTurn: res => {
            this.setState({
              turn: res
            });
          },

          setTotalTurns: turnsNumber => {
            this.setState({
              totalTurns: turnsNumber
            });
          },

          getTotalTurns: () => {
            return this.state.totalTurns;
          },

          currentTurn: () => {
            this.setState({
              currentTurn: this.state.currentTurn + 1
            });
          },

          getCurrentTurn: () => {
            return this.state.currentTurn;
          },

          setCoords: (player, number) => {
            switch (player) {
              case "X":
                this.setState(() => ({
                  Xturns: [...this.state.Xturns, number]
                }));
                break;
              case "O":
                this.setState(() => ({
                  Oturns: [...this.state.Oturns, number]
                }));
                break;
              default:
                break;
            }
          },

          clearCoords: (arr, turn) => {
            this.setState(() => ({
              Oturns: arr,
              Xturns: arr,
              currentTurn: turn
            }));
          },

          getCoords: () => {
            return this.state;
          },

          setWinner: player => {
            this.setState(() => ({
              winner: player
            }));
          },
          getWinner: () => {
            return this.state.winner;
          },
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;
