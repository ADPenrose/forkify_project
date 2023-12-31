// Importing parent class.
import View from './View';

// Importing the icons.
// These two are the same, but the second one is the one shown in the docs.
// import icons from 'url:../img/icons.svg';
const icons = new URL('../../img/icons.svg', import.meta.url);

// Importing the module that allows us to work with fractions.
import fracty from 'fracty';

class RecipeView extends View {
	_parentElement = document.querySelector('.recipe');
	// Defining a default error message.
	_errorMessage = 'We could not find that recipe. Please try another one!';
	// Defining a default success message.
	_message = '';

	// This function is part of the publisher-subscriber pattern, and acts as the publisher.
	addHandlerRender(handler) {
		// A better way of implementing multiple triggers for the same function, in the same object.
		['hashchange', 'load'].forEach((ev) =>
			window.addEventListener(ev, handler)
		);
	}

	// This function is part of the publisher-subscriber pattern, and acts as the publisher.
	addHandlerUpdateServings(handler) {
		// Event delegation.
		this._parentElement.addEventListener('click', function (e) {
			// Getting the button that was clicked.
			const btn = e.target.closest('.btn--update-servings');
			if (!btn) return;
			// console.log(btn);

			// Determining the servings requested.
			const { updateTo } = btn.dataset;

			// Re-rendering the recipe with the new values. This should only be
			// called if the number of servings is greater than 0. Also, the value
			// should be transformed into an integer.
			if (+updateTo > 0) handler(+updateTo);
		});
	}

	// This function is part of the publisher-subscriber pattern, and acts as the publisher.
	addHandlerAddBookmark(handler) {
		// We use event delegation because, by the time the page is loaded, the button that
		// we are interested in does not exist yet. Thus, event delegation proves useful in these
		// cases.
		this._parentElement.addEventListener('click', function (e) {
			const btn = e.target.closest('.btn--bookmark');
			if (!btn) return;
			handler();
		});
	}

	// Method that generates the markup.
	_generateMarkup() {
		// Rendering the recipe.
		return `
    <figure class="recipe__fig">
      <img src="${this._data.image}" alt="${
			this._data.title
		}" class="recipe__img" />
      <h1 class="recipe__title">
        <span>${this._data.title}</span>
      </h1>
    </figure>

    <div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${icons}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${
					this._data.cookingTime
				}</span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${icons}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${
					this._data.servings
				}</span>
        <span class="recipe__info-text">servings</span>

        <div class="recipe__info-buttons">
          <button class="btn--tiny btn--update-servings" data-update-to="${
						this._data.servings - 1
					}">
            <svg>
              <use href="${icons}#icon-minus-circle"></use>
            </svg>
          </button>
          <button class="btn--tiny btn--update-servings" data-update-to="${
						this._data.servings + 1
					}">
            <svg>
              <use href="${icons}#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>

      <div class="recipe__user-generated ${this._data.key ? '' : 'hidden'}">
        <svg>
          <use href="${icons}#icon-user"></use>
        </svg>
      </div>
      <button class="btn--round btn--bookmark">
        <svg class="">
          <use href="${icons}#icon-bookmark${
			this._data.bookmarked ? '-fill' : ''
		}"></use>
        </svg>
      </button>
    </div>

    <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      <ul class="recipe__ingredient-list">
      ${this._data.ingredients.map(this._generateMarkupIngredient).join('')}
      </ul>
    </div>

    <div class="recipe__directions">
      <h2 class="heading--2">How to cook it</h2>
      <p class="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span class="recipe__publisher">${
					this._data.publisher
				}</span>. Please check out
        directions at their website.
      </p>
      <a
        class="btn--small recipe__btn"
        href="${this._data.sourceUrl}"
        target="_blank"
      >
        <span>Directions</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </a>
    </div>
  `;
	}

	// Method that generates the markup for an ingredient.
	_generateMarkupIngredient(ing) {
		return `
      <li class="recipe__ingredient">
        <svg class="recipe__icon">
          <use href="${icons}#icon-check"></use>
        </svg>
        <div class="recipe__quantity">${
					ing.quantity ? fracty(ing.quantity).toString() : ''
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
