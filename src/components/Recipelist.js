import React,{ useEffect, useState } from "react";
import RecipeCard from "./Recipecard";
import RecipeDetails from "./RecipeDetails";

function Recipelist (){

const[recipes,setRecipe] = useState([])
const [selectedRecipe, setSelectedRecipe] = useState(null);

    useEffect(() => {
    fetch("http://localhost:3000/recipes")
    .then(response => response.json())
    .then(recipe => setRecipe(recipe))
    .catch(error => console.error('Error fetching data:' ,error))
  },[]
)
if (recipes.length === 0) {
  return <p>Loading recipes...</p>
}
//Function to handle the view more details button 
const handleViewDetails = (recipe) => {
  setSelectedRecipe(recipe);
}; 
//Function to delete recipe 
const deleteRecipe = (id) => {
  fetch(`http://localhost:3000/recipes/${id}`, {
    method: "DELETE",
  })
  .then(() => {
    setRecipe((prevRecipes) => prevRecipes.filter(recipe => recipe.id !== id));
    alert("Recipe deleted successfully!"); 
    })
  .catch(error => console.error('Error deleting recipe:', error));
};  

if (selectedRecipe) {
  return (
      <RecipeDetails recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} onDelete={deleteRecipe} setRecipes={setRecipe}/>
  );
}

 return(
    <div className="list">
      <h2>Available Recipes</h2>
      <div className="recipe-list">
        {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} onViewDetails={handleViewDetails}  />
            ))}
            </div>
    </div>
 )
}
export default Recipelist;