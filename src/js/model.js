import { API_URL } from './config';
import { getJSON } from './helpers';

export const state = {
	recipe: {},
};

export const loadRecipe = async function (id) {
	// Error handling.
	try {
		// Fetching the data from the API.
		const data = await getJSON(`${API_URL}/${id}`);

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
	}
};
