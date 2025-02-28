document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("id-container");

    let tableHtml = `
        <table class="controls-table">
            <thead>
                <tr>
                    <th class="image">Image</th>
                    <th>Name</th>
                    <th>Title ID</th>
                    <th>State</th>
                </tr>
            </thead>
            <tbody>
    `;

    fetch("/json/Main/Games.json")
        .then(response => response.json())
        .then(games => {
            games.forEach(game => {
                tableHtml += `
                    <tr data-link="${game.link}">
                        <td class="image"><img src="${game.image}"></img></td>
                        <td>${game.name}</td>
                        <td>${game.id}</td>
                        <td>${game.beta ? "Early Access" : game.planned ? "Planned" : "Public"}</td>
                    </tr>
                `;
            });

            tableHtml += `</tbody></table>`; // Closing the table properly
            container.innerHTML = tableHtml; // Insert into DOM

            // Make table rows clickable
            document.querySelectorAll("tr[data-link]").forEach(row => {
                row.addEventListener("click", function () {
                    window.location.href = this.getAttribute("data-link");
                });
            });
        })
        .catch(error => console.error("Error loading games:", error));
});
