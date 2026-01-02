const festivals = [
  "Pure By Faith",
  "Ganpati Special Kapoor",
  "Diwali Puja Essentials",
  "Daily Puja Pure Kapoor",
  "Trusted by Temples"
];

let i = 0;
setInterval(() => {
  document.getElementById("festivalText").innerText = festivals[i];
  i = (i + 1) % festivals.length;
}, 2500);

function orderNow(product) {
  const phone = "918767231315; // apna number
  const msg = `Order for ${product}`;
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, "_blank");
}
