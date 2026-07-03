// contact.js
// Handles contact form with real email sending via Formspree

document.addEventListener("DOMContentLoaded", function () {

  const form       = document.getElementById("contact-form");
  const successMsg = document.getElementById("form-success");
  const submitBtn  = form.querySelector("button[type='submit']");

  if (!form) return;

  form.addEventListener("submit", async function (e) {
    // Prevent default form submission (we handle it ourselves)
    e.preventDefault();

    // ── Validate all fields are filled ──────────────────────
    const name    = document.getElementById("name").value.trim();
    const email   = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {
      alert("Please fill in all fields before sending.");
      return;
    }

    // ── Show loading state on button ─────────────────────────
    submitBtn.textContent = "Sending...";
    submitBtn.disabled    = true;
    // Disabling the button prevents double-clicking while sending

    try {
      // ── Send form data to Formspree ───────────────────────
      // fetch() sends the form data to Formspree in the background
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        // FormData automatically collects all form field values
        headers: { "Accept": "application/json" }
      });

      if (response.ok) {
        // ── Success: hide form, show success message ─────────
        form.style.display       = "none";
        successMsg.style.display = "block";

        // Reset form after 6 seconds and show it again
        setTimeout(function () {
          form.reset();
          form.style.display       = "block";
          successMsg.style.display = "none";
          submitBtn.textContent    = "Send Message";
          submitBtn.disabled       = false;
        }, 6000);

      } else {
        // ── Formspree returned an error ──────────────────────
        const data = await response.json();
        if (data.errors) {
          alert("Error: " + data.errors.map(e => e.message).join(", "));
        } else {
          alert("Something went wrong. Please try again.");
        }
        // Re-enable the button so user can try again
        submitBtn.textContent = "Send Message";
        submitBtn.disabled    = false;
      }

    } catch (error) {
      // ── Network error ────────────────────────────────────
      alert("Network error. Please check your connection and try again.");
      submitBtn.textContent = "Send Message";
      submitBtn.disabled    = false;
    }

  });

});