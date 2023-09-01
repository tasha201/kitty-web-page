const title = document.querySelector(".cats-title");
const logotype = document.querySelector(".site-logo img");
const body = document.querySelector("body");

function onLogoClick() {
  logotype.classList.toggle("is-hidden");
}
title.addEventListener("click", onLogoClick);

const catPhoto = document.querySelector(".cat-photo");

function onPhotoClick() {
  fetch("https://loremflickr.com/320/240").then((response) => {
    const imgUrl = response.url;
    catPhoto.src = imgUrl;
    catPhoto.width = "296";
    catPhoto.height = "370";
  })
    // catPhoto.src = "https://picsum.photos/200/300";
    .catch((error) => {
      console.error(error);
    });
}
catPhoto.addEventListener("click", onPhotoClick);


const slider = document.querySelector(".hero-list");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

const mySiema = new Siema({
  selector: slider,
  loop: true,
  duration: 1000,
  easing: "cubic-bezier(.17,.67,.32,1.34)"
});

function onNextClick() {
  mySiema.next();
}

function onPrevClick() {
  mySiema.prev();
}

next.addEventListener("click", onNextClick);
prev.addEventListener("click", onPrevClick);

const lightbox = new SimpleLightbox(".gallery a", {
  closeText: "&#128514;",
  fadeSpeed: 1000
});

AOS.init();
