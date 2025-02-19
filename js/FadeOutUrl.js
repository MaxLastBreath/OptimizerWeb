function fadeOutAndRedirect(url) {
    document.body.classList.add("content-fade-out");
    setTimeout(() => {
        window.location.href = url;
    }, 200);
}