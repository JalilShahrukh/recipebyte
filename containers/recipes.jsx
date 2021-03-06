import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import React, { Component } from 'react'; 
import RecipeCreator from './../client/components/RecipeCreator.jsx';
import TotalRecipeDisplay from './../client/components/TotalRecipeDisplay.jsx'; 

const mapStateToProps = state => { 
  return { totalRecipeBooks: state.recipes.totalRecipeBooks, totalRecipes: state.recipes.totalRecipes };
}

const mapDispatchToProps = dispatch => {
  //Create functions that will dispatch action creators.
  return {
    addRecipeBook: name => dispatch({ type: 'ADD_RECIPEBOOK' }),
    addRecipe: name => dispatch({ type: 'ADD_RECIPE' }),
  }
};

class recipes extends Component {
  constructor(props) { 
    super(props);
    this.handleChange = this.handleChange.bind(this);  
  }

  handleChange() {
    let node = document.createElement('div'); 
    node.innerText = 'Recipe books';
    node.setAttribute("style", "display: inline; margin-right: 15px; color:#ff0000;");
    let button = document.createElement('button'); 
    button.innerText = 'Add Recipe';
    button.addEventListener('click', () => { 
      this.props.addRecipe();
    });
    node.appendChild(button); 
    document.getElementById('books').appendChild(node);
    this.props.addRecipeBook(); 
  }

  render() { 
    return( 
      <div id="container">
        <h1 id="header">Recipe Books</h1>
        <TotalRecipeDisplay totalRecipeBooks={this.props.totalRecipeBooks} totalRecipes={this.props.totalRecipes}/> 
        <div id="books"></div>
        <button id="addRecipeBook" onClick={this.handleChange}>Add Recipe Book</button>
        { /* Recipe book components will be dynamically created in this component. */ }
        {console.log(this.props)}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(recipes);