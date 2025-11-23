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







// document.querySelectorAll(".date-input").forEach(input => {
//   input.addEventListener("touchstart", () => {
//     input.showPicker?.();   // Works on modern mobile browsers
//   });
// });






































//   // Reveal animation for cards
//   const revealItems = document.querySelectorAll('.room-card, .highlight-card, .offer-card');
//   const observer = new IntersectionObserver((entries)=>{
//     entries.forEach(e => {
//       if(e.isIntersecting){
//         e.target.classList.add('show');
//         observer.unobserve(e.target);
//       }
//     });
//   }, {threshold: 0.2});

//   revealItems.forEach(item => observer.observe(item));
// document.addEventListener("DOMContentLoaded", () => {
//   const form = document.querySelector(".booking-box");

//   form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const inputs = form.querySelectorAll("input, select");
//     let allValid = true;

//     inputs.forEach((field) => {
//       if (!field.value.trim()) {
//         allValid = false;
//       }
//     });

//     if (!allValid) {
//       alert("⚠ Please fill all required fields!");
//     } else {
//       window.location.href = "404.error.html"; // Redirect page
//     }
//   });
// });
































    const checkin = document.getElementById("checkin");
    const checkout = document.getElementById("checkout");
    const guests = document.getElementById("guests");
    const button = document.querySelector(".check-btn");

    button.addEventListener("click", function () {
        let checkinVal = checkin.value;
        let checkoutVal = checkout.value;
        let guestsVal = guests.value;

        // Validate all fields
        if (checkinVal === "") {
            alert("Please fil requried details");
            return;
        }
        if (checkoutVal === "") {
            // alert("Please select Check-Out date");
            return;
        }
        if (guestsVal === "Select Guests") {
            // alert("Please select number of guests");
            return;
        }

        // Ensure check-out > check-in
        if (new Date(checkoutVal) <= new Date(checkinVal)) {
            // alert("Check-Out date must be after Check-In date");
            return;
        }

        // Success message
        // alert("Rooms Available! Redirecting...");

        // Redirect to next page (optional)
         window.location.href = "404.html";
    });

