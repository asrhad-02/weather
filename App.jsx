import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Search from "./components/search";
import WeatherInfo from "./components/WeatherInfo";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("Lucknow");
  const [query, setQuery] = useState("Lucknow");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=2dfbbc09819dd6f0b1c038ea66dadaf7`;

  const fetchWeatherData = () => {
    axios.get(url).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  };

  useEffect(() => {
    fetchWeatherData();
  }, [query]);

  const searchLocation = (event) => {
    if (event.key === "Enter" || event.type === "click") {
      setQuery(location);
    }
  };

  const kelvinToCelsius = (temp) => Math.round(temp - 273.15);
  const metersToKilometers = (meters) => (meters / 1000).toFixed(2);
  const mpsToKmph = (speed) => (speed * 3.6).toFixed(2);

  return (
    <>
      <div className="container">
        <div className="title">WHAT'SWEATHER.INFO</div>
        <Search
          location={location}
          setLocation={setLocation}
          searchLocation={searchLocation}
        />
        <WeatherInfo
          data={data}
          kelvinToCelsius={kelvinToCelsius}
          metersToKilometers={metersToKilometers}
          mpsToKmph={mpsToKmph}
        />
      </div>
    </>
  );
}

export default App;
