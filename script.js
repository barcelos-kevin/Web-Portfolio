const navActions = document.querySelector(".nav-actions");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelectorAll(".nav-links a");
menuToggle?.addEventListener("click", () => {
  navActions?.classList.toggle("open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetId = link.getAttribute("href");
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      navActions?.classList.remove("open");
    }
  });
});
