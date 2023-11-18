// Importing the icons.
// These two are the same, but the second one is the one shown in the docs.
// import icons from 'url:../img/icons.svg';
const icons = new URL('../../img/icons.svg', import.meta.url);

// Importing parent class.
import View from './View';

class ResultsView extends View {
	_parentElement = document.querySelector('.results');
	_errorMessage = 'No recipies found for your query! Please try again.';
	// Defining a default success message.
	_message = '';

	_generateMarkup() {
		return this._data.map(this._generateMarkupPreview).join('');
	}

	_generateMarkupPreview(result) {
		return `
      <li class="preview">
        <a class="preview__link" href="#${result.id}">
          <figure class="preview__fig">
            <img src="${result.image}" alt="{result.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${result.title}</h4>
            <p class="preview__publisher">${result.publisher}</p>
          </div>
        </a>
      </li>
    `;
	}
}

export default new ResultsView();
