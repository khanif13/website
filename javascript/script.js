const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


// Script untuk Slider Project
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(slideIndex) {
    slides.forEach((slide, index) => {
        if (index === slideIndex) {
            slide.style.display = 'block'; // Tampilkan slide yang sesuai
        } else {
            slide.style.display = 'none'; // Sembunyikan slide lainnya
        }
    });
}

// Fungsi untuk menampilkan slide sebelumnya
prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
    showSlide(currentSlide);
});

// Fungsi untuk menampilkan slide berikutnya
nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
    showSlide(currentSlide);
});

// Inisialisasi dengan menampilkan slide pertama
showSlide(currentSlide);

console.log("JavaScript Terhubung");

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Mencegah submit bawaan
            alert("Pesan berhasil terkirim!"); // Tampilkan pesan
            contactForm.reset(); // Reset form
        });
    }
});

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
}


// Smooth scroll to section function
function scrollToSection() {
    document.querySelector(".parallax-section").scrollIntoView({
        behavior: "smooth"
    });
}
