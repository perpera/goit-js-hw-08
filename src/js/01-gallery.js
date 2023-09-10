import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryList = document.querySelector('.gallery');

function createGalleryItem({ preview, original, description }) {
  return `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
    </a></li>`;
}

const markup = galleryItems.map(createGalleryItem).join('');

galleryList.innerHTML = markup;

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
