import React from "react";
import "./form.css";

const Form = () => {
  return (
    <div className='card form-card'>
      <div class='form-container'>
        <label>Enter Your City Name</label>
        <div class='form-row'>
          <input type='text' placeholder='City Name' className='input' />
          <button className='form-btn'>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Form;
