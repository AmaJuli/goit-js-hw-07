import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryElements = document.querySelector('.gallery');

const galleryMarkup = galleryItems.map(item =>  `
        <li class="gallery__item">
          <a class="gallery__link" href="${item.original}">
            <img 
              class="gallery__image" 
              src="${item.preview}" 
              alt="${item.description}" />
          </a>
        </li>
        `
    ).join('');

galleryElements.innerHTML = galleryMarkup;

const lightBox = new SimpleLightbox('.gallery a', {
  captionsData: "alt",
  captionDelay: 250,
});