import React, { useState } from "react";
import "../styles/SearchBar.css";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search tweets..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button>Search</button>
    </div>
  );
};

export default SearchBar;
