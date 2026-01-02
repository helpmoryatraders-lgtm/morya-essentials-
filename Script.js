function order(product){
  let msg = `Order Request:
Product: ${product}`;
  window.open("https://wa.me/91XXXXXXXXXX?text=" + encodeURIComponent(msg));
}

const festival = document.getElementById("festival");
const day = new Date().getDay();

const fest = [
  "Ganpati Bappa Morya 🙏",
  "Pure Puja Day",
  "Devotion & Faith",
  "Temple Ritual Day",
  "Spiritual Energy",
  "Diwali Festival 🪔",
  "Dasara Festival ⚔️"
];

if(festival){
  festival.innerHTML = `<h2>${fest[day]}</h2>`;
}
