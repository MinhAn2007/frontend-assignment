import LogoMIT from "/mit-logo.svg";
import "./style.css";

const NavigationBar = () => `
    <div class="logo">
        <img src="${LogoMIT}" alt="Vite logo" />
    </div>
    <button class="mobile-menu-btn">☰</button>
    <div class="nav-links-container">
        <ul class="nav-links">
            <li><a href="#Featured">Featured</a></li>
            <li><a href="#Topics">Topics</a></li>
            <li><a href="#Newsletters">Newsletters</a></li>
            <li><a href="#Events">Events</a></li>
            <li><a href="#Audio">Audio</a></li>
        </ul>
        <div class="auth-buttons">
            <button class="sign-in">SIGN IN</button>
            <button class="subscribe">SUBSCRIBE</button>
        </div>
    </div>
`;

document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const navLinksContainer = document.querySelector(".nav-links-container");

  mobileMenuBtn.addEventListener("click", () => {
    navLinksContainer.classList.toggle("active");
    mobileMenuBtn.textContent = navLinksContainer.classList.contains("active")
      ? "✕"
      : "☰";

    if (navLinksContainer.classList.contains("active")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });
});

export default NavigationBar;
