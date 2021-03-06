import * as types from '../constants/actionTypes';

const initialState = { 
  totalRecipeBooks: 0,
  totalRecipes: 0, 
  recipeList: [],
  newRecipe: ''
};

const recipeReducer = (state=initialState, action) => {
  let newRecipe, recipeList, totalRecipes, totalRecipeBooks; 
  switch(action.type) { 
    case types.ADD_RECIPEBOOK: 
      //Increment totalRecipeBooks counter. 
      totalRecipeBooks = state.totalRecipeBooks + 1;  
      //newRecipe = state.newRecipe; 
      //Create the new Recipe object from provided data. 
      const recipeBook = { 
        recipeId: newRecipe,
        recipes: 0
      }
      //Push the new recipeBook into a copy of recipe list. 
      //recipeList = state.recipeList.concat(recipeBook);
      //Return updated state. 
      return {
        ...state, 
        totalRecipeBooks
      };
    case types.ADD_RECIPE:   
      totalRecipes = state.totalRecipes + 1;
      return { 
        ...state, 
        totalRecipes
      }
    default: 
      return state;   
  }
}

export default recipeReducer;