import React from "react";
import "./Forecast.css";
import WeatherIcon from "./WeatherIcon";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          <div className="ForecastDay">Mon</div>
          <WeatherIcon code="01d" size={40} />
          <div className="ForecastTemperatures">
            <span className="ForecastTempMin">6°</span>{" "}
            <span className="ForecastTempMax">15°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
