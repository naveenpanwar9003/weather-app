import React from "react";
import "./form.css";

const Form = ({ handleChange, inputValue, onSubmit, getResultPending }) => {
  return (
    <div className='card form-card'>
      <div className='form-container'>
        <label>Enter Your City Name</label>
        <div className='form-row'>
          <input
            type='text'
            placeholder='City Name'
            onChange={(e) => {
              handleChange(e);
            }}
            onKeyUp={(e) => (e.key === "Enter" ? onSubmit() : false)}
            value={inputValue}
            className='input'
          />
          <button
            type='submit'
            className='form-btn'
            onClick={onSubmit}
            disabled={getResultPending ? "disable" : ""}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
