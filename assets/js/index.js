// Hobbies Carousel functionality
const carouselTrack = document.querySelector('.carousel-track');
const carouselItems = document.querySelectorAll('.carousel-track .hobby-item');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');

let currentIndex = 0;
let itemsPerPage = 3; // Default for larger screens

const updateItemsPerPage = () => {
    if (window.innerWidth <= 480) {
        itemsPerPage = 1;
    } else if (window.innerWidth <= 768) {
        itemsPerPage = 2;
    } else {
        itemsPerPage = 3;
    }
};

const updateCarousel = () => {
    const itemWidth = carouselItems[0].offsetWidth; // Includes padding
    carouselTrack.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
};

// Initial setup
updateItemsPerPage();
updateCarousel();

// Handle resize events
window.addEventListener('resize', () => {
    updateItemsPerPage();
    updateCarousel();
});

prevButton.addEventListener('click', () => {
    currentIndex = Math.max(0, currentIndex - 1);
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = Math.min(carouselItems.length - itemsPerPage, currentIndex + 1);
    updateCarousel();
});

// You may have other scripts here from previous tasks