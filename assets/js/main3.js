document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMsg = document.getElementById("formMsg");

  if (!name || !email || !message) {
    formMsg.textContent = "Please fill out all fields.";
    formMsg.style.color = "red";
    return;
  }

  // Simulate sending
  formMsg.textContent = "Sending...";
  formMsg.style.color = "#555";

  setTimeout(() => {
    formMsg.textContent = "Message sent! Thank you for contacting Olute FC.";
    formMsg.style.color = "green";

    // Optionally clear the form
    document.getElementById("contactForm").reset();
  }, 1500);
});
