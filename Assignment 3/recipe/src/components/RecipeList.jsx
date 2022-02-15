import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import Recipe from './Recipe';
import RecipeForm from './RecipeForm';

function RecipeList() {
    const [recipes, setRecipes] = useState([
        {
            id: 1,
            Date: "1/25/2022",
            text: 'Maggi',
            body: `Add 2 cups of water to maggi and start boiling it. Add maggi masala when it gets warm. 
            Wait for two minutes and you are done. Serve maggi hot in hostel style!`
          },
          {
            id: 2,
            Date: '2/15/2022',
            text: 'Mango Shake',
            body: `Peel the mangoes and cut them into small cubes.
            Add the mangoes to a bowl and add sugar, milk, and water.
            Mix well using a mixer. Add ice cubes and mix well. And your mongo shake is ready. Enjoy!`
      
          }
    ]);
    
    
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
      <h2 className='dis'>Add Recipe</h2>

      {/* <h3>Add Recipe</h3>
      <Link to="/blogs">
            {" "}
            <button className="btn btn-success ">Add</button>
          </Link> */}
      <RecipeForm onSubmit={addRecipe}/>
      <br/>
      <h2 className='dis'>Recipe List</h2>
      <Recipe recipes={recipes} completeRecipe={completeRecipe} removeRecipe={removeRecipe}/>
  </div>;
}

export default RecipeList;
