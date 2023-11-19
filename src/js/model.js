import { API_URL, RES_PER_PAGE } from './config';
import { getJSON } from './helpers';

export const state = {
	recipe: {},
	search: {
		query: '',
		results: [],
		page: 1,
		resultsPerPage: RES_PER_PAGE,
	},
};

export const loadRecipe = async function (id) {
	// Error handling.
	try {
		// Fetching the data from the API.
		const data = await getJSON(`${API_URL}${id}`);

		// Since the API returns data with underscore-named variables, we can create
		// a new object and integrate the JS naming conventions there.
		const { recipe } = data.data;
		state.recipe = {
			id: recipe.id,
			title: recipe.title,
			publisher: recipe.publisher,
			sourceUrl: recipe.source_url,
			image: recipe.image_url,
			servings: recipe.servings,
			cookingTime: recipe.cooking_time,
			ingredients: recipe.ingredients,
		};
		// console.log(state.recipe);
	} catch (error) {
		console.error(`${error} 😖`);
		// Throwing the error again so that it can be propagated to the controller.
		throw error;
	}
};

export const loadSearchResults = async function (query) {
	try {
		// Storing the query in the state.
		state.search.query = query;

		// Making a request to the API to get the basic info of all recipes
		// that match the query.
		const data = await getJSON(`${API_URL}?search=${query}`);
		// console.log(data);

		// Storing the search results on the state object.
		state.search.results = data.data.recipes.map((rec) => {
			return {
				id: rec.id,
				title: rec.title,
				publisher: rec.publisher,
				image: rec.image_url,
			};
		});
	} catch (error) {
		console.error(`${error} 😖`);
		// Throwing the error again so that it can be propagated to the controller.
		throw error;
	}
};

// This function is a helper for the pagination feature. The 1 is hardcoded
// so that, with every new search, no matter in which page the user was previously,
// the results displayed always start from the first page.
export const getSearchResultsPage = function (page = 1) {
	// Saving the current page into the state.
	state.search.page = page;
	// Dynamically calculating the start and end points.
	const start = (page - 1) * state.search.resultsPerPage;
	const end = page * state.search.resultsPerPage;
	// Returning the desired results.
	return state.search.results.slice(start, end);
};

// This function changes the amount of servings on the state.
export const updateServings = function (newServings) {
	state.recipe.ingredients.forEach((ing) => {
		ing.quantity = (ing.quantity * newServings) / state.recipe.servings;
	});

	state.recipe.servings = newServings;
};
