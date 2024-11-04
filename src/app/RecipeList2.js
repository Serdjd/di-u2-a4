import { recipes } from './recipes.js';
function Recipe({recipe}) {
  return (
    <div key={recipe.id}>
    <h2>{recipe.name}</h2>
    <ul>
      {recipe.ingredients.map(ingredient =>
        <li key={ingredient}>
          {ingredient}
        </li>
      )}
    </ul>
  </div>
  )
}
export default function RecipeList2() {
  return (
    <div>
      <h1>Recetas</h1>
      {recipes.map(recipe =>
        <Recipe recipe = {recipe}/>
      )}
    </div>
  );
}
