import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              placeholder="Type a city..."
              className="form-control"
              autocomplete="off"
            />
          </div>
          <div className="col-4">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-50"
            />
          </div>
        </div>
      </form>

      <h1>New York</h1>
      <ul className="weatherInformation">
        <span className="lastUpdate">Last update:</span>
        <li>Friday 20:22</li>
        <li>clear sky</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="sunny" />
          <span className="currentTemp">
            {" "}
            22 <span className="currentTempUnit">°C</span>
          </span>
        </div>
        <div className="col-6">
          <ul className="weatherConditions">
            <li>Humidity : 46%</li>
            <li>Wind: 5km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
