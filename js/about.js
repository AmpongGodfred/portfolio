// about.js
// Animates the skill bars when they scroll into view

document.addEventListener("DOMContentLoaded", function () {

  // Get all skill bar fill elements
  const skillBars = document.querySelectorAll(".skill-bar-fill");

  // IntersectionObserver watches when elements appear on screen
  // and triggers a callback when they do
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        // Element is visible — animate the bar to its target width
        const bar = entry.target;
        const targetWidth = bar.getAttribute("data-width");
        bar.style.width = targetWidth + "%";
        // Unobserve after animating so it doesn't re-trigger
        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.3 });
  // threshold: 0.3 means trigger when 30% of the element is visible

  // Observe each skill bar
  skillBars.forEach(function (bar) {
    observer.observe(bar);
  });

});