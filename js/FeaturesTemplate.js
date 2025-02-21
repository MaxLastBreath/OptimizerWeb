function addFeatures(features) {
    const container = document.getElementById("feature-container");
    if (!container) return;

    features.forEach(feature => {
        const li = document.createElement("li");
        const optionBox = document.createElement("div");
        optionBox.classList.add("option-box");

        if (feature.ea) {
            const eaBadge = document.createElement('div');
            eaBadge.classList.add('ea');
            optionBox.appendChild(eaBadge);
        }

        // Create Title
        const title = document.createElement("b");
        title.textContent = feature.title;
        optionBox.appendChild(title);

        // Bullet points handling
        const allBullets = feature.bullets || [];
        const visibleBullets = allBullets.slice(0, 3);  // First 3 visible
        const hiddenBullets = allBullets.slice(3);  // Rest go into expand section

        visibleBullets.forEach(bullet => {
            const bulletItem = document.createElement("ul");
            bulletItem.innerHTML = `• ${bullet}`;
            optionBox.appendChild(bulletItem);
        });

        // Create expandable section only if there are extra bullets
        if (hiddenBullets.length > 0) {
            const moreContent = document.createElement("div");
            moreContent.classList.add("more-content");
            moreContent.style.display = "none";

            hiddenBullets.forEach(bullet => {
                const bulletItem = document.createElement("ul");
                bulletItem.innerHTML = `• ${bullet}`;
                moreContent.appendChild(bulletItem);
            });

            optionBox.appendChild(moreContent);

            // Add expand button
            const button = document.createElement("button");
            button.classList.add("read-more");
            button.textContent = "Expand";

            optionBox.appendChild(button);
        }

        li.appendChild(optionBox);
        container.appendChild(li);
    });

    // Add readme properly after all the boxes have been loaded.
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
}

function FeatureJsonLoad(Location){
    fetch(`${Location}?t=${new Date().getTime()}`)
    .then(response => response.json())
    .then(data => addFeatures(data))
    .catch(error => console.error("Error loading features:", error));
}