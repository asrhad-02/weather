import React from "react";
import { IoIosSearch } from "react-icons/io";

function Search({ location, setLocation, searchLocation }) {
  return (
    <div className="search-container">
      <div className="search">
        <input
          className="search-input"
          type="text"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          placeholder="Search for a city"
          onKeyPress={searchLocation}
        />
        <IoIosSearch className="search-icon" onClick={searchLocation} />
      </div>
    </div>
  );
}

export default Search;
