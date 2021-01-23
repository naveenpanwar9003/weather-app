import React from "react";
import CardHeader from "../CardHeader/CardHeader";
import "./wind-container.css";

const WindContainer = () => {
  return (
    <div className='card wind-card'>
      <CardHeader title='Wind' />
      <div className='card-content'>
        <ul className='other-details-list'>
          <li>
            Speed: <span>3.09</span>
          </li>
          <li>
            Deg: <span>90</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WindContainer;
