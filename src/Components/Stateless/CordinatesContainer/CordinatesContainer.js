import React from "react";

import CardHeader from "../CardHeader/CardHeader";

import "./cordinates-container.css";

const CordinatesContainer = () => {
  return (
    <div className='card cordinates-card'>
      <CardHeader title='Cordinates' />
      <div className='card-content'>
        <ul className='other-details-list'>
          <li>
            Longitude: <span>-0.1257</span>
          </li>
          <li>
            Latitude: <span>51.5085</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CordinatesContainer;
