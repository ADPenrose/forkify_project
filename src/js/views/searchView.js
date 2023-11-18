class SearchView {
	_parentElement = document.querySelector('.search');

	// Gets the query inserted on the searchbar.
	getQuery() {
		// Returning the query.
		const query = this._parentElement.querySelector('.search__field').value;
		// Clearing the searchbar.
		this._clearInput();
		// Returning the query.
		return query;
	}

	// Method that clears the searchbar.
	_clearInput() {
		this._parentElement.querySelector('.search__field').value = '';
	}

	// This function is part of the publisher-subscriber pattern, and acts as the publisher.
	addHandlerSearch(handler) {
		this._parentElement.addEventListener('submit', function (e) {
			// Preventing the default behavior of the form.
			e.preventDefault();
			handler();
		});
	}
}

export default new SearchView();
