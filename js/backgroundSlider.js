let currentImageIndex = 0;
let imageNames = [];

function BGArray(SelectGames) {
    fetch("/json/Main/backgrounds.json")
        .then(response => response.json())
        .then(games => {
            for (let i = 0; i < SelectGames.length; i++) {
                let gameKey = SelectGames[i];

                if (games.hasOwnProperty(gameKey)) {
                    for (let i = 0; i < games[gameKey].length; i++){
                        imageNames.push(games[gameKey][i]);
                    };
                }
            }

            initializeSlider();
        })
        .catch(error => console.error("Error loading games:", error));
}

function getRandomImage() {
    if (imageNames.length === 2) {
        currentImageIndex = currentImageIndex === 0 ? 1 : 0;
    } else {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * imageNames.length);
        } while (randomIndex === currentImageIndex);

        currentImageIndex = randomIndex;
    }

    return currentImageIndex;
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
    else {
        currentImg.addEventListener('transitionend', () => currentImg.remove());
    }

    const newImg = document.createElement('img');
    newImg.src = `${imageNames[newImageIndex]}`;
    newImg.className = 'bg-image';
    newImg.style.position = "absolute";  // Prevent layout shift
    newImg.style.top = "0";
    newImg.style.left = "0";
    newImg.style.width = "100%";
    newImg.style.height = "100%";
    newImg.style.opacity = "0";
    newImg.style.filter = "blur(3px)";
    newImg.style.transition = "opacity 1s ease-in-out";
    newImg.loading = "lazy";
    newImg.decoding = "async";

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
    initialImg.src = `${imageNames[currentImageIndex]}`;
    initialImg.className = 'bg-image';
    initialImg.style.position = "absolute";
    initialImg.style.top = "0";
    initialImg.style.left = "0";
    initialImg.style.width = "100%";
    initialImg.style.height = "100%";
    initialImg.loading = "lazy";
    initialImg.decoding = "async";

    container.appendChild(initialImg);

    setInterval(() => {
        fadeOutAndChange(getRandomImage());
    }, 25000);
}