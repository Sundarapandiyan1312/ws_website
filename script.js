// GLOBAL WEBSITE SEARCH ENGINE
document.addEventListener("DOMContentLoaded", function () {

  const searchInput = document.getElementById("globalSearchInput");
  if (!searchInput) return;

  // All searchable card types across the whole website
  const searchableCards = document.querySelectorAll(`
    .rf-card,
    .product-card,
    .event-card,
    .partner-box,
    .application-card,
    .time_product-card,
    .value-card,
    .team-card,
    .customer-logo
    .
  `);

  searchInput.addEventListener("input", function () {
    const query = this.value.toLowerCase().trim();

    searchableCards.forEach(card => {
      const text = card.innerText.toLowerCase();
      card.style.display = text.includes(query) ? "" : "none";
    });
  });

});


// MOBILE NAVBAR TOGGLE
const toggleBtn = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show-menu");
  });
}


// Mobile menu toggle (works for all pages)
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("show");
    });
  }
});

// Wait until page loads
document.addEventListener("DOMContentLoaded", function () {

  // ===== MOBILE MENU TOGGLE =====
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("show");
    });
  }

  // ===== GLOBAL SEARCH =====
  const searchInput = document.getElementById("globalSearchInput");
  if (!searchInput) return;

  const cards = document.querySelectorAll(`
    .rf-card,
    .product-card,
    .event-card,
    .partners-box,
    .application-card,
    .time_product-card,
    .value-card,
    .team-card,
    .customer-logo
  `);

  searchInput.addEventListener("input", function () {
    const query = this.value.toLowerCase().trim();

    cards.forEach(card => {
      const text = card.innerText.toLowerCase();
      card.style.display = text.includes(query) ? "" : "none";
    });
  });

});
