import icons from 'url:../../img/icons.svg'; // parcel
import View from './View';
import previewView from './previewView';

class ResultsView extends View {
    _parentElement = document.querySelector('.results');
    _errorMessage = 'No recipes found for the query.';
    _message = '';

    _generateMarkup() {
        // in View.js --> render(data, render = true) --> set here render to false
        return this._data.map(result => previewView.render(result, false)).join('');
    }
}

export default new ResultsView();