function scrollToSection(Name) {
    const section = document.getElementById(Name);
    window.scrollTo({
        top: section.offsetTop - 160, 
        behavior: "smooth"
    });
}