// burger
const burger = document.querySelector(".nav-burger");
const navGroup = document.querySelector(".navbar-group");

burger.addEventListener('click', () => {
    burger.classList.toggle("burger-active");
    navGroup.classList.toggle("appear");
});

// Email
const email = document.querySelector(".email");
email.addEventListener('click', () => {
    window.location.href = "mailto:muhammadferdianiqbal@gmail.com";
});

// slide up
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '50px',
    duration: 2000,
    reset: false
});

sr.reveal('#home, #experience, #portfolio', {
    interval: 200
});

// Scroll Active Link
const navLinks = document.querySelectorAll(".nav-link-item");
const sections = document.querySelectorAll("section");

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= (sectionTop - sectionHeight / 7)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(navLink => {
        navLink.classList.remove('active');

        if (navLink.classList.contains(current)) {
            navLink.classList.add('active');
        }
    });

    // if go to contact section
    const contactLink = document.querySelector(".contact");
    const contactSection = document.querySelector("#contact");
    const contactHeight = contactSection.clientHeight;
    const contactOffsetTop = contactSection.offsetTop;
    if (scrollY >= (contactOffsetTop - contactHeight)) {
        navLinks.forEach(navLink => {
            navLink.classList.remove('active');
        });

        contactLink.classList.add("active");
    }
});

// nav scroll shrink
window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.querySelector(".navbar").classList.add("navbar-shrink");
        document.querySelectorAll(".nav-link-item")[0].classList.add("nav-link-item-shrink");
        document.querySelectorAll(".nav-link-item")[1].classList.add("nav-link-item-shrink");
        document.querySelectorAll(".nav-link-item")[2].classList.add("nav-link-item-shrink");
        document.querySelectorAll(".nav-link-item")[3].classList.add("nav-link-item-shrink");
    }
    else {
        document.querySelector(".navbar").classList.remove("navbar-shrink");
        document.querySelectorAll(".nav-link-item")[0].classList.remove("nav-link-item-shrink");
        document.querySelectorAll(".nav-link-item")[1].classList.remove("nav-link-item-shrink");
        document.querySelectorAll(".nav-link-item")[2].classList.remove("nav-link-item-shrink");
        document.querySelectorAll(".nav-link-item")[3].classList.remove("nav-link-item-shrink");
    }
});



