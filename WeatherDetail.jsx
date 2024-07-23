import React from "react";
import { BiWind } from "react-icons/bi";
import { TbWindmill } from "react-icons/tb";
import { FaTemperatureArrowDown } from "react-icons/fa6";
import { FaTemperatureArrowUp } from "react-icons/fa6";

function WeatherDetail({ data, kelvinToCelsius, mpsToKmph, showDetails }) {
  return (
    <div className={`weather-detail ${showDetails ? 'show' : ''}`}>
      <div className="weather-box3">
        {data.wind && (
          <>
            <div className="lbox">
              <BiWind /> Wind Speed: {mpsToKmph(data.wind.speed)} km/h
            </div>
            <div className="rbox">
              <TbWindmill /> Wind Degree: {data.wind.deg}°
            </div>
          </>
        )}
      </div>

      <div className="weather-box4">
        {data.main && (
          <div className="lbox">
            <FaTemperatureArrowDown /> Temp Min: {kelvinToCelsius(data.main.temp_min)} °C
          </div>
        )}
        {data.main && (
          <div className="rbox">
            <FaTemperatureArrowUp /> Temp Max: {kelvinToCelsius(data.main.temp_max)} °C
          </div>
        )}
      </div>
    </div>
  );
}

export default WeatherDetail;
