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

  <a c href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
`;
}).join('');
}

function onGalleryContainerClick(evt) {
    evt.preventDefault();
    const urlOriginal = evt.target.dataset.source


    const instance = basicLightbox.create(`
    <img src= "${urlOriginal}" width="800" height="600" >
`);

    instance.show()
   
    galleryContainer.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            instance.close()
        }
    });
}

