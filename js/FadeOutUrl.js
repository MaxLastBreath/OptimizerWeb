function fadeOutAndRedirect(url) {
    document.body.classList.add("content-fade-out");
    setTimeout(() => {
        window.location.href = url;
    }, 200);
}

window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
        document.body.classList.remove("content-fade-out");
    }
});