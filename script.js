// function toggleMenu() {
//     const menu = document.querySelector(".menu-links");
//     const icon = document.querySelector(".hamburger-icon");
//     menu.classList.toggle("open");
//     icon.classList.toggle("open");
    
// }

// $(document).ready(function () { $('.navbar-toggler').click(function () { $('#sidebar').toggleClass('show'); }); });

// typing animation
var typed = new Typed(".typing",{
    strings:["", "Aspiring Developer"],
    typespeed:100,
    BackSpeed: 60,
    loop: true

})

require('dotenv').config();
const apiKey = process.env.GOOGLE_API_KEY;