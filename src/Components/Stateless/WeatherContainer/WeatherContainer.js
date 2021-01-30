import React from "react";

import CardHeader from "../CardHeader/CardHeader";
import "./weather-container.css";

const WeatherContainer = ({ resultData, imgPath }) => {
  return (
    <div className='card'>
      <CardHeader title='Weather' />
      <div className='card-content'>
        <div className='weather-row'>
          <div className='weather-img'>
            <img src={imgPath} alt='weather' />
          </div>
          <div className='card-details'>
            <div className='weather-top'>
              <span className='temp'>{resultData.main.temp}</span>
              <span className='metric'>C</span>
            </div>
            <div className='weather-bottom'>
              <p className='location'>{`${resultData.name}, ${resultData.sys.country}`}</p>
            </div>
          </div>
        </div>
        <ul className='other-details-list'>
          <li>
            Pressure : <span>{`${resultData.main.pressure}`}</span>
          </li>
          <li>
            Humidity : <span>{`${resultData.main.humidity}`}</span>
          </li>
          <li>
            Visibility : <span>{`${resultData.visibility}`}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WeatherContainer;
