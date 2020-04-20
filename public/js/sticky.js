window.onscroll = function () { stickyBar() };
var navbar = document.getElementById("navigation-bar");
var sticky = navbar.offsetTop;

function stickyBar() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}