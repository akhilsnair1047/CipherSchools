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
            body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic autem praesentium possimus. Nihil soluta perferendis quisquam ducimus atque cum, repellat tenetur aspernatur voluptatum rem a, aperiam doloremque porro! Corrupti recusandae maiores harum totam officia quo velit error in aut, quae adipisci consequatur est dolorem, assumenda nostrum consequuntur. Hic veritatis, exercitationem reprehenderit et aut obcaecati ipsum atque architecto? Ipsum sit repudiandae nulla consectetur, quae excepturi quisquam dolores adipisci sequi tenetur sed neque fuga natus dignissimos alias doloremque nesciunt rerum nobis. Aut qui ratione omnis facilis perspiciatis ducimus suscipit magni, sequi molestias ab unde. Mollitia, architecto? Saepe voluptatem quos neque in odio aspernatur ipsa obcaecati odit culpa alias cum possimus eligendi, iste fugit corporis id deleniti ex cumque veritatis. Exercitationem pariatur praesentium deleniti cupiditate at rerum repudiandae aliquam necessitatibus, iste temporibus. Distinctio nisi optio neque ea, fugit minima ab maxime pariatur rem accusantium deleniti ad nostrum nihil repellat voluptas deserunt! Sed, eum!
            `
          
          },
          {
            id: 2,
            Date: '2/15/2022',
            text: 'Pizza',
            body: ` Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, architecto ipsam autem vero voluptatem delectus nobis, itaque assumenda, molestias quod tempora fugit adipisci voluptas ea consequatur facere sint! Distinctio soluta eius eaque illum ad omnis, eligendi enim ut tempora quidem rem nostrum est facere magnam eveniet numquam quia quisquam. At, aliquid ipsam! Obcaecati, nulla assumenda! Amet quasi molestias fuga animi nulla inventore corporis dignissimos repellat facere dolores culpa voluptates, doloremque vero possimus voluptatibus velit veritatis vitae sapiente adipisci ipsum voluptas non ipsa. At doloremque perferendis quidem repudiandae mollitia? Ut aspernatur debitis veniam libero dicta suscipit. Mollitia illum ad aspernatur ab.`
      
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
