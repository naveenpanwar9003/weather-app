import React, { useState } from "react";
import "./main-container.css";
import Form from "../../Statefull/Form/Form";
import WeatherContainer from "../WeatherContainer/WeatherContainer";
import CordinatesContainer from "../CordinatesContainer/CordinatesContainer";
import WindContainer from "../WindContainer/WindContainer";
import Error from "../Error/Error";

const MainContainer = () => {
  const [result, setResult] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [error, seterror] = useState(null);
  const [imgPath, setImgPath] = useState(null);
  const [getResultPending, setgetResultPending] = useState(false);

  const handleChange = (e) => {
    let value = e.target.value || "";
    setInputValue(value);
  };

  const getResult = async () => {
    let imgPath = null;
    setgetResultPending(true);
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&APPID=ff9ee543810318a7b86c44f55044b656&units=metric`;

    let response = await fetch(api);
    if (!response.ok) {
      seterror(response.statusText);
    } else {
      let data = await response.json();
      setResult(data);
      let imageCode = data.weather[0].icon;
      imgPath = `https://openweathermap.org/img/wn/${imageCode}@2x.png`;
      setImgPath(imgPath);

      seterror(null);
      setInputValue("");
    }
    setgetResultPending(false);
  };

  if (result) {
    return (
      <div className='main-container'>
        {error ? <Error error={error} /> : false}
        <Form
          handleChange={handleChange}
          inputValue={inputValue}
          onSubmit={getResult}
          getResultPending={getResultPending}
        />
        <WeatherContainer resultData={result} imgPath={imgPath} />
        <div>
          <CordinatesContainer cordinates={result.coord} />
          <WindContainer wind={result.wind} />
        </div>
      </div>
    );
  } else {
    return (
      <div className='main-container'>
        {error ? <Error error={error} /> : false}
        <Form
          handleChange={handleChange}
          inputValue={inputValue}
          onSubmit={getResult}
        />
      </div>
    );
  }
};

export default MainContainer;
