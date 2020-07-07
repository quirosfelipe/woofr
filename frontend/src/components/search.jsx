import React, { useState } from "react";
import './search.css'

const Search = () => {
  const [search, setSearch] = useState("");

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };
  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-bar__input"
        placeholder="Search photos"
        onChange={handleSearchChange}
      />
    </div>
  );
};
export default Search;
