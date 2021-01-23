import React from "react";

import CardHeader from "../CardHeader/CardHeader";
import "./weather-container.css";

const WeatherContainer = () => {
  return (
    <div className='card'>
      <CardHeader title='Weather' />
      <div className='card-content'>
        <div className='weather-row'>
          <div className='weather-img'>
            <img src='' alt='weather' />
          </div>
          <div className='card-details'>
            <div class='weather-top'>
              <span className='temp'>19.07</span>
              <span className='metric'>C</span>
            </div>
            <div className='weather-bottom'>
              <p className='location'>Delhi, IN</p>
            </div>
          </div>
        </div>
        <ul className='other-details-list'>
          <li>
            Pressure: <span>1012</span>
          </li>
          <li>
            Humidity: <span>56</span>
          </li>
          <li>
            Visibility: <span>1200</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WeatherContainer;
