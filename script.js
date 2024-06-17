// script.js
const images = [
    "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    
    
];

let currentIndex = 0;

const slideshowElement = document.getElementById('slideshow');

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    slideshowElement.src = images[currentIndex];
}

// Set the first image
slideshowElement.src = images[currentIndex];

// Start the slideshow
setInterval(showNextImage, 2000);
