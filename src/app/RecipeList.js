import { recipes } from './recipes.js';

export default function RecipeList() {
  const recetas = recipes.map(recipe => 
    <div key = {recipe.id}>
      <h2>{recipe.name}</h2>
      <ul>
        {
          recipe.ingredients.map(element => {
            return (
              <li key = {element}>{element}</li>
            )
          })
        }
      </ul>
    </div>
  )
  return (
    <div>
      <h1>Recetas</h1>
      {recetas}
    </div>
  );
}
