const bgFolder = "BG/"; 
let currentImageIndex = 0;

const imageNames = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg",
    "image6.jpg",
    "image7.jpg",
    "image8.jpg",
];

function getRandomImage() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * imageNames.length);
    } while (randomIndex === currentImageIndex);
    return randomIndex;
}

function fadeOutAndChange(newImageIndex) {
    const container = document.querySelector('.background-images');
    if (!container) {
        console.error("Container '.background-images' not found!");
        return;
    }

    const currentImg = container.querySelector('.bg-image');
    if (!currentImg) {
        console.error("No existing image found in container!");
        return;
    }

    const newImg = document.createElement('img');
    newImg.src = `${bgFolder}${imageNames[newImageIndex]}`;
    newImg.className = 'bg-image';
    newImg.style.position = "absolute";  // Prevent layout shift
    newImg.style.top = "0";
    newImg.style.left = "0";
    newImg.style.width = "100%";
    newImg.style.height = "100%";
    newImg.style.opacity = "0";
    newImg.style.filter = "blur(3px)";
    newImg.style.transition = "opacity 1s ease-in-out";

    container.appendChild(newImg);

    // Ensure new image is loaded before fading in
    newImg.onload = () => {
        newImg.style.opacity = "1";

        setTimeout(() => {
            if (currentImg && currentImg.parentNode === container) {
                currentImg.remove(); // Remove old image after transition
            }
            currentImageIndex = newImageIndex;
        }, 1000);
    };
}

function initializeSlider() {
    const container = document.querySelector('.background-images');
    if (!container) {
        console.error("Container '.background-images' not found!");
        return;
    }

    currentImageIndex = getRandomImage();
    
    const initialImg = document.createElement('img');
    initialImg.src = `${bgFolder}${imageNames[currentImageIndex]}`;
    initialImg.className = 'bg-image';
    initialImg.style.position = "absolute";
    initialImg.style.top = "0";
    initialImg.style.left = "0";
    initialImg.style.width = "100%";
    initialImg.style.height = "100%";

    container.appendChild(initialImg);

    setInterval(() => {
        fadeOutAndChange(getRandomImage());
    }, 25000);
}

document.addEventListener('DOMContentLoaded', () => {
    initializeSlider();
});
