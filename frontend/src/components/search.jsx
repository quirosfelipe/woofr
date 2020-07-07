import React, { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(events.target.value);
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
