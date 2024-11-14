import React from "react";

function RecipeDetails ({recipe, onClose, onDelete}){
    return(
        <div className="recipedetail">
            {/* <img src={recipe.image}/> */}
            <h2>{recipe.recipeName}</h2>
            <p><strong>Prep Time:</strong> {recipe.prepTime}</p>
            <p><strong>Cook Time:</strong> {recipe.cookTime}</p>
            <h3>Ingredients:</h3>
            <ul>
                {recipe.ingredients.map((ingredient) => (
                    <li>{ingredient}</li>
                ))}
            </ul>
            <h3>Instructions:</h3>
            <ol>
                {recipe.instructions.map((Instruction) => (
                    <li>{Instruction}</li>
                ))}
            </ol>
            <button className="back-btn" onClick={onClose}>Back</button>
            <button className="Edit-btn">Edit Recipe</button>
            <button className="Del-btn" onClick={() => onDelete(recipe.id)}>Delete Recipe</button>
        </div>
    )
}
export default RecipeDetails;