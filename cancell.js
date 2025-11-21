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










// ===== CANCELLATION FORM VALIDATION =====

document.getElementById("cancelForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let pnr = document.getElementById("pnr").value.trim();
  let lname = document.getElementById("lname").value.trim();
  let error = document.getElementById("errorMsg");

  if (pnr === "" || lname === "") {
    error.textContent = "⚠ Please fill in all required fields";
    return;
  }

  // If validation passes → Next page
  window.location.href = "404.error.html";
});












// // Search form validation
// document.getElementById("flightForm").addEventListener("submit", function(e) {
//   e.preventDefault();

//   const allFilled = [...this.elements].every(field => field.value.trim() !== "");

//   if (!allFilled) {
//     alert("⚠️ Please fill all required fields!");
//   } else {
//     window.location.href = "booking.html";
//   }
// });
