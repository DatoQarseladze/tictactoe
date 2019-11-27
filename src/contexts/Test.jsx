import React, { Component } from "react";

// first we will make a new context
export const MyContext = React.createContext();

// Then create a provider Component
class MyProvider extends Component {
  state = {
    age: 100,
    details: {},
    turn: 'O'
  };
  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          growAYearOlder: res =>
            this.setState({
              age: this.state.age + 1,
              details: res
            }),
          ChangeTurn: res => {
            console.log(this.state);
          // this.setState({
          //   turn : 'X'
          // })
          return this.state.turn;
        }}}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;
