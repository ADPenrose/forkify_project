// Importing the icons.
// These two are the same, but the second one is the one shown in the docs.
// import icons from 'url:../img/icons.svg';
const icons = new URL('../../img/icons.svg', import.meta.url);

// Importing parent class.
import View from './View';

class PaginationView extends View {
	_parentElement = document.querySelector('.pagination');

	_generateMarkup() {
		// Page 1, and there are other pages.
		const numPages = Math.ceil(
			this._data.results.length / this._data.resultsPerPage
		);
		console.log(numPages);
		// Page 1, and there are no other pages.
		// Last page.
		// Other page.
	}
}
export default new PaginationView();
