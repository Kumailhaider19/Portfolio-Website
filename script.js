// ===============================
// PRELOADER
// ===============================

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 800);
});


// ===============================
// STICKY HEADER
// ===============================

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }

});


// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }

});

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';

    });

});


// ===============================
// VIEW TOGGLE
// ===============================

const viewToggle = document.getElementById("viewToggle");
const savedViewMode = localStorage.getItem("viewMode");

function updateViewIcon() {
    if (!viewToggle) return;
    const icon = viewToggle.querySelector("i");
    if (document.body.classList.contains("light-view")) {
        icon.className = "fa-solid fa-moon";
    } else {
        icon.className = "fa-solid fa-sun";
    }
}

if (savedViewMode === "light") {
    document.body.classList.add("light-view");
}

if (viewToggle) {
    viewToggle.addEventListener("click", () => {
        document.body.classList.toggle("light-view");
        const mode = document.body.classList.contains("light-view") ? "light" : "dark";
        localStorage.setItem("viewMode", mode);
        updateViewIcon();
    });
}

updateViewIcon();


// ===============================
// TYPING EFFECT
// ===============================

const typing = document.getElementById("typing");

const words = [

    "Web Developer",
    "UI/UX Designer",
    "AI Agent Developer"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const current = words[wordIndex];

    if (!deleting) {

        typing.textContent = current.substring(0, charIndex++);

        if (charIndex > current.length) {

            deleting = true;

            setTimeout(typeEffect, 1200);

            return;

        }

    } else {

        typing.textContent = current.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }

        }

    }

    setTimeout(typeEffect, deleting ? 50 : 120);

}

typeEffect();


// ===============================
// BACK TO TOP
// ===============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.classList.add("show");
    } else {
        topBtn.classList.remove("show");
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ===============================
// SCROLL REVEAL
// ===============================

const reveals = document.querySelectorAll(
    ".about-card, .service-card, .certificate-card, .section-title, .contact form"
);

function revealElements() {

    reveals.forEach(item => {

        const top = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (top < windowHeight - 120) {

            item.classList.add("show");
            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealElements);
window.addEventListener("load", revealElements);


// ===============================
// BUTTON RIPPLE EFFECT
// ===============================

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", function (e) {

        const circle = document.createElement("span");

        const diameter = Math.max(
            this.clientWidth,
            this.clientHeight
        );

        const radius = diameter / 2;

        circle.style.width = circle.style.height = diameter + "px";

        circle.style.left =
            e.clientX - this.getBoundingClientRect().left - radius + "px";

        circle.style.top =
            e.clientY - this.getBoundingClientRect().top - radius + "px";

        circle.classList.add("ripple");

        const ripple = this.querySelector(".ripple");

        if (ripple) {
            ripple.remove();
        }

        this.appendChild(circle);

    });

});


// ===============================
// PARALLAX HERO IMAGE
// ===============================

const heroImage = document.querySelector(".image-box");

window.addEventListener("mousemove", (e) => {

    const x = (window.innerWidth / 2 - e.pageX) / 40;
    const y = (window.innerHeight / 2 - e.pageY) / 40;

    heroImage.style.transform =
        `translate(${x}px, ${y}px)`;

});


// ===============================
// ACTIVE NAV LINK
// ===============================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ===============================
// CONSOLE MESSAGE
// ===============================

console.log(
    "%cPortfolio Developed by M. Kumail Haider",
    "color:#3b82f6;font-size:18px;font-weight:bold;"
);