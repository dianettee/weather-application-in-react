import React from "react";
import CurrentDate from "./CurrentDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperatureUnit from "./WeatherTemperatureUnit";

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
          <div className="WeatherIcon">
            <WeatherIcon code={props.data.icon} />
          </div>
          <WeatherTemperatureUnit celsius={props.data.temperature} />
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
