// Importing the icons.
// These two are the same, but the second one is the one shown in the docs.
// import icons from 'url:../img/icons.svg';
const icons = new URL('../../img/icons.svg', import.meta.url);

// Importing parent class.
import View from './View';

class PreviewView extends View {
	_parentElement = '';

	_generateMarkup() {
		// Determining the id of the current page.
		const id = window.location.hash.slice(1);
		return `
      <li class="preview">
        <a class="preview__link ${
					this._data.id === id ? 'preview__link--active' : ''
				}" href="#${this._data.id}">
          <figure class="preview__fig">
            <img src="${this._data.image}" alt="${this._data.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${this._data.title}</h4>
            <p class="preview__publisher">${this._data.publisher}</p>
            <div class="preview__user-generated ${
							this._data.key ? '' : 'hidden'
						}">
              <svg>
                <use href="${icons}#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
      </li>
    `;
	}
}

export default new PreviewView();
