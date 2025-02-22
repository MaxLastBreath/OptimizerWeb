document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.ImageComparer');
    const ImageSliderBounds = document.querySelector('.ImageBounds');
    const slider = document.querySelector('.slider');
    const sliderBtn = document.querySelector('.slider button');
    const before = document.querySelector('.before');
    let isDragging = false;
    let zoomLevel = 1;
    const minZoom = 1;
    const maxZoom = 3;

    function updateSliderPosition(x) {
        const rect = container.getBoundingClientRect();
        const position = (x - rect.left) / rect.width;
        const percentage = Math.max(0, Math.min(1, position)) * 100;
        
        before.style.right = `${100 - percentage}%`;
        slider.style.right = `calc(${100 - percentage}% - 1px)`;
    }

    ImageSliderBounds.addEventListener('mousedown', (e) => {
        isDragging = true;
        updateSliderPosition(e.clientX);
    });

    ImageSliderBounds.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        updateSliderPosition(e.clientX);
    });

    ImageSliderBounds.addEventListener('mouseup', () => {
        isDragging = false;
    });

    // Touch events
    ImageSliderBounds.addEventListener('touchstart', (e) => {
        if (e.touches.length === 2) {
            // Get the initial distance between two fingers
            const dx = e.touches[0].clientX - e.touches[1].clientX;
            const dy = e.touches[0].clientY - e.touches[1].clientY;
            initialDistance = Math.sqrt(dx * dx + dy * dy);
            initialZoom = zoomLevel;
        }
    });
    
    ImageSliderBounds.addEventListener('touchmove', (e) => {
        if (e.touches.length === 2) {
            e.preventDefault();
    
            const dx = e.touches[0].clientX - e.touches[1].clientX;
            const dy = e.touches[0].clientY - e.touches[1].clientY;
            const newDistance = Math.sqrt(dx * dx + dy * dy);
    
            const zoomFactor = newDistance / initialDistance;
            let newZoom = initialZoom * zoomFactor;
    
            zoomLevel = Math.min(Math.max(newZoom, minZoom), maxZoom);
    
            container.style.transform = `scale(${zoomLevel})`;
            sliderBtn.style.transform = `scale(${1.0 / zoomLevel})`;
        }
    });
    
    ImageSliderBounds.addEventListener('touchend', () => {
        initialDistance = 0;
    });

    ImageSliderBounds.addEventListener('click', (e) =>{
        updateSliderPosition(e.clientX);
    })

    ImageSliderBounds.addEventListener('wheel', (e) => {
    
        const scaleFactor = 1.1;
        const zoomIn = e.deltaY < 0;
        const newZoom = zoomIn ? zoomLevel * scaleFactor : zoomLevel / scaleFactor;
    
        // Calculate new zoom level, clamped between minZoom and maxZoom
        zoomLevel = Math.min(Math.max(newZoom, minZoom), maxZoom);
    
        // Get the container's bounds
        const containerRect = container.getBoundingClientRect();
        const containerCenterX = containerRect.width / 2;
        const containerCenterY = containerRect.height / 2;
    
        const mouseX = e.clientX - containerRect.left;
        const mouseY = e.clientY - containerRect.top;
    
        const offsetX = mouseX - containerCenterX;
        const offsetY = mouseY - containerCenterY;
    
        const imageBoundsRect = ImageSliderBounds.getBoundingClientRect();
    
        const scale = zoomLevel;
        const zoomOffsetX = offsetX * (scale - 1);
        const zoomOffsetY = offsetY * (scale - 1);
    
        const maxOffsetX = (containerRect.width * scale) / (scale * 10);
        const maxOffsetY = (containerRect.height * scale) / (scale * 10);

        // Restrict the maximum and minimum offsets for panning
        let constrainedOffsetX = Math.min(Math.max(-zoomOffsetX, -maxOffsetX), maxOffsetX);
        let constrainedOffsetY = Math.min(Math.max(-zoomOffsetY, -maxOffsetY), maxOffsetY);

        container.style.transform = `scale(${scale}) translate(${constrainedOffsetX}px, ${constrainedOffsetY}px)`;
        sliderBtn.style.transform = `scale(${1.0 / zoomLevel})`;

        if (scale > 1.0 && scale != maxZoom){
            e.preventDefault();
        }
        
        console.log("Zoom", scale, "CX", containerRect.width, "CY", containerRect.height, "BX", imageBoundsRect.width, "BY", imageBoundsRect.height, "TransformedX", constrainedOffsetX, "TransformedY", constrainedOffsetY)
    });

    const beforeImage = document.getElementById('before-image');
    const afterImage = document.getElementById('after-image');
    const leftSelect = document.getElementById('left-select');
    const rightSelect = document.getElementById('right-select');

    function updateImages() {
        const leftValue = leftSelect.value;
        const rightValue = rightSelect.value;

        console.log('Left selection:', leftValue);
        console.log('Right selection:', rightValue);

        beforeImage.src = `${leftValue}?timestamp=${Date.now()}`;
        afterImage.src = `${rightValue}?timestamp=${Date.now()}`;
    }

    leftSelect.addEventListener('change', updateImages);
    rightSelect.addEventListener('change', updateImages);
});

function ImageSliderJsonLoad(JsonName) {
    fetch(JsonName)
    .then(response => response.json())
    .then(config => {
        try {
            const arrays = config.arrays || {};
            const buttons = config.buttons || [];
            const hashMappings = config.hashMappings || {};

            // Default array, can be changed dynamically
            let LoadArray = arrays[config.defaultArray] || Object.values(arrays)[0];

            const hash = window.location.hash;

            if (hashMappings[hash]) {
                const arrayKey = hashMappings[hash];
                LoadArray = arrays[arrayKey] || LoadArray;
            }

            populateSelect(LoadArray);

            buttons.forEach(button => {
                const array = arrays[button.array] || []; // Dynamically select array if exists
                createButton(button.label, array, button.section);
            });

        } catch (error) {
            console.error('Error processing config:', error);
        }
    })
    .catch(error => console.error('Error loading JSON:', error));
}


