// --- Menu Toggle ---
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.querySelector('i').classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// --- Scroll Sections Active Link & Sticky Navbar ---
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let header = document.querySelector('.header');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // Sticky Navbar
    header.classList.toggle('sticky', top > 100);

    // Remove toggle icon and navbar when click navbar link (scroll)
    if(navbar.classList.contains('active')) {
        menuIcon.querySelector('i').classList.remove('bx-x');
        navbar.classList.remove('active');
    }
};

// --- Scroll Reveal Animation ---
function reveal() {
    var reveals = document.querySelectorAll(".reveal, .reveal-right");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}
window.addEventListener("scroll", reveal);
reveal(); // To trigger on load

// --- Theme Toggle ---
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

// Check for saved user preference, if any, on load of the website
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    body.classList.remove('dark-mode', 'light-mode');
    body.classList.add(currentTheme);

    if (currentTheme === 'light-mode') {
        themeIcon.classList.replace('bx-sun', 'bx-moon');
    }
}

themeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        body.classList.replace('dark-mode', 'light-mode');
        themeIcon.classList.replace('bx-sun', 'bx-moon');
        localStorage.setItem('theme', 'light-mode');
    } else {
        body.classList.replace('light-mode', 'dark-mode');
        themeIcon.classList.replace('bx-moon', 'bx-sun');
        localStorage.setItem('theme', 'dark-mode');
    }
});

// --- Contact Form ---
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Basic validation UI feedback
        const btn = this.querySelector('button');
        const originalText = btn.innerText;
        btn.innerText = 'Message Sent!';
        btn.style.background = '#10b981'; // Green
        btn.style.borderColor = '#10b981';
        
        // Reset form
        this.reset();

        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.background = 'var(--main-color)';
            btn.style.borderColor = 'var(--main-color)';
        }, 3000);
    });
}
