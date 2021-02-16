import  getRefs  from './get-refs';
import { ImageApi } from './apiService';
import { renderImages } from "./render-images";



const refs = getRefs();

const imageApi = new ImageApi();

refs.searchForm.addEventListener('submit', onSearch)

// let searchQuery = '';
function onSearch(e) {
    e.preventDefault();

    imageApi.query = e.currentTarget.elements.query.value;

    imageApi.fetchImages();
    renderImages();
}