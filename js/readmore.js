document.addEventListener("DOMContentLoaded", function() {
    const optionBoxes = document.querySelectorAll('.option-box');
  
    optionBoxes.forEach(function(box) {
      box.addEventListener('click', function() {
        const moreContent = this.querySelector('.more-content');
        const readMoreButton = this.querySelector('.read-more');
  
        if (moreContent.style.display === 'none' || moreContent.style.display === '') {
          moreContent.style.display = 'block';
          readMoreButton.textContent = 'Collapse';
        } else {
          moreContent.style.display = 'none';
          readMoreButton.textContent = 'Expand';
        }
      });
    });
  });
  