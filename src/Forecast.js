import React from "react";
import "./Forecast.css";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function Forecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  console.log(props);

  let lat = props.coordinates.lat;
  let lon = props.coordinates.lon;
  let apiKey = "afec290b2afca450b97152096f8e3b9e";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          <div className="ForecastDay">Mon</div>
          <div className="WeatherIcon">
            <WeatherIcon code="01d" size={40} />
          </div>
          <div className="ForecastTemperatures">
            <span className="ForecastTempMin">6°</span>{" "}
            <span className="ForecastTempMax">15°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
