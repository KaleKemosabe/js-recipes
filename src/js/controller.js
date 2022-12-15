import * as model from './model.js';
import recipeView from './views/recipeView';
import searchView from './views/searchView';
import resultsView from './views/resultsView';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';

// coming from parcel
if(module.hot) {
  module.hot.accept();
}

const controlRecipes = async function () {
  try {
    // use slice to remove # from the beginning of the id so that it can be added into url
    const id = window.location.hash.slice(1);
    console.log(id);

    // returns page without id --> one liner, no need for useless nesting
    if (!id) return;
    recipeView.renderSpinner();

    // loading recipe
    // async function --> will return promise --> await
    // not returning anything, gives us access to state.loadRecipe
    await model.loadRecipe(id);

    // rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};

const controlSearchResults = async function() {
  try {
    resultsView.renderSpinner();

    const query = searchView.getQuery();
    if (!query) return;

    await model.loadSearchResults(query);
    resultsView.render(model.state.search.results);
  } catch(err) {
    console.log(err);
  }
};

const init = function() {
  recipeView.addHandlerRender(controlRecipes);
  // call handler and pass in controller function
  searchView.addHandlerSearch(controlSearchResults);
};
init();