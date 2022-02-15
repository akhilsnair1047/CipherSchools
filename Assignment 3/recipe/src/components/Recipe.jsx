import React, { useState } from "react";
import RecipeForm from "./RecipeForm";
import { AiOutlineCheckSquare } from "react-icons/ai";
import { AiOutlineCloseSquare } from "react-icons/ai";

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
     
      <div className="title">
            {recipe.text}
      </div>
            <br/>
      <div className="body">
          {recipe.body}
      </div>

      <div className="icons">
        
        {/* <AiOutlineCheckSquare key={recipe.id} onClick={() => completeRecipe(recipe.id)} className="complete-item" /> */}

        <AiOutlineCloseSquare
          onClick={() => removeRecipe(recipe.id)}
          className="delete-item"
        />
      </div>
    </div>
  ));
}

export default Recipe;
