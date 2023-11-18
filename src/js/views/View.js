// Importing the icons.
// These two are the same, but the second one is the one shown in the docs.
// import icons from 'url:../img/icons.svg';
const icons = new URL('../../img/icons.svg', import.meta.url);

export default class View {
	_data;
	// Method that renders a recipe.
	render(data) {
		// In case there is no data, or the data is an empty array, render an error.
		if (!data || (Array.isArray(data) && data.length === 0))
			return this.renderError();
		this._data = data;
		// Generating the markup.
		const markup = this._generateMarkup();
		this._clear();
		// Inserting the object.
		this._parentElement.insertAdjacentHTML('afterbegin', markup);
	}

	// Method that clears the HTML from the container.
	_clear() {
		// Cleaning the present markup.
		this._parentElement.innerHTML = '';
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
		this._clear();
		this._parentElement.insertAdjacentHTML('afterbegin', markup);
	}

	// Function that renders an error on screen.
	renderError(message = this._errorMessage) {
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
		this._clear();
		this._parentElement.insertAdjacentHTML('afterbegin', markup);
	}

	// Function that renders a success message on screen.
	renderMessage(message = this._message) {
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
		this._clear();
		this._parentElement.insertAdjacentHTML('afterbegin', markup);
	}
}
