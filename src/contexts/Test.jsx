import React, { Component } from "react";

// first we will make a new context
export const MyContext = React.createContext();

// Then create a provider Component
class MyProvider extends Component {
  state = {
    age: 100,
    details: {}
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
            })
          // growAYearOlder: (res) => {
          //   console.log(res);
          //   alert('growAYearOlder')
          // }
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;
