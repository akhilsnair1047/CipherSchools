import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import Recipe from './Recipe';
import RecipeForm from './RecipeForm';

function RecipeList() {
    const [recipes, setRecipes] = useState([]);
    
    
    const addRecipe = recipe => {
        if(!recipe.text || /^\s*$/.test(recipe.text)) {
            return
        }

        const newRecipes = [recipe, ...recipes];
        setRecipes(newRecipes);
        console.log(recipe, ...recipes);
    };

    const removeRecipe = id => {
        const removeArr = [...recipes].filter(recipe =>recipe.id !== id);
        setRecipes(removeArr);
    };

    const completeRecipe = id => {
        let updatedRecipe = recipes.map(recipe =>{
            if(recipe.id === id){
                recipe.isComplete = !recipe.isComplete;
            }
            return recipe;
        });
        setRecipes(updatedRecipe);
    }

  return <div>
      {/* <h1 className='main'>Recipe List</h1> */}

      {/* <h3>Add Recipe</h3>
      <Link to="/blogs">
            {" "}
            <button className="btn btn-success ">Add</button>
          </Link> */}
      <RecipeForm onSubmit={addRecipe}/>
      <Recipe recipes={recipes} completeRecipe={completeRecipe} removeRecipe={removeRecipe}/>
  </div>;
}

export default RecipeList;
