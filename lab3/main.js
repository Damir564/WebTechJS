var modalForm = document.getElementById("modal");
var registration = document.getElementById("registration");
var close = document.getElementById("close");
var showpassword = document.getElementById("showpassword");
var password = document.getElementById("password");
var email = document.getElementById("email");
var passwordError = document.getElementById("password-error");
var emailError = document.getElementById("email-error");
const formElement = document.getElementById("form-contact");
var isFormValid = false;
var isModalShown = false;
// password.setCustomValidity(`Пароль содержит меньше ${password.minLength} символов.\t`)
// email.setCustomValidity(`Некорректная почта`)

function validationCheck(event) {
  const isValid = event.target.validity.valid;
  if (event.target === password) {
    if (isValid) password.setCustomValidity("");
    else
      password.setCustomValidity(
        `Пароль содержит меньше ${password.minLength} символов.\t`
      );
    passwordError.textContent = password.validationMessage;
  } else if (event.target === email) {
    if (isValid) email.setCustomValidity("");
    else email.setCustomValidity(`Некорректная почта`);
    emailError.textContent = email.validationMessage;
  }
  isFormValid = password.validity.valid * email.validity.valid;
  password.setCustomValidity("");
  email.setCustomValidity("");
}

function changeModalVisibility() {
  if (isModalShown) {
    registration.style.display = "block";
    modal.style.display = "none";
  } else {
    modal.style.display = "block";
    registration.style.display = "none";
  }
  isModalShown = !isModalShown;
}

registration.onclick = () => changeModalVisibility();
close.onclick = () => changeModalVisibility(); // {registration.style.display = 'block', modal.style.display = "none"}
modalForm.addEventListener("blur", (event) => validationCheck(event), true);
// password.addEventListener('blur', (password) => validationCheck(password))
// email.addEventListener('blur', (email) => validationCheck(email))
showpassword.onpointerdown = () => (password.type = "text");
showpassword.onpointerup = () => (password.type = "password");
addEventListener("pointerdown", (event) => {
  event.target !== modal &&
  !modal.contains(event.target) &&
  registration.style.display === "none"
    ? changeModalVisibility()
    : null;
});

formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  if (isFormValid) {
    const formData = new FormData(formElement);
    const mail = formData.get("email");
    const pass = formData.get("password");
    console.log(mail, pass);
  }
});
