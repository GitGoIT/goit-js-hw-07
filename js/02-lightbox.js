import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const itemsMarkup = createGalleryItemsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', itemsMarkup);

galleryContainer.addEventListener('click', onGalleryContainerClick)


function createGalleryItemsMarkup(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
`;
}).join('');
}

function onGalleryContainerClick(evt) {
    evt.preventDefault();

    new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
        captionPosition: 'bottom',
})

    galleryContainer.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            instance.close()
        }
    });
}

