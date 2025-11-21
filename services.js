const hamburger = document.querySelector(".hamburger");
const navBar    = document.querySelector(".navBar");

hamburger.addEventListener("click", () => {
  navBar.classList.toggle("active");
});






// Footer Animation on Scroll
document.addEventListener("DOMContentLoaded", () => {

    const footerCols = document.querySelectorAll(".footer-col");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.3 });

    footerCols.forEach(col => {
        observer.observe(col);
    });

});


// Social Icons Hover Animation
document.querySelectorAll(".social-icons .icon").forEach(icon => {
    icon.addEventListener("mouseenter", () => {
        icon.style.transform = "scale(1.2)";
        icon.style.transition = "0.3s ease";
    });

    icon.addEventListener("mouseleave", () => {
        icon.style.transform = "scale(1)";
    });
});


// Smooth Scroll for Footer Links
document.querySelectorAll("footer a").forEach(link => {
    link.addEventListener("click", (e) => {
        if (link.getAttribute("href").startsWith("#")) {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute("href"));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 100,
                    behavior: "smooth"
                });
            }
        }
    });
});











































// small script: dark mode toggle + year + progressive enhancements
(function(){
  const toggle = document.getElementById('darkToggle');
  const yearEl = document.getElementById('year');
  yearEl.textContent = new Date().getFullYear();

  // remember theme preference in localStorage
  const saved = localStorage.getItem('aero-theme');
  if(saved === 'dark') document.body.classList.add('dark');

  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    toggle.textContent = isDark ? 'Light' : 'Dark';
    localStorage.setItem('aero-theme', isDark ? 'dark' : 'light');
  });

  // keyboard shortcut: "D" toggles dark
  window.addEventListener('keydown', (e) => {
    if(e.key.toLowerCase() === 'd') {
      toggle.click();
    }
  });

  // small accessible focus style for keyboard users
  document.body.addEventListener('keyup', (e) => {
    if(e.key === 'Tab') document.documentElement.style.setProperty('--focus-outline','2px solid rgba(11,123,255,0.2)');
  });

})();

