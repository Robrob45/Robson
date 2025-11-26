let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

document.querySelector('.carousel-control-next').addEventListener('click', () => {
  moveToNextSlide();
});

document.querySelector('.carousel-control-prev').addEventListener('click', () => {
  moveToPrevSlide();
});

function updateCarousel() {
  items.forEach((item, index) => {
    item.classList.toggle('active', index === currentIndex);
  });
}

function moveToNextSlide() {
  currentIndex = (currentIndex + 1) % totalItems;
  updateCarousel();
}

function moveToPrevSlide() {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  updateCarousel();
}

updateCarousel();