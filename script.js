// JavaScript to cycle through images
let currentIndex = 0;
const images = document.querySelectorAll('.hero-image');
const totalImages = images.length;

function changeImage() {
    // Hide all images
    images.forEach((img, index) => {
        img.style.display = 'none';
    });

    // Show the current image
    currentIndex = (currentIndex + 1) % totalImages; // Loop back to the first image after the last one
    images[currentIndex].style.display = 'block';
}

// Initialize the first image to show
images[currentIndex].style.display = 'block';

// Change image every 5 seconds
setInterval(changeImage, 5000); // 5000ms = 5 seconds

// JavaScript to toggle the mobile menu
document.getElementById("hamburger-menu").addEventListener("click", function() {
    document.querySelector("nav").classList.toggle("open");
});

