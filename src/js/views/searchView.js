// listen for the events in this view and pass the controller function into the method built here

class SearchView {
    // querySelector for index.html .search --> form with input
    _parentEl = document.querySelector('.search');

    getQuery() {
        // get form input value --> get, clear, return the query
        const query = this._parentEl.querySelector('.search__field').value;
        this._clearInput();
        return query;
    }

    // add function to clear input and call it in controller
    _clearInput() {
        this._parentEl.querySelector('.search__field').value = '';
    }

    // addHandlerSearch method = publisher (controlSearchResults as a subscriber)
    addHandlerSearch(handler) {
        // add event listener to entire form (not only to button) - so that it works with both button/enter
        // can't call submit directly - add preventDefault, otherwise page will reload
        this._parentEl.addEventListener('submit', function(e) {
            e.preventDefault();
            handler();
        })
    }
}
// export instance/object that was created by this class - not the class
export default new SearchView();