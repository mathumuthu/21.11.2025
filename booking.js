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






document.getElementById("flightForm").addEventListener("submit", function (e) {
  e.preventDefault(); // stop submit first

  let fields = this.querySelectorAll("[required]");
  let valid = true;

  fields.forEach(field => {
    if (field.value.trim() === "") {
      valid = false;
      field.style.borderColor = "red";
    } else {
      field.style.borderColor = "#ccc";
    }
  });

  if (!valid) {
    alert("Please fill all required fields");
    return; // stop here
  }

  // If all fields are filled → go to another page
  window.location.href = "404.html"; 
});










document.getElementById("checkinForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let pnr = document.getElementById("pnr").value.trim();
    let date = document.getElementById("date").value;

    if (name === "" || pnr === "" || date === "") {
        alert("Please fill in all fields!");
        return;
    }

    if (pnr.length !== 6) {
        alert("PNR must be 6 characters!");
        return;
    }

    document.getElementById("successMsg").style.display = "block";

    setTimeout(() => {
        window.location.href = "boarding-pass.html"; // your next page
    }, 2000);
});
