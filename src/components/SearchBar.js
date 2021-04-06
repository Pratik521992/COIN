import React from "react";

function SearchBar() {
  return (
    <div className="Search">
      <p className="SearchLabel">Enter Etherwallet Address</p>
      <div className="SearchContainer">
        <input
          className="SearchInput"
          type="text"
          placeholder="Search Address"
        />
        <button className="SearchBtn">
          <i className="fas fa-search"></i>
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
