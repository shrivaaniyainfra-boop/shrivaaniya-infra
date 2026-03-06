'use strict';

// Smooth Scrolling
const scrollLinks = document.querySelectorAll('a.scroll-link');
scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Form Submission Handling
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted!');
        // You can add your AJAX call here
    });
}

// CTA Button Functionality
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', function() {
        alert('CTA Button Clicked!');
        // Add additional functionality here
    });
}

// Navbar Scroll Effects
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Intersection Observer for Fade-in Animations
const fadeElements = document.querySelectorAll('.fade-in');
const options = {
    root: null,
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, options);

fadeElements.forEach(element => observer.observe(element));
