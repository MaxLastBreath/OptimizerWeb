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
        isDragging = true;
        updateSliderPosition(e.touches[0].clientX);
    });

    ImageSliderBounds.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        updateSliderPosition(e.touches[0].clientX);
    });

    ImageSliderBounds.addEventListener('touchend', () => {
        isDragging = false;
    });

    ImageSliderBounds.addEventListener('click', (e) =>{
        updateSliderPosition(e.clientX);
    })

    ImageSliderBounds.addEventListener('wheel', (e) => {
        e.preventDefault();
    
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
        
        console.log("Zoom", scale, "CX", containerRect.width, "CY", containerRect.height, "BX", imageBoundsRect.width, "BY", imageBoundsRect.height, "TransformedX", constrainedOffsetX, "TransformedY", constrainedOffsetY)
    });
});
