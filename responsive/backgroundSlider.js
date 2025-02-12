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
];

function getImagesFromFolder() {
    return imageNames.map(img => `${bgFolder}${img}`);
}

function getRandomImage() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * imageNames.length);
    } while (randomIndex === currentImageIndex);
    return randomIndex;
}

function preloadImages(images) {
    return images.map(img => {
        const imgElement = new Image();
        imgElement.src = img;
        return imgElement;
    });
}

function fadeOutAndChange(newImageIndex) {
    const container = document.querySelector('.background-images');
    const currentImg = container.firstChild;

    const newImg = document.createElement('img');
    newImg.src = `${bgFolder}${imageNames[newImageIndex]}`;
    newImg.style.opacity = 0;
    newImg.className = 'bg-image';
    
    container.appendChild(newImg);

    currentImg.style.transition = 'opacity 1s ease-in-out';
    currentImg.style.opacity = 0;

    setTimeout(() => {
        currentImg.remove();
        currentImageIndex = newImageIndex;
        newImg.style.opacity = 1;
    }, 1000);
}

function initializeSlider() {
    const images = getImagesFromFolder();
    
    currentImageIndex = getRandomImage();
    const container = document.querySelector('.background-images');
    const initialImg = document.createElement('img');
    initialImg.src = `${bgFolder}${imageNames[currentImageIndex]}`;
    initialImg.className = 'bg-image';
    container.appendChild(initialImg);

    setInterval(() => {
        fadeOutAndChange(getRandomImage());
    }, 10000);
}

document.addEventListener('DOMContentLoaded', () => {
    initializeSlider();
});