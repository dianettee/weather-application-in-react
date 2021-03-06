import React, { useState } from "react";

export default function WeatherTemperatureUnit(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperatureUnit">
        <span className="currentTemp"> {Math.round(props.celsius)} </span>
        <span className="currentTempUnit">
          °C |{" "}
          <a href="/" onClick={convertToFahrenheit}>
            °F{" "}
          </a>{" "}
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperatureUnit">
        <span className="currentTemp"> {Math.round(fahrenheit)} </span>
        <span className="currentTempUnit">
          <a href="/" onClick={convertToCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
