// Festival auto change
const festivals = [
  "Diwali Festival 🪔",
  "Ganesh Chaturthi 🐘",
  "Navratri 🌺",
  "Daily Puja Essentials 🙏"
];

let i=0;
setInterval(()=>{
  const el=document.getElementById("festivalText");
  if(el){
    el.innerText=festivals[i];
    i=(i+1)%festivals.length;
  }
},2500);

// Menu toggle
function toggleMenu(){
  document.getElementById("nav").classList.toggle("active");
}
