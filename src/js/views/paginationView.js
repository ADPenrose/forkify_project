// Importing the icons.
// These two are the same, but the second one is the one shown in the docs.
// import icons from 'url:../img/icons.svg';
const icons = new URL('../../img/icons.svg', import.meta.url);

// Importing parent class.
import View from './View';

class PaginationView extends View {
	_parentElement = document.querySelector('.pagination');

	addHandlerClick(handler) {
		// Using event delegation.
		this._parentElement.addEventListener('click', function (e) {
			const btn = e.target.closest('.btn--inline');
			if (!btn) return;

			// Getting the target page.
			const goToPage = +btn.dataset.goto;
			handler(goToPage);
		});
	}

	_generateMarkupButtonNext(page) {
		return `
			<button data-goto=${page + 1} class="btn--inline pagination__btn--next">
				<span>Page ${page + 1}</span>
				<svg class="search__icon">
					<use href="${icons}#icon-arrow-right"></use>
				</svg>
			</button>
		`;
	}

	_generateMarkupButtonPrev(page) {
		return `
				<button data-goto=${page - 1} class="btn--inline pagination__btn--prev">
					<svg class="search__icon">
						<use href="${icons}#icon-arrow-left"></use>
					</svg>
					<span>Page ${page - 1}</span>
				</button>
			`;
	}

	_generateMarkup() {
		// Getting the total number of pages.
		const curPage = this._data.page;
		const numPages = Math.ceil(
			this._data.results.length / this._data.resultsPerPage
		);
		// console.log(numPages);

		// Page 1, and there are other pages.
		if (curPage === 1 && numPages > 1) {
			return this._generateMarkupButtonNext(curPage);
		}

		// Last page.
		if (curPage === numPages && numPages > 1) {
			return this._generateMarkupButtonPrev(curPage);
		}

		// Other page.
		if (curPage < numPages) {
			return (
				this._generateMarkupButtonPrev(curPage) +
				this._generateMarkupButtonNext(curPage)
			);
		}

		// Page 1, and there are no other pages.
		return '';
	}
}
export default new PaginationView();
