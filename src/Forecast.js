import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast text-center mt-4">
      <div className="row">
        <div className="col-2">
          <div className="forecastDay">Mon</div>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt=""
            width="60px"
          ></img>
          <div className="forecastTemp">
            <span className="forecastTempMin">6°</span>{" "}
            <span className="forecastTempMax">15°</span>
          </div>
        </div>
        <div className="col-2">
          <div className="forecastDay">Mon</div>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt=""
            width="60px"
          ></img>
          <div className="forecastTemp">
            <span className="forecastTempMin">6°</span> {""}
            <span className="forecastTempMax">15°</span>
          </div>
        </div>
        <div className="col-2">
          <div className="forecastDay">Mon</div>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt=""
            width="60px"
          ></img>
          <div className="forecastTemp">
            <span className="forecastTempMin">6°</span>{" "}
            <span className="forecastTempMax">15°</span>
          </div>
        </div>
        <div className="col-2">
          <div className="forecastDay">Mon</div>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt=""
            width="60px"
          ></img>
          <div className="forecastTemp">
            <span className="forecastTempMin">6°</span>{" "}
            <span className="forecastTempMax">15°</span>
          </div>
        </div>
        <div className="col-2">
          <div className="forecastDay">Mon</div>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt=""
            width="60px"
          ></img>
          <div className="forecastTemp">
            <span className="forecastTempMin">6°</span>{" "}
            <span className="forecastTempMax">15°</span>
          </div>
        </div>
        <div className="col-2">
          <div className="forecastDay">Mon</div>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt=""
            width="60px"
          ></img>
          <div className="forecastTemp">
            <span className="forecastTempMin">6°</span>{" "}
            <span className="forecastTempMax">15°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
