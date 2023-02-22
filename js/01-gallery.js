import { galleryItems } from './gallery-items.js';

// Change code below this line

const gallery = document.querySelector(".gallery");

galleryItems.forEach(element => {
    // console.log('element: ', ${element});
    const markup = `<div class=\"gallery__item\">\
    <a class=\"gallery__link\" href=\"large-image.jpg\">\
      <img\
        class=\"gallery__image\"\
        src=\" ${element.preview}  \"\
        data-source=\" ${element.original}\"\
        alt=\" ${element.description} \" />\
    </a>\
  </div>`
    gallery.insertAdjacentHTML('beforeend', markup)
});

console.log(galleryItems);

gallery.addEventListener("click", maxImage);
function maxImage(e) {
    const t = e.target;
    e.preventDefault();
    if (e.target.nodeName !== "IMG") {
        return;
      }

    const origSrc = e.target.src;
    
    // const origClass =  e.target.class;
    console.log('e.target.class: ', e.target.classList);
    // e.target.src = e.target.dataset.source;
    // e.target.classList.toggle("gallery__image");
    // e.target.classList.toggle("max__image");
    // console.log('e.target.class: ', e.target.classList);

    const instance = basicLightbox.create(`<img\
    class=\"gallery__image\"\
    src=\" ${e.target.dataset.source}  \"\
    alt=\" ${e.target.alt} \" />`
    , {
        onShow: (instance) => {
            // console.log('newImg: ', newImg)
            e.target.src = origSrc;
            instance.element().onclick = instance.close
        }
    })

    instance.show()

}