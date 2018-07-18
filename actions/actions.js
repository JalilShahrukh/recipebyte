// Import actionTypes from constants. 
import * as types from '../constants/actionTypes'; 

const addRecipeBook = (name) => { 
  type: types.ADD_RECIPEBOOK;
  payload: name;
};

const addRecipe = (name) => { 
  type: types.ADD_RECIPE;
  payload: name; 
}

module.exports = {
  addRecipeBook,
  addRecipe,
};