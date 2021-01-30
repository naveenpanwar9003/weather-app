import React from "react";
import CardHeader from "../CardHeader/CardHeader";
import "./wind-container.css";

const WindContainer = (props) => {
  return (
    <div className='card wind-card'>
      <CardHeader title='Wind' />
      <div className='card-content'>
        <ul className='other-details-list'>
          <li>
            Speed: <span>{props.wind.speed}</span>
          </li>
          <li>
            Deg: <span>{props.wind.deg}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WindContainer;
