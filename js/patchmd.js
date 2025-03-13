fetch('patch.md')
    .then(response => response.text())
    .then(markdown => {
        document.getElementById('markdown').innerHTML = marked.parse(markdown);
});

fetch('patchInfo.json')
    .then(response => response.json())
    .then(json => {
        let metaAuthor = document.createElement('meta');
        metaAuthor.name = "author";
        metaAuthor.content = "MaxLastBreath";
        document.head.appendChild(metaAuthor);

        let metaDescription = document.createElement('meta');
        metaDescription.name = "description";
        metaDescription.content = json.description;
        document.head.appendChild(metaDescription);

        document.title = json.title;

        document.getElementById('title').innerHTML = json.title;
        document.getElementById('description').innerHTML = json.description;
    })
    .catch(error => console.error('Error loading patchInfo.json:', error));