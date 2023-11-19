// Importing the icons.
// These two are the same, but the second one is the one shown in the docs.
// import icons from 'url:../img/icons.svg';
const icons = new URL('../../img/icons.svg', import.meta.url);

export default class View {
	_data;
	// Method that renders a recipe.
	render(data, render = true) {
		// In case there is no data, or the data is an empty array, render an error.
		if (!data || (Array.isArray(data) && data.length === 0))
			return this.renderError();
		this._data = data;
		// Generating the markup.
		const markup = this._generateMarkup();
		// If the render parameter is false, we return the markup generated, instead of
		// inserting it on the screen.
		if (!render) return markup;
		this._clear();
		// Inserting the object.
		this._parentElement.insertAdjacentHTML('afterbegin', markup);
	}

	// Method that updates certain parts of the view, without updating also the data that stays
	// static.
	update(data) {
		// In case there is no data, or the data is an empty array, render an error.
		// if (!data || (Array.isArray(data) && data.length === 0))
		// 	return this.renderError();
		this._data = data;

		// Generating the markup.
		const newMarkup = this._generateMarkup();

		// Converting the string to a DOM Object, to be then used to make a comparison between itself
		// and what's currently on the page.
		const newDOM = document.createRange().createContextualFragment(newMarkup);
		// Selecting all of the elements on the new virtual DOM, and converting the object into
		// an array.
		const newElements = Array.from(newDOM.querySelectorAll('*'));
		// Selecting all of the elements on the current DOM, and converting the object into
		// an array.
		const curElements = Array.from(this._parentElement.querySelectorAll('*'));
		// Comparing the elements between the arrays. This is an O(n^2) alg. time-wise from the Big-O
		// perspective.
		newElements.forEach((newEl, i) => {
			const curEl = curElements[i];
			// Checking whether or not both nodes have the same content. If the content is different,
			// we update the current DOM accordingly. Also, this only should be done if the content
			// of the node is text, thus avoiding updating entire containers and breaking the UI.

			// This updates changed text.
			if (
				!newEl.isEqualNode(curEl) &&
				newEl.firstChild?.nodeValue.trim() !== ''
			) {
				// console.log('😖', newEl.firstChild.nodeValue.trim());
				curEl.textContent = newEl.textContent;
			}

			// This updates changed attributes.
			if (!newEl.isEqualNode(curEl)) {
				// console.log(Array.from(newEl.attributes));
				Array.from(newEl.attributes).forEach((attr) =>
					curEl.setAttribute(attr.name, attr.value)
				);
			}
		});
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
