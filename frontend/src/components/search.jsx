import React, { useState, useEffect } from "react";

const Search = () => {
  // const [search, setSearch] = useState("");
  //   useEffect(() => {
  //     props.setSearchTerm(search);
  //   }, [search]);

  //   const handleSearchChange = (event) => {
  //     setSearch(event.target.value);
  //   };
  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-bar__input"
        placeholder="Search photos"
        // onChange={handleSearchChange}
      />
    </div>
  );
};
export default Search;
