/* Animation */
window.sr = ScrollReveal();
sr.reveal(".navbar", {
  duration: 2000,
  origin: "bottom",
});
sr.reveal(".header-content-left", {
  duration: 2000,
  origin: "top",
  distance: "300px",
});
sr.reveal(".header-content-right", {
  duration: 2000,
  origin: "bottom",
  distance: "300px",
});

/* Smooth Scrolling*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});