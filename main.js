window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    
    if (window.scrollY > 0) {
        header.style.opacity = "0.5";
    }
    else {
        header.style.opacity = "1";
    }
});

function toggleMenu() {
    var menuToggle = document.querySelector(".toggle");
    var menu = document.querySelector(".menu");

    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
}