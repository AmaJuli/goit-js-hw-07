import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryElements = document.querySelector('.gallery');

//Page markup

   const galleryMarkup = galleryItems.map(item => `
  <li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </li>
`).join('');
    
galleryElements.innerHTML = galleryMarkup;

galleryElements.addEventListener('click', event => {
  event.preventDefault();

  const target = event.target;
  if (target.classList.contains('gallery__image')) {
    const source = target.dataset.source;
    const instance = basicLightbox.create(`<img src="${source}" alt="" />`);
    instance.show();
  }
});