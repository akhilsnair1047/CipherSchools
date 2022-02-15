import React, { useState } from "react";
import RecipeForm from "./RecipeForm";
import { AiOutlineCheckSquare } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import './recipe.css';

function Recipe({ recipes, completeRecipe, removeRecipe }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });
  return recipes.map((recipe, index) => (
    <div
      className={recipe.isComplete ? "recipe-row complete" : "recipe-row"}
      key={index}
    >
     
      <div className="recipe-title">
            {recipe.text}
      </div>
            <hr/>
      <div className="recipe-body">
          {recipe.body}
      </div>
      <hr/>
      
      <div className="icons">
        
        {/* <AiOutlineCheckSquare key={recipe.id} onClick={() => completeRecipe(recipe.id)} className="complete-item" /> */}
        {recipe.Date}
        <div
          onClick={() => removeRecipe(recipe.id)}
          className="delete-item"
        >Delete Recipe </div>
      </div>
    </div>
  ));
}

export default Recipe;
