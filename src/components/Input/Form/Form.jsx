import React, { useState } from "react";
import "./Form.css";
import { Test, numbers } from '../../../contexts/Test'


const Form = () => {
  const [state, setState] = useState({ counter: 0 });

  const addCounter = (e) => {
    e.preventDefault();
    console.log(numbers);
    // const newCounterValue = state.counter + 1;
    // setState({ counter: newCounterValue });
  };
  return (
    <>
      <p>Choose options</p>
      <form action="" className="input-form">
        <div>
          <p>Width</p>
          <input type="number" />
        </div>
        <div>
          <p>Length</p>
          <input type="number" />
        </div>
        <div>
          <p>Row Length</p>
          <input type="number" />
        </div>
        <button className="button" onClick={addCounter}>
          Choose Options
        </button>
      </form>
    </>
  );
};

export default Form;
