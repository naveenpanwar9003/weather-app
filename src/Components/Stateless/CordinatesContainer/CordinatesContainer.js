import React from "react";

import CardHeader from "../CardHeader/CardHeader";

import "./cordinates-container.css";

const CordinatesContainer = (props) => {
  return (
    <div className='card cordinates-card'>
      <CardHeader title='Cordinates' />
      <div className='card-content'>
        <ul className='other-details-list'>
          <li>
            Longitude: <span>{props.cordinates.lon}</span>
          </li>
          <li>
            Latitude: <span>{props.cordinates.lat}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CordinatesContainer;
