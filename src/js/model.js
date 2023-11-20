import { API_URL, RES_PER_PAGE, KEY } from './config';
import { getJSON } from './helpers';
import { sendJSON } from './helpers';

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

const createRecipeObject = function (data) {
	// Since the API returns data with underscore-named variables, we can create
	// a new object and integrate the JS naming conventions there.
	const { recipe } = data.data;
	return {
		id: recipe.id,
		title: recipe.title,
		publisher: recipe.publisher,
		sourceUrl: recipe.source_url,
		image: recipe.image_url,
		servings: recipe.servings,
		cookingTime: recipe.cooking_time,
		ingredients: recipe.ingredients,
		...(recipe.key && { key: recipe.key }),
	};
};

export const loadRecipe = async function (id) {
	// Error handling.
	try {
		// Fetching the data from the API.
		const data = await getJSON(`${API_URL}${id}`);

		// Storing the recipe object on the state
		state.recipe = createRecipeObject(data);

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

// Internal function that helps storing the bookmarks on local storage.
const persistBookmakrks = function () {
	localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};

// Function that recieves a recipe, and then sets it as a bookmark.
export const addBookmark = function (recipe) {
	// Adding a recipe to the state bookmarks array.
	state.bookmarks.push(recipe);

	// Marking current recipe bookmarked.
	if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;

	// Persisting the bookmarks in the localstorage.
	persistBookmakrks();
};

// Function that recieves a bookmarked recipe, and then removes it from the bookmarks.
export const deleteBookmark = function (id) {
	// Getting the index of the element that has the target ID.
	const index = state.bookmarks.findIndex((el) => el.id === id);
	// Deleting said element form the bookmarks array.
	state.bookmarks.splice(index, 1);
	// Marking current recipe as not bookmarked.
	if (id === state.recipe.id) state.recipe.bookmarked = false;

	// Persisting the bookmarks in the localstorage.
	persistBookmakrks();
};

// This is only here for development reasons, so that it is easy to clear the bookmarks.
const clearBookmarks = function () {
	localStorage.clear('bookmarks');
};
// clearBookmarks();

// This will upload the users recipies.
export const uploadRecipe = async function (newRecipe) {
	try {
		// Getting the ingredients from the form entries.
		const ingredients = Object.entries(newRecipe)
			.filter((entry) => entry[0].startsWith('ingredient') && entry[1] !== '')
			.map((ing) => {
				// Getting the array of ingredients clean.
				const ingArr = ing[1].replaceAll(' ', '').split(',');

				// If there aren't three values (quantity, unit, description), throw an error.
				if (ingArr.length !== 3)
					throw new Error(
						'Wrong ingredient format! Please use the correct format.'
					);

				// Destructuring the array so that we can have the key-pair values
				const [quantity, unit, description] = ingArr;
				// Returning the obtained values as an object.

				return { quantity: quantity ? +quantity : null, unit, description };
			});
		// Creating the recipe object.
		const recipe = {
			title: newRecipe.title,
			source_url: newRecipe.sourceUrl,
			image_url: newRecipe.image,
			publisher: newRecipe.publisher,
			cooking_time: +newRecipe.cookingTime,
			servings: +newRecipe.servings,
			ingredients,
		};
		console.log(recipe);
		const data = await sendJSON(`${API_URL}?key=${KEY}`, recipe);

		// Storing the recipe into the state.
		state.recipe = createRecipeObject(data);

		// Adding the recipe as a bookmark.
		addBookmark(state.recipe);
	} catch (error) {
		throw error;
	}
};

const init = function () {
	const storage = localStorage.getItem('bookmarks');
	if (storage) state.bookmarks = JSON.parse(storage);
};
init();
