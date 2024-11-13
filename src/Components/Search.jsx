import React from "react";
import { useDebouncedCallback } from "use-debounce";
import { useGlobalContext } from "../Context.js";
import "../Styling/Search.css";

const Search = () => {
  const { setSearchTerm } = useGlobalContext();

  const debounced = useDebouncedCallback((search) => {
    setSearchTerm(search);
  }, 1000);

  return (
    <section>
      <form className="search-form">
        <div className="form-control">
          <span className="search-icon">&#x1F50D;</span>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Search for recipe"
            defaultValue=""
            onChange={(e) => debounced(e.target.value)}
          />
          <button className="search-button" type="submit">
            Go
          </button>
        </div>
      </form>
    </section>
  );
};
export default Search;
