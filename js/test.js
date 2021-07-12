import galleryItems from './gallery-items.js';

const galleryList = document.querySelector('ul.js-gallery');

const makeGalleryMarkup = ({ preview, original, description }) => {
  return `<li class="gallery__item">
  <a
    class="gallery__link"
    href=${original}
  >
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</li>`;
};

const galleryMarkup = galleryItems.map(makeGalleryMarkup).join('');

galleryList.insertAdjacentHTML('beforeend', galleryMarkup);