import React from "react";

function Search({ onFilter }) {

  function handleFilter(e) {
    onFilter(e.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={handleFilter} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
