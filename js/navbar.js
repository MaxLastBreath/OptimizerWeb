let PreviousImg;

function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}

function updateLogo() {


    const width = window.innerWidth;
    const logo = document.getElementById('logo');
    let newSrc;

    console.log('Window resized!', width);


    if (width < 478) {
        newSrc = 'Pictures/logo-small.png';
    }else {
        newSrc = 'Pictures/logo_main.png';
    }

    if (PreviousImg != newSrc){
        logo.src = `${newSrc}?timestamp=${Date.now()}`;
        PreviousImg = newSrc;
    }
}

window.addEventListener('resize', updateLogo);