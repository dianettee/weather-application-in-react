import axios from "axios";
import React from "react";
import "./Weather.css";

export default function Weather() {
  function handleResponse(response) {
    console.log(response.data);
  }
  const apiKey = "b5bbf587e13af95f0c77ca011722861f";
  let city = "London";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              placeholder="Type a city..."
              className="form-control"
              autoComplete="off"
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
