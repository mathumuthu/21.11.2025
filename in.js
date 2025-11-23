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







































// window.onload = function () {
//   const day = document.getElementById("day");
//   const month = document.getElementById("month");
//   const year = document.getElementById("year");

//   // Fill Days
//   for (let d = 1; d <= 31; d++) {
//     day.innerHTML += `<option value="${d}">${d}</option>`;
//   }

//   // Fill Months
//   const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
//   months.forEach((m, i) => {
//     month.innerHTML += `<option value="${i+1}">${m}</option>`;
//   });

//   // Fill Years (today → +5 years)
//   const currentYear = new Date().getFullYear();
//   for (let y = currentYear; y <= currentYear + 5; y++) {
//     year.innerHTML += `<option value="${y}">${y}</option>`;
//   }
// };



















// function searchFlights() {
//   let finalDate;

//   // Desktop selector
//   if (window.innerWidth > 600) {
//     finalDate = document.getElementById("desktop-date").value;
//   }
//   // Mobile selector
//   else {
//     const d = document.getElementById("day").value;
//     const m = document.getElementById("month").value;
//     const y = document.getElementById("year").value;

//     if (!d || !m || !y) {
//       alert("Please select a valid date");
//       return;
//     }

//     finalDate = `${y}-${m}-${d}`;
//   }

//   console.log("Selected Date:", finalDate);
//   alert("Flight search date: " + finalDate);
// }











































// window.onload = function () {
//   const day = document.getElementById("day");
//   const month = document.getElementById("month");
//   const year = document.getElementById("year");

//   // DAYS
//   for (let d = 1; d <= 31; d++) {
//     day.innerHTML += `<option value="${d}">${d}</option>`;
//   }

//   // MONTHS
//   const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
//   months.forEach((m, i) => {
//     month.innerHTML += `<option value="${i+1}">${m}</option>`;
//   });

//   // YEARS
//   let currentYear = new Date().getFullYear();
//   for (let y = currentYear; y <= currentYear + 5; y++) {
//     year.innerHTML += `<option value="${y}">${y}</option>`;
//   }
// };

// function searchFlights() {
//   let from = document.querySelector("input[name='from']").value;
//   let to = document.querySelector("input[name='to']").value;
//   let finalDate;

//   // Desktop mode
//   if (window.innerWidth > 600) {
//     finalDate = document.getElementById("desktop-date").value;
//   } 
//   // Mobile mode
//   else {
//     let d = document.getElementById("day").value;
//     let m = document.getElementById("month").value;
//     let y = document.getElementById("year").value;

//     if (d && m && y) {
//       finalDate = `${y}-${m}-${d}`;
//     } else {
//       finalDate = "";
//     }
//   }

//   // Validation
//   if (!from || !to || !finalDate) {
//     alert("Please fill all required fields");
//     return;
//   }

//   // Redirect to another page
//   window.location.href = "404.html"; 
// }















/* --------- searchFlights() - call from form onsubmit --------- */
function searchFlights(evt) {
  // If called from an event, prevent default
  if (evt && evt.preventDefault) evt.preventDefault();

  const status = document.getElementById('statusMsg');
  const form = document.getElementById('flight-search');
  const btn = form.querySelector('button[type="submit"]');

  // get text inputs
  const from = (form.querySelector('input[name="from"]') || {}).value || '';
  const to   = (form.querySelector('input[name="to"]')   || {}).value || '';

  // date: prefer desktop date input if visible, otherwise combine mobile selects
  const desktopInput = document.getElementById('desktopDate');
  let dateValue = '';

  // If desktop input exists and is visible (non-empty and not display:none), use it
  if (desktopInput && desktopInput.value && getComputedStyle(desktopInput).display !== 'none') {
    dateValue = desktopInput.value;
  } else {
    // fallback to mobile selects (ids: mDay, mMonth, mYear)
    const d = document.getElementById('mDay') ? document.getElementById('mDay').value : '';
    const m = document.getElementById('mMonth') ? document.getElementById('mMonth').value : '';
    const y = document.getElementById('mYear') ? document.getElementById('mYear').value : '';

    if (d && m && y) {
      // ensure two-digit month/day
      const mm = String(m).padStart(2,'0');
      const dd = String(d).padStart(2,'0');
      dateValue = `${y}-${mm}-${dd}`;
    } else {
      dateValue = '';
    }
  }

  // Basic validation
  if (!from.trim()) {
    status.textContent = 'Please enter a "From" city or airport.';
    (form.querySelector('input[name="from"]') || {}).focus();
    return false;
  }
  if (!to.trim()) {
    status.textContent = 'Please enter a "To" city or airport.';
    (form.querySelector('input[name="to"]') || {}).focus();
    return false;
  }
  if (!dateValue) {
    status.textContent = 'Please select a departure date.';
    return false;
  }

  // Good — start search
  status.textContent = 'Searching flights...';
  btn.disabled = true;
  btn.setAttribute('aria-busy', 'true');

  // Example: redirect to a search-results page with query params.
  // Replace 'search-results.html' with your actual results page or AJAX call.
  const params = new URLSearchParams({
    from: from.trim(),
    to: to.trim(),
    depart: dateValue
  });

  // Small timeout to show the "Searching..." state; remove if you want immediate redirect
  setTimeout(() => {
    // If you prefer AJAX, replace this redirect with fetch() to your API.
    window.location.href = '404.html?' + params.toString();
  }, 500);

  return false; // prevent default when used inline
}

/* ---------- Defensive: also attach event listener in case inline was removed ---------- */
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('flight-search');
  if (!form) return;

  // Ensure only one desktop date input exists; if duplicates exist, keep the first
  const desktops = document.querySelectorAll('input[type="date"][id="desktopDate"]');
  if (desktops.length > 1) {
    // remove duplicates after the first
    for (let i = 1; i < desktops.length; i++) desktops[i].remove();
  }

  // Attach submit handler (if your form already uses inline onsubmit it's fine)
  form.addEventListener('submit', function(e){
    e.preventDefault();
    return searchFlights();
  });

  // Optional: allow Enter key on inputs to trigger submit
  const inputs = form.querySelectorAll('input, select');
  inputs.forEach(inp => {
    inp.addEventListener('keydown', (ev) => {
      if (ev.key === 'Enter') {
        ev.preventDefault();
        searchFlights();
      }
    });
  });
});








// --------------------------
// Populate mobile date fields
// --------------------------
window.addEventListener("load", () => {
  const day = document.getElementById("mDay");
  const month = document.getElementById("mMonth");
  const year = document.getElementById("mYear");

  // Days
  for (let d = 1; d <= 31; d++) {
    day.innerHTML += `<option value="${d}">${d}</option>`;
  }

  // Months
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  months.forEach((m,i) => {
    month.innerHTML += `<option value="${i+1}">${m}</option>`;
  });

  // Years
  const start = new Date().getFullYear();
  for (let y = start; y <= start + 2; y++) {
    year.innerHTML += `<option value="${y}">${y}</option>`;
  }
});

// --------------------------
// SEARCH BUTTON FUNCTION
// --------------------------
function searchFlights() {
  const from = document.querySelector("input[name='from']").value.trim();
  const to = document.querySelector("input[name='to']").value.trim();

  // Desktop date
  const deskDate = document.getElementById("dDate").value;

  // Mobile date
  const mDay = document.getElementById("mDay").value;
  const mMonth = document.getElementById("mMonth").value;
  const mYear = document.getElementById("mYear").value;

  let finalDate = deskDate;

  // If mobile fields are filled, use them
  if (mDay !== "" && mMonth !== "" && mYear !== "") {
    finalDate = `${mYear}-${String(mMonth).padStart(2,"0")}-${String(mDay).padStart(2,"0")}`;
  }

  // Validation
  if (from === "" || to === "" || finalDate === "") {
    document.getElementById("statusMsg").innerText = "❗ Please fill all required fields";
    return;
  }

  // SUCCESS
  // document.getElementById("statusMsg").innerText = "✔ Searching flights...";

  // Redirect to booking page (you can change the link)
  setTimeout(() => {
    window.location.href = "404.html?from=" + from + "&to=" + to + "&date=" + finalDate;
  }, 10);
}

