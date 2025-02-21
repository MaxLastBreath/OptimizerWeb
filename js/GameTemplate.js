document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("game-container");

    fetch("/json/Main/Games.json")
        .then(response => response.json())
        .then(games => {
            games.forEach(game => {
                const gameElement = document.createElement("div");
                gameElement.classList.add("image-box-container");

                gameElement.innerHTML = `
                    <a href="${game.link}" class="image-box-link underline-hover">
                        <div class="image-box">
                            <img src="${game.image}" alt="${game.name}">
                            ${game.beta ? '<div class="beta"></div>' : ''}
                        </div>
                        <div class="game-name">${game.name}</div>
                    </a>
                `;

                container.appendChild(gameElement);
            });
        })
        .catch(error => console.error("Error loading games:", error));
});
