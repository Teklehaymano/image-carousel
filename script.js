let images = ['default.jpg']; // Initial images array
let currentIndex = 0;
let interval;

document.addEventListener("DOMContentLoaded", function() {
    startCarousel();
});

function startCarousel() {
    interval = setInterval(nextImage, 5000); // Change image every 5 seconds
}

function showImage(index) {
    const carouselImage = document.getElementById('carousel-image');
    carouselImage.src = images[index];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

function openModal() {
    document.getElementById('imageModal').style.display = "block";
}

function closeModal() {
    document.getElementById('imageModal').style.display = "none";
}

function addImage() {
    const input = document.getElementById('imageInput');
    const file = input.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            images.push(e.target.result);
            closeModal();
            if (images.length === 1) {
                showImage(0);
            }
        };
        reader.readAsDataURL(file);
    }
}
