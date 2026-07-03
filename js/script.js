// script.js
// Handles: hamburger menu + active nav link highlighting

document.addEventListener("DOMContentLoaded", function () {

  // ── Hamburger menu toggle ──────────────────────────────────
  const hamburger = document.getElementById("hamburger-btn");
  const navLinks  = document.getElementById("nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", function () {
      navLinks.classList.toggle("open");
    });
  }

  // ── Active nav link ────────────────────────────────────────
  // Highlights the nav link that matches the current page
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const links = document.querySelectorAll(".nav-links a");

  links.forEach(function (link) {
    // Get just the filename from the link's href
    const linkPage = link.getAttribute("href").split("/").pop();
    if (linkPage === currentPage) {
      link.classList.add("active");
      // Adds the active class which gives it a purple background highlight
    }
  });

});