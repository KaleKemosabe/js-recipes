import * as model from './model.js';
import recipeView from './views/recipeView';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

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
    const { recipe } = model.state

    // rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {

  }
};

// window.addEventListener('hashchange', controlRecipes);
// window.addEventListener('load', controlRecipes);
// alternative way of doing
['hashchange', 'load'].forEach(ev => window.addEventListener(ev, controlRecipes));