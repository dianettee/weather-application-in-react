import React from "react";
import CurrentDate from "./CurrentDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul className="weatherInformation">
        <span className="lastUpdate">Last update:</span>
        <li>
          <CurrentDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img src={props.data.iconUrl} alt={props.data.description} />
          <span className="currentTemp">
            {" "}
            {Math.round(props.data.temperature)}{" "}
            <span className="currentTempUnit">°C</span>
          </span>
        </div>
        <div className="col-6">
          <ul className="weatherConditions">
            <li>Humidity : {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
