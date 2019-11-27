import React from "react";
import "./Form.css";
import { MyContext } from "../../../contexts/Test";
import useForm from "../../../hooks/useForm";

const stateSchema = {
  width: { value: "", error: "" },
  length: { value: "", error: "" },
  rows: { value: "", error: "" }
};

const stateValidatorSchema = {
  width: {
    required: true,
    validator: {
      func: value => /^([3-8]|10)$/.test(value),
      error: "Width value must be between 3 and 8"
    }
  },
  length: {
    required: true,
    validator: {
      func: value => /^([3-8]|10)$/.test(value),
      error: "Length value must be between 3 and 8"
    }
  },
  rows: {
    required: true,
    validator: {
      func: value => /^([3-8]|10)$/.test(value),
      error: "Rows value must be between 3 and 6"
    }
  }
};

function onSubmitForm(state, callback) {
  callback(state);
}

const Form = () => {
  const { values, errors, handleOnChange, handleOnSubmit } = useForm(
    stateSchema,
    stateValidatorSchema,
    onSubmitForm
  );

  const { width, length, rows } = values;

  // const validate = callback => event => {
  //   // event.preventDefault();
  //   callback();
  // };

  return (
    <MyContext.Consumer>
      {context => {
        return (
          <>
            <p className='form-header'>Please choose options</p>
            <form
              onSubmit={handleOnSubmit(context.growAYearOlder)}
              className="input-form"
            >
              <div className="form-item">
                <label htmlFor="length">
                  Length:
                  <input
                    type="number"
                    name="length"
                    value={length}
                    onChange={handleOnChange}
                  />
                </label>
                {errors.length && <p className="error">{errors.length}</p>}
              </div>

              <div className="form-item">
                <label htmlFor="width">
                  Width:
                  <input
                    type="number"
                    name="width"
                    value={width}
                    onChange={handleOnChange}
                  />
                </label>
                {errors.width && <p className="error">{errors.width}</p>}
              </div>

              <div className="form-item">
                <label htmlFor="rows">
                  Row:
                  <input
                    type="number"
                    name="rows"
                    value={rows}
                    onChange={handleOnChange}
                  />
                </label>
                {errors.rows && <p className="error">{errors.rows}</p>}
              </div>

              <button className="button" type="submit">
                Choose Options
              </button>
            </form>
          </>
        );
      }}
    </MyContext.Consumer>
  );
};

export default Form;
