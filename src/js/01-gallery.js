import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

const elements = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__item" href='${original}'>
  <img class="gallery__image" src='${preview}' alt='${description}' />
</a>`;
  })
  .join('');

galleryRef.insertAdjacentHTML('beforeend', elements);
galleryRef.addEventListener('click', onElementClick);

function onElementClick(evt) {
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  evt.preventDefault();
  var lightbox = new SimpleLightbox('.gallery a', {
    nav: true,
    captionsData: 'alt',
    captionPosition: 'bottom',
  });
}
