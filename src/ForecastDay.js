import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }

  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="ForecastDay">{day()} </div>
      <div className="WeatherIcon">
        <WeatherIcon code={props.data.weather[0].icon} size={40} />
      </div>
      <div className="ForecastTemperatures">
        <span className="ForecastTempMin">{minTemperature()}°</span>{" "}
        <span className="ForecastTempMax">{maxTemperature()}°</span>
      </div>
    </div>
  );
}
