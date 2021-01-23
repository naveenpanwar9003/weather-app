import React from "react";
import "./main-container.css";
import Form from "../../Statefull/Form/Form";
import WeatherContainer from "../WeatherContainer/WeatherContainer";
import CordinatesContainer from "../CordinatesContainer/CordinatesContainer";
import WindContainer from "../WindContainer/WindContainer";

const MainContainer = () => {
  return (
    <div className='main-container'>
      <Form />
      <WeatherContainer />
      <div>
        <CordinatesContainer />
        <WindContainer />
      </div>
    </div>
  );
};

export default MainContainer;
