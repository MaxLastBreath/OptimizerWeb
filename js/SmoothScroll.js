function scrollToSection(Name) {
    const section = document.getElementById(Name);
    window.scrollTo({
        top: section.offsetTop - 160, 
        behavior: "smooth"
    });

    let sidebar = document.getElementById("sidebar");

    if (sidebar){
        sidebar.classList.toggle("active");
    }
}