// Importing everything from the model, and making it accesible through the
// model namespace.
import * as model from './model.js';

// Importing the default export of the recipe view.
import recipeView from './views/recipeView.js';

// Importing the default export of the search view.
import searchView from './views/searchView.js';

// Importing the default export of the results view.
import resultsView from './views/resultsView.js';

// Importing the default export of the pagination view.
import paginationView from './views/paginationView.js';

// Importing the modules required for polyfilling.
// Polyfilling everything else.
// import 'core-js/stable';
// // Polyfilling async/await.
// import 'regenerator-runtime/runtime.js';

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
		console.error(err);
	}
};

const controlSearchResults = async function () {
	try {
		// Getting the query present on the search bar.
		const query = searchView.getQuery();
		if (!query) return;

		// Rendering a spinner on the results section.
		resultsView.renderSpinner();

		// Loading the results.
		await model.loadSearchResults(query);

		// Rendering the results.
		// resultsView.render(model.state.search.results);
		resultsView.render(model.getSearchResultsPage());

		// Render the initial pagination buttons.
		paginationView.render(model.state.search);
	} catch (err) {
		console.log(err);
	}
};

const controlPagination = function (goToPage) {
	// Going to the selected page.
	resultsView.render(model.getSearchResultsPage(goToPage));
	// Rendering the buttons.
	paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
	// Updating the recipie servings in state.
	model.updateServings(newServings);

	// Updating the recipe view.
	recipeView.render(model.state.recipe);
};

// This function is part of the publisher-subscriber pattern, and acts as the subscriber.
const init = function () {
	recipeView.addHandlerRender(controlRecipes);
	recipeView.addHandlerUpdateServings(controlServings);
	searchView.addHandlerSearch(controlSearchResults);
	paginationView.addHandlerClick(controlPagination);
};
init();
