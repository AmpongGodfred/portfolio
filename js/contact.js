// contact.js
// Handles contact form submission with a success message

document.addEventListener("DOMContentLoaded", function () {

  const form       = document.getElementById("contact-form");
  const successMsg = document.getElementById("form-success");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    // Prevent the form from actually submitting to a server
    e.preventDefault();

    // Simple validation — check all fields are filled
    const name    = document.getElementById("name").value.trim();
    const email   = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {
      alert("Please fill in all fields before sending.");
      return;
    }

    // Hide the form and show the success message
    form.style.display    = "none";
    successMsg.style.display = "block";

    // Optional: reset form after 5 seconds and show it again
    setTimeout(function () {
      form.reset();
      form.style.display       = "block";
      successMsg.style.display = "none";
    }, 5000);
    // 5000ms = 5 seconds

  });

});