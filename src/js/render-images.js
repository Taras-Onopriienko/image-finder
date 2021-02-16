import imageCard from '../templates/image-card.hbs';
import getRefs from './get-refs'

const refs = getRefs();

function renderImages(images) {
    refs.imgsContainer.insertAdjacentHTML('beforeend', imageCard(images));
}
export {renderImages}