import React from "react";
import inputStyle from "./Input.module.css";
import Form  from './Form/Form';

const Input = () => {
  return (
    <>
      <div className={inputStyle.inputWrapper}>
      <Form />
      </div>
    </>
  );
};

export default Input;