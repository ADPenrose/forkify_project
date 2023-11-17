// Importing everything from the model, and making it accesible through the
// model namespace.
import * as model from './model.js';

// Importing the default export of the recipe view.
import recipeView from './views/recipeView.js';

// Importing the modules required for polyfilling.
// Polyfilling everything else.
import 'core-js/stable';
// Polyfilling async/await.
import 'regenerator-runtime/runtime.js';

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

// Test request for getting a recipe.
const controlRecipes = async function () {
	try {
		// Getting the id of the recipe from the hash on the URL.
		const id = window.location.hash.slice(1);
		// If there is no id on the URL (e.g. we have not selected any recipe), then
		// no recipe should me shown and this function must be exited.
		if (!id) return;

		// Showing the spinner.
		recipeView.renderSpinner();

		// Loading the recipe.
		await model.loadRecipe(id);

		// Rendering the recipe
		recipeView.render(model.state.recipe);
	} catch (err) {
		alert(err);
	}
};

// Whenever the hash changes, load the recipe that corresponds to said hash.
// window.addEventListener('hashchange', showRecipe);

// We also need to hear for the load event of the page, in case a URL that contains
// a hash is directly visited.
// window.addEventListener('load', showRecipe)

// A better way of implementing multiple triggers for the same function, in the same object.
['hashchange', 'load'].forEach((ev) =>
	window.addEventListener(ev, controlRecipes)
);
