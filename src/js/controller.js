// Importing everything from the model, and making it accesible through the
// model namespace.
import * as model from './model.js';

// Importing the default export of the recipe view.
import recipeView from './views/recipeView.js';

// Importing the default export of the search view.
import searchView from './views/searchView.js';

// Importing the default export of the results view.
import resultsView from './views/resultsView.js';

// Importing the modules required for polyfilling.
// Polyfilling everything else.
import 'core-js/stable';
// Polyfilling async/await.
import 'regenerator-runtime/runtime.js';

// Adding hot reloading for development
// if (module.hot) {
// 	module.hot.accept();
// }

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
		// Showing the error message on screen.
		recipeView.renderError();
	}
};

const controlSearchResults = async function () {
	try {
		// Rendering a spinner on the results section.
		resultsView.renderSpinner();

		// Getting the query present on the search bar.
		const query = searchView.getQuery();
		// if (!query) return;

		// Rendering the results.
		await model.loadSearchResults(query);
		resultsView.render(model.state.search.results);
	} catch (err) {
		console.log(err);
	}
};

// This function is part of the publisher-subscriber pattern, and acts as the subscriber.
const init = function () {
	recipeView.addHandlerRender(controlRecipes);
	searchView.addHandlerSearch(controlSearchResults);
};
init();
