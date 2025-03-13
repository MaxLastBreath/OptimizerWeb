function loadPatchInfo(classID, patch){
    fetch(`${patch}/patchInfo.json`)
        .then(response => response.json())
        .then(json => {
            classID.innerHTML += `<li><a class="custom-nav" href="${patch}"><b>${json.date}</b> : ${json.title}</a></li>`
        })
        .catch(error => console.error(`Error loading ${patch}/patchInfo.json:`, error));
}

fetch('releases.json')
    .then(response => response.json())
    .then(json => {
        let metaAuthor = document.createElement('meta');
        metaAuthor.name = "author";
        metaAuthor.content = "MaxLastBreath";
        document.head.appendChild(metaAuthor);

        let releases =  document.getElementById('releases')

        releases.style.padding = "20px"
        releases.style.textAlign = "left"
        
        releases.innerHTML += "<h2>Patch Notes For : </h2>"
        
        for (let patch of json.public) {
            loadPatchInfo(releases, patch)
        }
        
    })
    .catch(error => console.error('Error loading patchInfo.json:', error));