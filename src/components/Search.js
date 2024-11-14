import { useState } from "react"

function Search({recipeName,setRecipe}) 
{
const[Search,setSearch]= useState([])

 const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();

    setSearch(query);
    setRecipe(recipeName.filter(recipe => recipe.name.toLowerCase().includes(query)));
  };

    return(
      
    <div className="d-flex justify-content-center">
        <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search for recipe" aria-label="Search"
       value={Search}
       onChange={handleSearch}
      ></input>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
    </div>
)
    
}
export default Search;

