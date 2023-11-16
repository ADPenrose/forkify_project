export const state = {
	recipe: {},
};

export const loadRecipe = async function (id) {
	// Error handling.
	try {
		// Fetching the data from the API.
		const response = await fetch(
			`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
		);
		const data = await response.json();

		// If the response is not ok, we need to throw an error so that the
		// catch statement is activated.
		if (!response.ok) throw new Error(`${data.message} ${response.status}`);

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
		console.log(state.recipe);
	} catch (error) {
		alert(error);
	}
};
