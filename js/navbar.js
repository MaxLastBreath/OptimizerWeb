let PreviousImg;
let logo = true;
let logo_html = '';

function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}

function updateLogo() {

    const width = window.innerWidth;
    const logo = document.getElementById('logo');

    if (!logo){
        return;
    }
    
    let newSrc;

    console.log('Window resized!', width);


    if (width < 478) {
        newSrc = '/Pictures/logo-small.png';
    } else {
        newSrc = '/Pictures/logo_main.png';
    }

    if (PreviousImg != newSrc){
        logo.src = `${newSrc}?timestamp=${Date.now()}`;
        PreviousImg = newSrc;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const navigation = document.createElement('div');
    navigation.className = "nav-container";

    if (logo){
        logo_html = `<a href="/" class="logo"><img src="/Pictures/logo_main.png" style="height: 35px;" id="logo"></a>`
    }
    
    navigation.innerHTML = `
        ${logo_html}
        <ul class="nav-links">
            <li><a onclick="fadeOutAndRedirect('https://github.com/MaxLastBreath/TOTK-mods/releases')"> <i class="fa-solid fa-file-pen"></i></a></li>
            <li><a onclick="fadeOutAndRedirect('https://github.com/MaxLastBreath/TOTK-mods/releases')"> <i class="fa-brands fa-github"></i></a></li>
            <li><a onclick="fadeOutAndRedirect('/discord')" target="_blank"><i class="fa-brands fa-discord"></i></a></li>
            <li><a onclick="fadeOutAndRedirect('https://www.patreon.com/c/MaxLastBreath')" target="_blank"><i class="fa-brands fa-patreon"></i></a></li>
            <li><a onclick="fadeOutAndRedirect('https://ko-fi.com/MaxLastBreath')" target="_blank"><i class="fas fa-ko-fi"></i></a></li>
        </ul>
    `;

    document.getElementById("auto-nav").appendChild(navigation);
});

window.addEventListener('resize', updateLogo);
window.addEventListener('pageshow', updateLogo);