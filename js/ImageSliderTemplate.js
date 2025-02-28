

function AttachImageSlider(TargetContainer){
    const htmlContent = `
    <div class="button-compare" id="button-container"></div>

    <div class="slider-container">
        <select id="left-select" class="slider-select"></select>
        <select id="right-select" class="slider-select"></select>
    </div>

    <div class="ImageBounds">
        <div class="ImageComparer">
            <div class="box">
                <div class="before"><img id="before-image" src="" alt="Tears Of The Kingdom 1080p, 1440p, 4k, 8k, 16k resolution"></div>
                <div class="slider">
                    <button></button>
                </div>
                <div class="after"><img id="after-image" src="" alt="Tears Of The Kingdom (TOTK) 1080p, 1440p, 4k, 8k, 16k resolution"></div>
            </div>
        </div>
    </div>
    `;

    const container = document.getElementById(TargetContainer);
    container.innerHTML = htmlContent;
}

function populateSelect(options, selectedLeft = null, selectedRight = null) {
    const selectElement_left = document.getElementById('left-select');
    const selectElement_right = document.getElementById('right-select');

    selectElement_left.innerHTML = '';
    selectElement_right.innerHTML = '';

    if (!selectedLeft || !selectedRight){
        selectedLeft = options[0].value;
        selectedRight = options[options.length - 1].value;
    }

    options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option.value;
        optionElement.textContent = option.name;

        if (option.value === selectedLeft) {
            optionElement.selected = true;
        }

        selectElement_left.appendChild(optionElement);
    });

    options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option.value;
        optionElement.textContent = option.name;

        if (option.value === selectedRight) {
            optionElement.selected = true;
        }

        selectElement_right.appendChild(optionElement);
    });
     
    // Workaround to trigger a change
    const selectElement = document.getElementById('left-select');
    const changeEvent = new Event('change');
    selectElement.dispatchEvent(changeEvent);
}

function createButton(label, array, section) {
    const button = document.createElement('button');
    button.innerText = label;

    const arrayString = JSON.stringify(array);

    button.setAttribute("onclick", `populateSelect(${arrayString}); window.location.hash = '#${section}';`);

    document.getElementById("button-container").appendChild(button);
}