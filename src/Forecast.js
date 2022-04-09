import React, { useState, useEffect } from "react";
import "./Forecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  //by default the variable will be not loaded (default state) --> false
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);
  //useEffect - if the props.coord change, call the setLoaded function ( false)
  // because the state of the setLoaded function has been changed,
  // it is going to re-run the whole thing below

  if (loaded) {
    // loaded is here a variable
    return (
      //after the "row" div we will insert a loop, looping through the forecast array one at a time
      <div className="Forecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 6) {
              return (
                <div className="col d-flex justify-content-center" key={index}>
                  <ForecastDay data={dailyForecast} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "8d124e16fe27fa329c4623b6a16ee83a";
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
    // a component always has to return something, even nothing - null
  }
}
