import { render } from 'react-dom';
import React, { Component } from 'react';

class TotalRecipeDisplay extends Component { 
  constructor(props) { 
    super(props);
  }

  render() { 
    return ( 
      <div className="innerbox" id="totals">
        <label htmlFor="totalRecipeBooks">Total Recipe Books:</label>
        <span id="totalRecipeBooks">{this.props.totalRecipeBooks}</span>
        <p>
        <label htmlFor="totalRecipes">Total Recipes:</label>
        <span id="totalRecipes">{this.props.totalRecipes}</span>
        </p>
      </div>
    )
  }
}

export default TotalRecipeDisplay; 