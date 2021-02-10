const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '20035068-7090d1eb537ddaeaad8f328bc';

class ImageApi {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }

    fetchImages() {
        const url = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`;

        return fetch(url)
            .then(response => {
                return response.json();
            })
            .then(({ hits }) => {
                this.incrementPage();
                return hits;
            })
    }

    incrementPage() {
    this.page += 1;
    }
    
    resetPage() {
        this.page = 1;
    }

    get query() {
        return this.searchQuery;
    }

    set query() {
        this.searchQuery = newQuery;
    }
}

export { ImageApi };

