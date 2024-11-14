import { useState } from "react";

function Search({ recipeName, setRecipe }) {
  const [searchQuery, setSearchQuery] = useState(''); // Initialize searchQuery with an empty string

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent the form from reloading the page
    const query = e.target.value.toLowerCase();
    setSearchQuery(query); // Update the search query
    setRecipe(recipeName.filter(r => r.name.toLowerCase().includes(query))); // Filter recipes based on the query
  };

  return (
    <div className="d-flex justify-content-center">
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search for recipe"
              aria-label="Search"
              value={searchQuery} // Bind the input value to searchQuery
              onChange={handleSearch} // Call handleSearch when the input changes
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Search;
