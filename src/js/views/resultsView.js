// Importing the icons.
// These two are the same, but the second one is the one shown in the docs.
// import icons from 'url:../img/icons.svg';
const icons = new URL('../../img/icons.svg', import.meta.url);

// Importing parent class.
import View from './View';

// Importing the preview class.
import previewView from './previewView';

class ResultsView extends View {
	_parentElement = document.querySelector('.results');
	_errorMessage = 'No recipies found for your query! Please try again.';
	// Defining a default success message.
	_message = '';

	_generateMarkup() {
		return this._data
			.map((result) => previewView.render(result, false))
			.join('');
	}
}

export default new ResultsView();
