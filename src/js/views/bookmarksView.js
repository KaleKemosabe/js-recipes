import View from './View';
import previewView from './previewView';
import icons from 'url:../../img/icons.svg'; // parcel

class BookmarksView extends View {
    _parentElement = document.querySelector('.bookmarks__list');
    _errorMessage = 'No bookmarks yet.';
    _message = '';

    addHandlerRender(handler) {
        window.addEventListener('load', handler);
    }

    _generateMarkup() {
        // loop over array --> _data
        // in View.js --> render(data, render = true) --> set here render to false
        return this._data.map(bookmark => previewView.render(bookmark, false)).join('');
    }
}

export default new BookmarksView();