let url = window.location.origin +"/";
let formOverlay=document.getElementById('overlay');
let contactForm = document.getElementById('contactForm');

function offline() {
    formOverlay.style.display = "block";
    contactForm.classList.add("offline");
}

function online() {
    formOverlay.style.display = "none";
    contactForm.classList.remove("offline");
}
(function() {

    window.addEventListener('online', online);
    window.addEventListener('offline', offline);

    if (!navigator.onLine) {
        offline();
    }

 })();


let viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
document.getElementsByTagName('body')[0].onresize = function () {
    viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    // console.log(viewportHeight);
};


// change the color of the navbar to white when leaving the blue backgorund
let navbar = document.getElementById('navbar');
let navLinks = document.getElementsByClassName('nav-link');
window.onscroll = function () {
    "use strict";
    if (window.pageYOffset >= viewportHeight - 53) {
        navbar.classList.add("nav-bg-colored");
        navbar.classList.remove("nav-bg-white");
        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].classList.add("nav-link-white");
            navLinks[i].classList.remove("nav-link-colored");
        }

    } else {
        navbar.classList.add("nav-bg-white");
        navbar.classList.remove("nav-bg-colored");
        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].classList.remove("nav-link-white");
            navLinks[i].classList.add("nav-link-colored");
        }
    }
};


window.onload = function () {
    // typeWriter();


};

let bachelor = "Systemtechnik - Informations- und Kommunikationssysteme";
let speed = 60;
let i = 0;

function typeWriter() {
    if (i < bachelor.length) {
        document.getElementById("bachelor").innerHTML += bachelor.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

function notBuiltYet() {
    alert("page under construction");
}