const heroForm = document.querySelector(".hero__form");
const emailInput = heroForm.querySelector("input[type=email]");
const emailErrorEl = heroForm.querySelector("#emailError");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validateEmail = () => {
    const emailInputValue = emailInput.value.trim();

    if (!emailRegex.test(emailInputValue)) {
        emailInput.setAttribute("aria-invalid", true);
        emailErrorEl.classList.remove("hidden");
    } else {
        emailInput.setAttribute("aria-invalid", false);
        emailErrorEl.classList.add("hidden");
    }
}

heroForm.addEventListener("submit", (e) => {
    e.preventDefault();
    validateEmail();
});