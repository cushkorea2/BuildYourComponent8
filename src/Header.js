// Header.js

import React from "react";

const Header = (props) => {
  const handleSearchChange = (event) => {
    props.onSearch(event.target.value);
  };

  return (
    <div className="app-header">
      <h1 className="app-header__title">Sticky Notes App</h1>
      <div className="app-header__controls">
        <input
          type="text"
          className="search"
          placeholder="Search notes"
          onChange={handleSearchChange}
        />
        <button className="add-new">Add New</button>
      </div>
    </div>
  );
};

export default Header;
