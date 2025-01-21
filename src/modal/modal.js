
import "./style.css";

const WelcomeModal = () => `
    <div id="welcomeModal" class="modal">
        <div class="modal-backdrop"></div>
        <div class="modal-content">
            <span class="close-button">&times;</span>
            <h2>Welcome!</h2>
            <button class="get-started-btn">Get Started</button>
        </div>
    </div>
`;

document.body.insertAdjacentHTML("afterbegin", WelcomeModal());

const modal = document.getElementById("welcomeModal");
const closeButton = document.querySelector(".close-button");
const backdrop = document.querySelector(".modal-backdrop");
const getStartedBtn = document.querySelector(".get-started-btn");

window.addEventListener("load", () => {
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
});

function closeModal() {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

closeButton.addEventListener("click", closeModal);
backdrop.addEventListener("click", closeModal);
getStartedBtn.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});

export default WelcomeModal;
