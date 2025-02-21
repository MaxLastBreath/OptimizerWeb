function loadTable(Location, layout) {
    fetch(Location)
        .then(response => response.json())
        .then(data => {

            if (!layout){
                layout = Object.keys(data)[0];
            }

            const layoutData = data[layout];
            
            let tableHtml = `
                <table class="controls-table">
                    <thead>
                        <tr>
                            <th>Feature</th>
                            <th>Controller</th>
                            <th>Keyboard / Mouse</th>
                        </tr>
                    </thead>
                    <tbody>
            `;

            layoutData.forEach(row => {
                tableHtml += `
                    <tr>
                        <td>${row.feature}</td>
                        <td>${row.controller}</td>
                        <td>${row.keyboard || row.mouse}</td>
                    </tr>
                `;
            });

            tableHtml += `</tbody></table>`;
            
            document.getElementById('controls-table').innerHTML = tableHtml;
        })
        .catch(error => {
            console.error('Error loading the JSON data:', error);
        });
}

function generateButtons(location) {
    fetch(location)
        .then(response => response.json())
        .then(data => {
            const buttonContainer = document.getElementById('button-container-controls');
            for (const layout in data) {
                const button = document.createElement('button');
                button.textContent = `${layout.charAt(0).toUpperCase() + layout.slice(1)}`;
                button.onclick = () => loadTable(location, layout);
                buttonContainer.appendChild(button);
            }
        })
        .catch(error => {
            console.error('Error loading the JSON data:', error);
        });
}

function ControlsJsonLoad(location){ 
    generateButtons(location);
    loadTable(location);
}