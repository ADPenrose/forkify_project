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
	bookmarks: [],
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

		// If there's in the actual state a bookmarked recipe, we need to set that property to
		// true on the data obtained from the API.
		if (state.bookmarks.some((bookmark) => bookmark.id === id))
			state.recipe.bookmarked = true;
		else state.recipe.bookmarked = false;
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

		// Whenever we load new results, the page state is reset to 1.
		state.search.page = 1;
	} catch (error) {
		console.error(`${error} 😖`);
		// Throwing the error again so that it can be propagated to the controller.
		throw error;
	}
};

// This function is a helper for the pagination feature. The 1 is hardcoded
// so that, with every new search, no matter in which page the user was previously,
// the results displayed always start from the first page.
export const getSearchResultsPage = function (page = state.search.page) {
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

// Function that recieves a recipe, and then sets it as a bookmark.
export const addBookmark = function (recipe) {
	// Adding a recipe to the state bookmarks array.
	state.bookmarks.push(recipe);

	// Marking current recipe bookmarked.
	if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;
};

// Function that recieves a bookmarked recipe, and then removes it from the bookmarks.
export const deleteBookmark = function (id) {
	// Getting the index of the element that has the target ID.
	const index = state.bookmarks.findIndex((el) => el.id === id);
	// Deleting said element form the bookmarks array.
	state.bookmarks.splice(index, 1);
	// Marking current recipe as not bookmarked.
	if (id === state.recipe.id) state.recipe.bookmarked = false;
};
