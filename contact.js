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
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Stop form from submitting

    let name = document.querySelector("input[placeholder='Your Name']");
    let email = document.querySelector("input[placeholder='Your Email']");
    let subject = document.querySelector("input[placeholder='Subject']");
    let message = document.querySelector("textarea[placeholder='Your Message']");
    let statusMsg = document.getElementById("statusMsg");

    if (name.value === "" || email.value === "" || subject.value === "" || message.value === "") {
        statusMsg.innerHTML = "❌ Please fill the required fields";
        statusMsg.style.color = "red";
        return;
    }

    // If all fields filled → Go to another page
    // statusMsg.innerHTML = "✔ Message Submitted Successfully!";
    statusMsg.style.color = "green";

    setTimeout(() => {
        window.location.href = "404.html"; // Change to your redirect page
    }, 100);
});

