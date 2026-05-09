// --- 1. HEADER AUTO-HIDE ON SCROLL ---
let lastScrollTop = 0;
const header = document.getElementById('main-header');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 90) {
        if (scrollTop > lastScrollTop) {
            header.classList.add('header-hidden');
        } else {
            header.classList.remove('header-hidden');
        }
    } else {
        header.classList.remove('header-hidden');
    }
    lastScrollTop = scrollTop;
});

// --- 2. MOBILE SLIDING MENU LOGIC ---
const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle menu open/close when clicking the hamburger
menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Change icon between Hamburger (bars) and Close (xmark)
    const icon = menuBtn.querySelector('i');
    if (navMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
});

// Automatically close the sliding menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        
        // Reset icon back to hamburger
        const icon = menuBtn.querySelector('i');
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    });
});

// --- 3. HERO IMAGE SLIDER LOGIC ---
const slides = document.querySelectorAll('.hero-slide');
let currentSlide = 0;

function nextSlide() {
    // Hide the current slide
    slides[currentSlide].classList.remove('active');
    
    // Move to the next slide (and loop back to 0 at the end)
    currentSlide = (currentSlide + 1) % slides.length;
    
    // Show the new slide
    slides[currentSlide].classList.add('active');
}

// Change the background image every 5 seconds (5000 milliseconds)
setInterval(nextSlide, 5000);