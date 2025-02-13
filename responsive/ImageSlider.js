document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.ImageComparer');
    const slider = document.querySelector('.slider');
    const before = document.querySelector('.before');
    let isDragging = false;

    function updateSliderPosition(x) {
        const rect = container.getBoundingClientRect();
        const position = (x - rect.left) / rect.width;
        const percentage = Math.max(0, Math.min(1, position)) * 100;
        
        before.style.right = `${100 - percentage}%`;
        slider.style.right = `calc(${100 - percentage}% - 1px)`;
    }

    slider.addEventListener('mousedown', (e) => {
        isDragging = true;
        updateSliderPosition(e.clientX);
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        updateSliderPosition(e.clientX);
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });

    // Touch events
    slider.addEventListener('touchstart', (e) => {
        isDragging = true;
        updateSliderPosition(e.touches[0].clientX);
    });

    document.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        updateSliderPosition(e.touches[0].clientX);
    });

    document.addEventListener('touchend', () => {
        isDragging = false;
    });
});