import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { findImages } from './js/pixabay-api';
 import { displayImg } from './js/render-functions';

document.addEventListener("DOMContentLoaded", () => {
    const searchForm = document.getElementById('name-form');
    const searchInput = document.getElementById('name-input');
    const loader = document.getElementById('loader');

    searchForm.addEventListener('submit', async event => {
        event.preventDefault();
        const query = searchInput.value.trim();

        if (query === '') {
            iziToast.error({
                title: 'Error',
                message: 'Сannot send a request if the search field is empty'
            });
            return;
        }

        loader.style.display = 'block'; 

        try {
            const images = await findImages(query);
            if (images.length === 0) {
                iziToast.error({
                    title: 'Sorry',
                    message: 'There are no images for your search!'
                });
            } else {
                displayImg(images);
            }
        } catch (error) {
            iziToast.error({
                title: 'Error',
                message: 'Failed to fetch images!'
            });
        } finally {
            loader.style.display = 'none'; 
        }
    });
});