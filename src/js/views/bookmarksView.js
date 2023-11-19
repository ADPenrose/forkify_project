// Importing the icons.
// These two are the same, but the second one is the one shown in the docs.
// import icons from 'url:../img/icons.svg';
const icons = new URL('../../img/icons.svg', import.meta.url);

// Importing parent class.
import View from './View';

// Importing the preview class.
import previewView from './previewView';

class BookmarksView extends View {
	_parentElement = document.querySelector('.bookmarks__list');
	_errorMessage = 'No bookmarks yet. Find a nive recipe and bookmark it c:';
	// Defining a default success message.
	_message = '';

	_generateMarkup() {
		return this._data
			.map((bookmark) => previewView.render(bookmark, false))
			.join('');
	}
}

export default new BookmarksView();
