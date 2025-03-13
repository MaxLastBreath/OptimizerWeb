document.addEventListener("DOMContentLoaded", function() {
    const footer = document.createElement('footer');
    
    footer.innerHTML = 
    `
        <div class="footer-container">
        <div class="left-content">
            <p><a href="/" class="logo"><img src="/Pictures/logo_main.png" style="height: 35px;" id="logo"></a></p>
            <p style="margin-bottom: 10px">
                NX Optimizer provides game optimization mods and freecamera for: Tears Of The Kingdom, 
                Breath Of The Wild, Echoes of Wisdom, Link's Awakening, 
                Pokemon Scarlet And Violet and other games. 
                Everything you need in one place.
            </p>
        </div>
        <div class="right-content">
            <div>
                <p><b>Pages</b></p>
                <p><a class="custom-nav underline-hover" href="/">Home</a></p>
                <p><a class="custom-nav underline-hover" href="/guides/setup-guide/">Guides</a></p>
                <p><a class="custom-nav underline-hover" href="/releases/">Patch Notes</a></p>
                </div>
            <div>
                <p><b>Social Media</b></p>
                <p><a class="custom-nav underline-hover" href="discord">Discord</a></p>
                <p><a class="custom-nav underline-hover" href="ko-fi">Ko-fi</a></p>
                <p><a class="custom-nav underline-hover" href="patreon">Patreon</a></p>
            </div>
        </div>
        <div class="copyright">
            NX-Optimizer, Ultracam © 2025 MaxLastBreath
        </div>
    `;

    footer.classList.add("main-footer");

    document.body.appendChild(footer);
});
