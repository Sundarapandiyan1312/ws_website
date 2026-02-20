// ===============================
// GLOBAL PRODUCT SEARCH ENGINE
// ===============================

const globalSearchDatabase = [

  // -------- RF PRODUCTS --------
  { name: "RF Signal Generator", keywords: ["izt s1000", "s1010", "signal generator"], url: "rf-products.html#rf-s1000" },
  { name: "Satellite Link Emulator", keywords: ["c3040", "satellite emulator"], url: "rf-products.html#rf-c3040" },
  { name: "IZT R5060 Monitoring Receiver", keywords: ["r5060", "monitoring receiver"], url: "rf-products.html#rf-r5060" },
  { name: "K Band LNA", keywords: ["k band", "lna 18ghz"], url: "rf-products.html#rf-k-lna" },
  { name: "WR-10X Weather Radar", keywords: ["wr10x", "weather radar"], url: "rf-products.html#rf-wr10x" },

  // -------- TIME PRODUCTS --------
  { name: "Active Hydrogen Maser VCH-1003M", keywords: ["vch1003m", "hydrogen maser"], url: "time-products.html#time-vch1003m" },
  { name: "Passive Hydrogen Maser VCH-1008M", keywords: ["vch1008m", "maser passive"], url: "time-products.html#time-vch1008m" },
  { name: "Frequency Comparator VCH-315M", keywords: ["vch315m", "frequency comparator"], url: "time-products.html#time-vch315m" },
  { name: "Rubidium Oscillator VCH-311", keywords: ["vch311", "rubidium oscillator"], url: "time-products.html#time-vch311" },
  { name: "OCXO", keywords: ["oven oscillator"], url: "time-products.html#time-ocxo" },
  { name: "TCXO", keywords: ["temperature oscillator"], url: "time-products.html#time-tcxo" }

];

// ===============================
// SEARCH FUNCTION
// ===============================

document.addEventListener("DOMContentLoaded", function () {

  const searchInput = document.getElementById("globalSearchInput");
  if (!searchInput) return;

  searchInput.addEventListener("keypress", function (e) {

    if (e.key === "Enter") {

      e.preventDefault();
      const query = searchInput.value.toLowerCase().trim();

      if (!query) return;

      const result = globalSearchDatabase.find(product => {
  const fullText = product.name.toLowerCase() + " " + product.keywords.join(" ");
  return fullText.includes(query);
});

      if (result) {
        window.location.href = result.url;
      } else {
        alert("No matching product found.");
      }
    }

  });

});

// Highlight after page load
window.addEventListener("load", () => {
  const hash = window.location.hash;
  if (hash) {
    const element = document.querySelector(hash);
    if (element) {
      element.classList.add("highlight-product");
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menuToggle");
  const nav = document.querySelector(".nav-links");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
});