import React from "react";
import App from './App.jsx';
import { render } from 'react-dom';
import { createStore } from 'redux'; 
import { Provider } from 'react-redux'; 
import rootReducer from './reducers/reducers.js'; 
import RecipeCreator from './client/components/RecipeCreator.jsx';
import { BrowserRouter as Router, Route } from "react-router-dom";

const store = createStore(rootReducer); 

render(
  <Provider store={store}> 
		<Router>
      <div>
        <Route exact path='/' component={App} />
				<Route path='/Recipe' component={RecipeCreator} />
			</div>
		</Router>
  </Provider>,
  document.getElementById('contents')
) 