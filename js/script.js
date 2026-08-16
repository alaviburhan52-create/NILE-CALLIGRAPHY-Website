// ======================================
// Nile Calligraphy Website
// Version 1.0
// ======================================

// Current Year (optional if you later use a span with id="year")
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}

// ======================================
// Smooth Scroll for Navigation
// ======================================

const navLinks = document.querySelectorAll('nav a[href^="#"]');

navLinks.forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ======================================
// Header Shadow on Scroll
// ======================================

const header = document.querySelector(".top-header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.classList.add("header-shadow");

    } else {

        header.classList.remove("header-shadow");

    }

});

// ======================================
// Mobile Menu Placeholder
// (Will become functional in Version 2.0)
// ======================================

const menuBtn = document.querySelector(".menu-btn");

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        alert("Mobile menu coming in Version 2.0");

    });

}

// ======================================
// Hero Buttons
// ======================================

const exploreBtn = document.querySelector(".primary-btn");

if (exploreBtn) {

    exploreBtn.addEventListener("click", () => {

        const shop = document.querySelector("#shop");

        if (shop) {

            shop.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

}

// ======================================
// Page Loaded
// ======================================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});