import React from "react";
import formStyles from "./Form.module.css";
import { MyContext } from "../../../contexts/TictacStatsContext";
import useForm from "../../../hooks/useForm";
import appStyles from '../../../App.module.css'

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
      error: "Rows value must be between 3 and 8"
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
            <p className={formStyles.formHeader}>Please choose options</p>
            <form
              onSubmit={handleOnSubmit(context.startGame)}
              className={formStyles.inputForm}
            >
              <div className={formStyles.formItem}>
                <label htmlFor="length">
                  Length:
                  <input
                    type="number"
                    name="length"
                    value={length}
                    onChange={handleOnChange}
                  />
                </label>
                {errors.length && <p className={appStyles.error}>{errors.length}</p>}
              </div>

              <div className={formStyles.formItem}>
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

              <div className={formStyles.formItem}>
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

              <button className={formStyles.button} type="submit">
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
