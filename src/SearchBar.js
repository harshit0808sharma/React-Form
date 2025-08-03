import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-container">
      <h1 className="title">Website</h1>
      <div className="search-bar">
        <span className="icon">🔍</span>
        <input type="text" placeholder="Search..." className="input" />
        <button className="button">Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
