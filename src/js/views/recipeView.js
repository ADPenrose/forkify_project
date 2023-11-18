// Importing the icons.
// These two are the same, but the second one is the one shown in the docs.
// import icons from 'url:../img/icons.svg';
const icons = new URL('../../img/icons.svg', import.meta.url);
import { Fraction } from 'fractional';

class RecipeView {
	#parentElement = document.querySelector('.recipe');
	#data;
	// Defining a default error message.
	#errorMessage = 'We could not find that recipe. Please try another one!';
	// Defining a default success message.
	#message = '';

	// Method that renders a recipe.
	render(data) {
		this.#data = data;
		// Generating the markup.
		const markup = this.#generateMarkup();
		this.#clear();
		// Inserting the object.
		this.#parentElement.insertAdjacentHTML('afterbegin', markup);
	}

	// Method that clears the HTML from the container.
	#clear() {
		// Cleaning the present markup.
		this.#parentElement.innerHTML = '';
	}

	// Spinner used when waiting for data to be loaded.
	renderSpinner() {
		const markup = `
      <div class="spinner">
        <svg>
          <use href="${icons}#icon-loader"></use>
        </svg>
      </div>
    `;
		// Clearing and inserting the spinner as a child of the selected parent element.
		this.#clear();
		this.#parentElement.insertAdjacentHTML('afterbegin', markup);
	}

	// Function that renders an error on screen.
	renderError(message = this.#errorMessage) {
		const markup = `
      <div class="error">
        <div>
          <svg>
            <use href="${icons}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
    `;

		// Clearing and inserting the error message as a child of the selected parent element.
		this.#clear();
		this.#parentElement.insertAdjacentHTML('afterbegin', markup);
	}

	// Function that renders a success message on screen.
	renderMessage(message = this.#message) {
		const markup = `
      <div class="message">
        <div>
          <svg>
            <use href="${icons}#icon-smile"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
    `;

		// Clearing and inserting the error message as a child of the selected parent element.
		this.#clear();
		this.#parentElement.insertAdjacentHTML('afterbegin', markup);
	}

	// This function is part of the publisher-subscriber pattern, and acts as the publisher.
	addHandlerRender(handler) {
		// A better way of implementing multiple triggers for the same function, in the same object.
		['hashchange', 'load'].forEach((ev) =>
			window.addEventListener(ev, handler)
		);
	}

	// Method that generates the markup.
	#generateMarkup() {
		// Rendering the recipe.
		return `
    <figure class="recipe__fig">
      <img src="${this.#data.image}" alt="${
			this.#data.title
		}" class="recipe__img" />
      <h1 class="recipe__title">
        <span>${this.#data.title}</span>
      </h1>
    </figure>

    <div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${icons}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${
					this.#data.cookingTime
				}</span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${icons}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${
					this.#data.servings
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
      ${this.#data.ingredients.map(this.#generateMarkupIngredient).join('')}
      </ul>
    </div>

    <div class="recipe__directions">
      <h2 class="heading--2">How to cook it</h2>
      <p class="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span class="recipe__publisher">${
					this.#data.publisher
				}</span>. Please check out
        directions at their website.
      </p>
      <a
        class="btn--small recipe__btn"
        href="${this.#data.sourceUrl}"
        target="_blank"
      >
        <span>Directions</span>
        <svg class="search__icon">
          <use href="src/img/icons.svg#icon-arrow-right"></use>
        </svg>
      </a>
    </div>
  `;
	}

	// Method that generates the markup for an ingredient.
	#generateMarkupIngredient(ing) {
		return `
      <li class="recipe__ingredient">
        <svg class="recipe__icon">
          <use href="${icons}#icon-check"></use>
        </svg>
        <div class="recipe__quantity">${
					ing.quantity ? new Fraction(ing.quantity).toString() : ''
				}</div>
        <div class="recipe__description">
          <span class="recipe__unit">${ing.unit}</span>
          ${ing.description}
        </div>
      </li>
    `;
	}
}
export default new RecipeView();
