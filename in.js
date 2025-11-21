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





















// function searchFlights() {
//     let status = document.getElementById("statusMsg");

//     // get form fields
//     let from = document.querySelector("input[name='from']").value.trim();
//     let to = document.querySelector("input[name='to']").value.trim();
//     let depart = document.querySelector("input[name='depart']").value.trim();

//     // required field check
//     if (from === "" || to === "" || depart === "") {
//         status.style.color = "red";
//         status.textContent = "❗ Please fill all required fields.";
//         return;  // STOP submit
//     }

//     // success animation
//     status.style.color = "orange";
//     status.textContent = "🔍 Searching flights...";

//     setTimeout(() => {
//         status.style.color = "green";
//         status.textContent = "🚀 Space flights found! Proceed to booking.";
//     }, 2000);
// }


// // ----------------------
// // SEARCH FLIGHTS
// // ----------------------
// function searchFlights() {
//     const from = document.querySelector("input[name='from']");
//     const to = document.querySelector("input[name='to']");
//     const depart = document.querySelector("input[name='depart']");
//     const status = document.getElementById("statusMsg");

//     // Check required fields
//     if (from.value.trim() === "" || to.value.trim() === "" || depart.value.trim() === "") {
//         status.style.color = "red";
//         status.innerHTML = "❗ Please fill all required fields.";
//         return; // STOP going to the next page
//     }

//     status.style.color = "orange";
//     // status.innerHTML = "🔍 Searching flights...";

//     // Fake loading
//     setTimeout(() => {
//         status.style.color = "green";
//         status.innerHTML = "🚀 Flights found! Redirecting...";
        
//         // SUCCESS → Go to next page
//         window.location.href = "./404.html"; 
//     }, 1500);
// }



// // ----------------------




// /* ---------------------------
//    FIXED NEWSLETTER SCRIPT
// ----------------------------*/
// document.getElementById("newsletter-form").addEventListener("submit", function (e) {
//     e.preventDefault(); // stop redirect

//     let email = document.getElementById("newsletter-email").value.trim();
//     let msg = document.getElementById("newsletter-msg");

//     if (email === "") {
//         msg.style.color = "red";
//         msg.textContent = "❗ Please enter your email.";
//         return;
//     }

//     msg.style.color = "orange";
//     msg.textContent = "⏳ Subscribing...";

//     setTimeout(() => {
//         msg.style.color = "green";
//         msg.textContent = "🎉 Subscription successful!";
//     }, 1500);
// });















// /* Optional: small accessibility enhancement: focus first input on load */
// document.addEventListener('DOMContentLoaded', () => {
//   const firstInput = document.querySelector('#flight-search input');
//   if (firstInput) firstInput.focus();
// });











// ----------------------
// SEARCH FLIGHTS
// ----------------------
function searchFlights() {
    const from = document.querySelector("input[name='from']");
    const to = document.querySelector("input[name='to']");
    const depart = document.querySelector("input[name='depart']");
    const status = document.getElementById("statusMsg");

    // Check required fields
    if (from.value.trim() === "" || to.value.trim() === "" || depart.value.trim() === "") {
        status.style.color = "red";
        status.innerHTML = "❗ Please fill all required fields.";
        return; // STOP going to the next page
    }

    status.style.color = "orange";
    // status.innerHTML = "🔍 Searching flights...";

    // Fake loading
    setTimeout(() => {
        status.style.color = "green";
        // status.innerHTML = "🚀 Flights found! Redirecting...";
        
        // SUCCESS → Go to next page
        window.location.href = "./404.html"; 
    }, 150);
}



// ----------------------
// NEWSLETTER SUBSCRIBE
// ----------------------
function subscribeNewsletter() {
    const emailInput = document.getElementById("newsletter-email");
    const msg = document.getElementById("newsletter-msg");

    // email empty check
    if (emailInput.value.trim() === "") {
        msg.style.color = "red";
        msg.innerHTML = "❗ Please enter your email.";
        return;
    }

    // simple email format check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        msg.style.color = "red";
        msg.innerHTML = "❗ Please enter a valid email.";
        return;
    }

    msg.style.color = "orange";
    // msg.innerHTML = "📨 Subscribing...";

    // Fake loading
    setTimeout(() => {
        msg.style.color = "green";
        // msg.innerHTML = "✔️ Subscribed successfully!";
        emailInput.value = "";
        window.location.href = "./404.html"; 
    }, 150);
    
}
