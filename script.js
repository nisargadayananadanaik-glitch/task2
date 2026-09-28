
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Mobile navigation
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  const isOpen = navLinks.classList.contains("active");
  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.textContent = "☰";
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Automatic copyright year
document.getElementById("year").textContent =
  new Date().getFullYear();

// WhatsApp enquiry form
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("customerName").value.trim();
  const phone = document.getElementById("customerPhone").value.trim();
  const message = document.getElementById("customerMessage").value.trim();

  if (!name || !phone || !message) {
    document.getElementById("formNote").textContent =
      "Please complete all fields.";
    return;
  }

  // Replace with the actual business WhatsApp number.
  const businessNumber = "919876543210";

  const whatsappMessage =
    `Hello Brew & Bite!\n\nName: ${name}\nPhone: ${phone}\nMessage: ${message}`;

  const whatsappURL =
    `https://wa.me/${businessNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  window.open(whatsappURL, "_blank", "noopener,noreferrer");

  document.getElementById("formNote").textContent =
    "Your enquiry is ready to send on WhatsApp.";

  contactForm.reset();
});