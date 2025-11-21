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

















// const form = document.getElementById('checkin-form');
// const message = document.getElementById('checkin-msg');

// form.addEventListener('submit', function(e) {
//   e.preventDefault();

//   const booking = document.getElementById('booking').value.trim();
//   const lastName = document.getElementById('lastName').value.trim();

//   if(booking && lastName) {
//     message.textContent = `Success! Checked in for booking: ${booking}`;
//     message.style.color = '#00ff7f';
//     form.reset();
//   } else {
//     message.textContent = 'Please fill all fields';
//     message.style.color = '#ff4d4d';
//   }
// });





















//  /***** Seat map generation & interactions *****/
//     const seatmap = document.getElementById('seatmap');
//     const occupiedSeats = new Set(['1B','1C','2C','3D','4A','4B','5E','7F','8A','9D']); // sample occupied
//     const cols = ['A','B','C','D','E','F'];
//     const rows = 1; // we will show rows 1..12 but with 6 cols
//     // build 12 rows
//     const totalRows = 12;

//     function makeSeatId(row, col) { return `${row}${col}`; }
//     const seatElements = {};
//     for(let r=1;r<=totalRows;r++){
//       for(let c=0;c<cols.length;c++){
//         const id = makeSeatId(r, cols[c]);
//         const btn = document.createElement('button');
//         btn.type='button';
//         btn.className='seat';
//         btn.dataset.seat = id;
//         btn.innerText = id;
//         btn.setAttribute('role','gridcell');
//         if(occupiedSeats.has(id)){
//           btn.classList.add('occupied');
//           btn.disabled = true;
//           btn.setAttribute('aria-disabled','true');
//         }
//         seatmap.appendChild(btn);
//         seatElements[id] = btn;
//       }
//     }

//     let selectedSeat = null;
//     seatmap.addEventListener('click', (e)=>{
//       const btn = e.target.closest('.seat');
//       if(!btn || btn.classList.contains('occupied')) return;
//       const seat = btn.dataset.seat;
//       if(selectedSeat) seatElements[selectedSeat].classList.remove('selected');
//       selectedSeat = seat;
//       btn.classList.add('selected');
//       btn.focus();
//     });

//     // Auto assign selects the first free seat in window/aisle prioritization (example logic)
//     document.getElementById('autoAssign').addEventListener('click', ()=>{
//       const priority = ['A','F','C','D','B','E']; // window then aisle then middle
//       let found = null;
//       outer: for(let r=1;r<=totalRows;r++){
//         for(let p=0;p<priority.length;p++){
//           const s = `${r}${priority[p]}`;
//           if(!occupiedSeats.has(s)){
//             found = s;
//             break outer;
//           }
//         }
//       }
//       if(found){
//         if(selectedSeat) seatElements[selectedSeat].classList.remove('selected');
//         selectedSeat = found;
//         seatElements[found].classList.add('selected');
//         seatElements[found].scrollIntoView({behavior:'smooth', block:'center'});
//       } else {
//         alert('Sorry — no free seats available.');
//       }
//     });

//     /***** Form submit: simulate check-in steps and animation *****/
//     const form = document.getElementById('checkinForm');
//     const progressWrap = document.getElementById('progressWrap');
//     const progressBar = document.getElementById('progressBar');
//     const confirmBox = document.getElementById('confirmBox');
//     const confirmSeat = document.getElementById('confirmSeat');
//     const checkinBtn = document.getElementById('checkinBtn');

//     function showProgress(){
//       progressWrap.style.display='block';
//       progressBar.style.width='0%';
//       progressBar.setAttribute('aria-valuenow', 0);
//     }
//     function setProgress(v){
//       progressBar.style.width = v+'%';
//       progressBar.setAttribute('aria-valuenow', v);
//     }
//     function hideProgress(){
//       setTimeout(()=>{ progressWrap.style.display='none'; }, 600);
//     }

//     function validateForm(data){
//       if(!data.get('ref') || !data.get('lname')) return {ok:false, msg:'Please enter booking reference and last name.'};
//       return {ok:true};
//     }

//     form.addEventListener('submit', (ev)=>{
//       ev.preventDefault();
//       confirmBox.style.display='none';
//       const fd = new FormData(form);
//       const v = validateForm(fd);
//       if(!v.ok){
//         // simple inline warning
//         alert(v.msg);
//         return;
//       }
//       const chosenSeat = selectedSeat || 'Auto';
//       // start simulated check-in
//       showProgress();
//       checkinBtn.disabled = true;
//       checkinBtn.innerText = 'Checking...';

//       const steps = [15, 40, 68, 92, 100];
//       let i=0;
//       const t = setInterval(()=>{
//         setProgress(steps[i]);
//         i++;
//         if(i>=steps.length){
//           clearInterval(t);
//           hideProgress();
//           // show confirmation
//           confirmSeat.innerText = (chosenSeat === 'Auto' ? assignRandomSeat() : chosenSeat);
//           confirmBox.style.display='flex';
//           checkinBtn.disabled = false;
//           checkinBtn.innerText = 'Check in';
//           // optionally "send" boarding pass (simulate)
//           flashNotification('Boarding pass sent to your email / phone');
//         }
//       }, 650);
//     });

//     function assignRandomSeat(){
//       // pick a free seat (random)
//       const free = Object.keys(seatElements).filter(s => !occupiedSeats.has(s));
//       if(free.length===0) return '—';
//       const pick = free[Math.floor(Math.random()*free.length)];
//       return pick;
//     }

//     function flashNotification(text){
//       const n = document.createElement('div');
//       n.style.position='fixed';
//       n.style.right='18px';
//       n.style.bottom='18px';
//       n.style.background='linear-gradient(90deg, rgba(79,195,247,0.14), rgba(76,175,80,0.06))';
//       n.style.color='#eafcff';
//       n.style.padding='10px 14px';
//       n.style.borderRadius='10px';
//       n.style.boxShadow='0 8px 24px rgba(2,6,23,0.6)';
//       n.style.fontSize='13px';
//       n.style.zIndex=9999;
//       n.textContent = text;
//       document.body.appendChild(n);
//       setTimeout(()=> n.style.opacity='0', 2400);
//       setTimeout(()=> n.remove(), 3000);
//     }

//     // View Boarding Pass button (simple modal emulation)
//     document.getElementById('viewBoarding').addEventListener('click', ()=>{
//       if(!selectedSeat && !confirmBox.style.display) flashNotification('Please check in to generate boarding pass.');
//       else {
//         const seat = (selectedSeat || confirmSeat.innerText || '—');
//         const html = `<div style="padding:18px"><strong>BOARDING PASS</strong><div style="margin-top:10px">Flight: AS-280<br>Seat: ${seat}<br>Name: ${document.getElementById('lname').value || 'Passenger'}</div></div>`;
//         // simple popup
//         const w = window.open('', 'bp', 'width=420,height=260');
//         w.document.write('<body style="font-family:Inter,Arial,Helvetica,sans-serif;background:#071029;color:#e6eef8;">'+html+'</body>');
//         w.document.close();
//       }
//     });

//     // small accessibility: press Enter on a seat to select
//     seatmap.addEventListener('keydown', (e)=>{
//       const el = e.target.closest('.seat');
//       if(!el) return;
//       if(e.key === 'Enter' || e.key === ' '){
//         e.preventDefault();
//         el.click();
//       }
//     });

//     // initial small animation: reveal seats staggered
//     document.addEventListener('DOMContentLoaded', ()=>{
//       const nodes = Array.from(document.querySelectorAll('.seat'));
//       nodes.forEach((n,i)=>{
//         n.style.opacity='0';
//         setTimeout(()=>{ n.style.transition='opacity .5s ease, transform .18s'; n.style.opacity='1'; n.style.transform='translateY(0)'; }, 50 + i*18);
//       });
//     });

//     // basic form fill helper: if user pastes a long code with spaces, remove spaces
//     document.getElementById('ref').addEventListener('input', (e)=>{
//       e.target.value = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g,'').slice(0,8);
//     });

























   document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();

    const lastName = document.querySelector('input[placeholder="Enter your last name"]').value.trim();
    const pnr = document.querySelector('input[placeholder="ABC123"]').value.trim();
    const date = document.querySelector('input[type="date"]').value.trim();

    // Validation
    if (lastName === "" || pnr === "" || date === "") {
        showError("Please fill all fields!");
        return;
    }

    // If everything is filled → Redirect to boarding page
    window.location.href = "404.html";  // ⬅ change if needed
});

// Show error message
function showError(message) {
    let errorBox = document.getElementById("error");

    if (!errorBox) {
        errorBox = document.createElement("div");
        errorBox.id = "error";
        errorBox.style.background = "#ffdddd";
        errorBox.style.color = "#b30000";
        errorBox.style.padding = "12px";
        errorBox.style.marginTop = "10px";
        errorBox.style.borderRadius = "8px";
        errorBox.style.textAlign = "center";
        errorBox.style.fontWeight = "600";
        document.getElementById("checkin-form").appendChild(errorBox);
    }

    errorBox.innerText = message;
    errorBox.style.display = "block";

    setTimeout(() => {
        errorBox.style.display = "none";
    }, 3000);
}

