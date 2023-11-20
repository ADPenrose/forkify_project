// Importing the icons.
// These two are the same, but the second one is the one shown in the docs.
// import icons from 'url:../img/icons.svg';
const icons = new URL('../../img/icons.svg', import.meta.url);

// Importing parent class.
import View from './View';

class AddRecipeView extends View {
	_parentElement = document.querySelector('.upload');
	_message = 'Recipe was successfully uploaded c:';
	_window = document.querySelector('.add-recipe-window');
	_overlay = document.querySelector('.overlay');
	_btnOpen = document.querySelector('.nav__btn--add-recipe');
	_btnClose = document.querySelector('.btn--close-modal');

	constructor() {
		super();
		this._addHandlerShowWindow();
		this._addHandlerHideWindow();
	}

	toggleWindow() {
		// Removing the hidden class on the overlay and the window.
		this._overlay.classList.toggle('hidden');
		this._window.classList.toggle('hidden');
	}

	_addHandlerShowWindow() {
		this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
	}

	_addHandlerHideWindow() {
		this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
		this._overlay.addEventListener('click', this.toggleWindow.bind(this));
	}

	addHandlerUpload(handler) {
		this._parentElement.addEventListener('submit', function (e) {
			// Preventing default behavior.
			e.preventDefault();
			// Using the Form Data API to get the data on the form.
			const dataArr = [...new FormData(this)];
			// Transforming the entries into an object.
			const data = Object.fromEntries(dataArr);
			handler(data);
		});
	}

	_generateMarkup() {}
}
export default new AddRecipeView();
