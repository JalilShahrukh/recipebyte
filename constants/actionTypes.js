//Add actions types here.
const ADD_RECIPE = 'ADD_RECIPE';
const ADD_RECIPEBOOK = 'ADD_RECIPEBOOK'; 

const addRecipeBook = name => ({ type: ADD_RECIPEBOOK, name});
const addRecipe = name => ({ type: ADD_RECIPE, name});

module.exports = { 
  ADD_RECIPEBOOK,
  ADD_RECIPE,
  addRecipeBook,
  addRecipe
}