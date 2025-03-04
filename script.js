window.addEventListener("scroll", function () {
    let navbar = this.document.getElementById("navbar");
    if (this.window.scrollY > 50) {
        navbar.style.background = "rgba(64, 190, 33, 0.2)";
        navbar.style.backdropFilter = "blur(15px)";;
    } else {
        navbar.style.background = "rgba(231, 24, 24, 0.2)";
        navbar.style.backdropFilter = "blur(10px)";
    }
})