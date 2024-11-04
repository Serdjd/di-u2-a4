import { recipes } from './recipes.js';

export default function RecipeList() {
  const recetas = recipes.map(recipe => 
    <>
      <h2>{recipe.name}</h2>
      <ul>
        {
          recipe.ingredients.map(element => {
            return (
              <li>{element}</li>
            )
          })
        }
      </ul>
    </>
  )
  return (
    <div>
      <h1>Recetas</h1>
      {recetas}
    </div>
  );
}
