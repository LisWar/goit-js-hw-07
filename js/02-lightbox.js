import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector(".gallery");

galleryItems.forEach(element => {
    // console.log('element: ', ${element});
    const markup = `
    <li>\
    <a class="gallery__item" href="${element.original}">\
    <img class="gallery__image" src="${element.preview}" alt="${element.description}" />\
    </a>\
    </li>`
    gallery.insertAdjacentHTML('beforeend', markup)
});

var lightbox = new SimpleLightbox('.gallery a', {caption:true, captionsData: 'alt', captionDelay: '250ms'});
// console.log('lightbox: ', lightbox);

