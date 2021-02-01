import React, { useState } from "react";
import CardHeader from "../CardHeader/CardHeader";
import ImgLoader from "../ImgLoader/ImgLoader";

import "./weather-container.css";

const WeatherContainer = ({ resultData, imgPath }) => {
  const [isImageloaded, setisImageloaded] = useState(false);

  return (
    <div className='card'>
      <CardHeader title='Weather' />
      <div className='card-content'>
        <div className='weather-row'>
          <div className='weather-img'>
            {!resultData ? setisImageloaded(false) : false}
            <img
              src={imgPath}
              alt='weather'
              style={{ display: isImageloaded ? "block" : "none" }}
              onLoad={() => setisImageloaded(true)}
            />
            {isImageloaded ? false : <ImgLoader />}
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
