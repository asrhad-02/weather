import React, { useState } from "react";
import { LuSun } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { BsThermometerHalf } from "react-icons/bs";
import { WiBarometer } from "react-icons/wi";
import { WiHumidity } from "react-icons/wi";
import { BsCloudHaze2 } from "react-icons/bs";
import { MdOutlineWbCloudy } from "react-icons/md";
import { IoRainyOutline } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";
import { WiDayCloudyWindy } from "react-icons/wi";
import WeatherDetail from "./WeatherDetail";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { IoMdArrowDropupCircle } from "react-icons/io";

function WeatherInfo({ data, kelvinToCelsius, metersToKilometers, mpsToKmph }) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails((showDetails) => !showDetails);
  };

  const getWeatherIcon = (description) => {
    if (!description) {
      return <LuSun />;
    } else if (description.includes("cloud")) {
      return <MdOutlineWbCloudy />;
    } else if (description.includes("rain")) {
      return <IoRainyOutline />;
    } else if (description.includes("wind")) {
      return <WiDayCloudyWindy />;
    } else if (description.includes("haze")) {
      return <BsCloudHaze2 />;
    } else {
      return <IoSunnyOutline />;
    }
  };

  const weatherDescription =
  data.weather &&
  data.weather[0] &&
  data.weather[0].description.toLowerCase();

  return (
    <div className="weather-container">
      <div className="weather-top">
        <div className="weather-icon">{getWeatherIcon(weatherDescription)}</div>
        <div className="weather-details">
          <div className="weather-location">
            <div className="location-icon">
              <FaLocationDot />
            </div>
            <div className="location-name">
              {data.name && (
                <div>
                  {data.name}, {data.sys.country}
                </div>
              )}
            </div>
          </div>
          <div className="weather-temp">
            {data.main && <div>{kelvinToCelsius(data.main.temp)}°C</div>}
          </div>
        </div>
      </div>
      <div className="weather-bottom">
        <div className="weather-desc">
          {data.weather && data.weather[0] && (
            <div>{data.weather[0].description.toUpperCase()}</div>
          )}
        </div>

        <div className="weather-box1">
          <div className="lbox">
            {data.main && (
              <div>
                <BsThermometerHalf /> Feels Like:
                {kelvinToCelsius(data.main.feels_like)} °C
              </div>
            )}
          </div>
          <div className="rbox">
            {data.main && (
              <div className="inline-flex">
                <WiHumidity className="icon-large" /> Humidity:{" "}
                {data.main.humidity}%
              </div>
            )}
          </div>
        </div>

        <div className="weather-box2">
          <div className="lbox">
            <FaEye /> Visibility:{" "}
            <span>
              {data.visibility && metersToKilometers(data.visibility)} km
            </span>
          </div>
          <div className="rbox">
            {data.main && (
              <div className="inline-flex">
                <WiBarometer className="icon-large" /> Pressure:{" "}
                {data.main.pressure} mbar
              </div>
            )}
          </div>
        </div>

        <WeatherDetail
          data={data}
          kelvinToCelsius={kelvinToCelsius}
          metersToKilometers={metersToKilometers}
          mpsToKmph={mpsToKmph}
          showDetails={showDetails}
        />

        <div className="more" onClick={toggleDetails}>
          {showDetails ? (
            <IoMdArrowDropupCircle />
          ) : (
            <IoMdArrowDropdownCircle />
          )}
        </div>
      </div>
    </div>
  );
}

export default WeatherInfo;
