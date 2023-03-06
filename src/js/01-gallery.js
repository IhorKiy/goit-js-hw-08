// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const refElemGalery = document.querySelector(".gallery");
const addCreateList = createList(galleryItems);
refElemGalery.insertAdjacentHTML("beforeend", addCreateList);

function createList(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li><div class="gallery">
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></div></li>`;
    })
    .join("");
}

const instance = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
})