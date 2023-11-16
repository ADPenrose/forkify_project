// Importing everything from the model, and making it accesible through the
// model namespace.
import * as model from './model.js';

// Importing the icons.
// These two are the same, but the second one is the one shown in the docs.
// import icons from 'url:../img/icons.svg';
const icons = new URL('../img/icons.svg', import.meta.url);
console.log(icons);

// Importing the modules required for polyfilling.
// Polyfilling everything else.
import 'core-js/stable';
// Polyfilling async/await.
import 'regenerator-runtime/runtime.js';

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
	return new Promise(function (_, reject) {
		setTimeout(function () {
			reject(new Error(`Request took too long! Timeout after ${s} second`));
		}, s * 1000);
	});
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

// Spinner used when waiting for data to be loaded.
const renderSpinner = function (parentEL) {
	const markup = `
		<div class="spinner">
			<svg>
				<use href="${icons}#icon-loader"></use>
			</svg>
		</div>
	`;
	// Clearing and inserting the spinner as a child of the selected parent element.
	parentEL.innerHTML = '';
	parentEL.insertAdjacentHTML('afterbegin', markup);
};

// Test request for getting a recipe.
const showRecipe = async function () {
	try {
		// Getting the id of the recipe from the hash on the URL.
		const id = window.location.hash.slice(1);
		// If there is no id on the URL (e.g. we have not selected any recipe), then
		// no recipe should me shown and this function must be exited.
		if (!id) return;

		// Showing the spinner.
		renderSpinner(recipeContainer);

		// Loading the recipe. Since this is an async function, it returns a promise, so we must await
		// it.
		await model.loadRecipe(id);

		// Destructuring the state object to get the selected recipe.
		const { recipe } = model.state;

		// Rendering the recipe.
		const markup = `
			<figure class="recipe__fig">
				<img src="${recipe.image}" alt="${recipe.title}" class="recipe__img" />
				<h1 class="recipe__title">
					<span>${recipe.title}</span>
				</h1>
			</figure>

			<div class="recipe__details">
				<div class="recipe__info">
					<svg class="recipe__info-icon">
						<use href="${icons}#icon-clock"></use>
					</svg>
					<span class="recipe__info-data recipe__info-data--minutes">${
						recipe.cookingTime
					}</span>
					<span class="recipe__info-text">minutes</span>
				</div>
				<div class="recipe__info">
					<svg class="recipe__info-icon">
						<use href="${icons}#icon-users"></use>
					</svg>
					<span class="recipe__info-data recipe__info-data--people">${
						recipe.servings
					}</span>
					<span class="recipe__info-text">servings</span>

					<div class="recipe__info-buttons">
						<button class="btn--tiny btn--increase-servings">
							<svg>
								<use href="${icons}#icon-minus-circle"></use>
							</svg>
						</button>
						<button class="btn--tiny btn--increase-servings">
							<svg>
								<use href="${icons}#icon-plus-circle"></use>
							</svg>
						</button>
					</div>
				</div>

				<div class="recipe__user-generated">
					<svg>
						<use href="${icons}#icon-user"></use>
					</svg>
				</div>
				<button class="btn--round">
					<svg class="">
						<use href="${icons}#icon-bookmark-fill"></use>
					</svg>
				</button>
			</div>

			<div class="recipe__ingredients">
				<h2 class="heading--2">Recipe ingredients</h2>
				<ul class="recipe__ingredient-list">
				${recipe.ingredients
					.map((ing) => {
						return `
					<li class="recipe__ingredient">
						<svg class="recipe__icon">
							<use href="${icons}#icon-check"></use>
						</svg>
						<div class="recipe__quantity">${ing.quantity ?? ''}</div>
						<div class="recipe__description">
							<span class="recipe__unit">${ing.unit}</span>
							${ing.description}
						</div>
					</li>
					`;
					})
					.join('')}
				</ul>
			</div>

			<div class="recipe__directions">
				<h2 class="heading--2">How to cook it</h2>
				<p class="recipe__directions-text">
					This recipe was carefully designed and tested by
					<span class="recipe__publisher">${recipe.publisher}</span>. Please check out
					directions at their website.
				</p>
				<a
					class="btn--small recipe__btn"
					href="${recipe.sourceUrl}"
					target="_blank"
				>
					<span>Directions</span>
					<svg class="search__icon">
						<use href="src/img/icons.svg#icon-arrow-right"></use>
					</svg>
				</a>
			</div>
		`;

		// Cleaning the present markup and inserting the object.
		recipeContainer.innerHTML = '';
		recipeContainer.insertAdjacentHTML('afterbegin', markup);
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
['hashchange', 'load'].forEach((ev) => window.addEventListener(ev, showRecipe));
