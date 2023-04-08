const modalForm = document.getElementById("modal");
const registration = document.getElementById("registration");
const close = document.getElementById("close");
const showpassword = document.getElementById("showpassword");
const password = document.getElementById("password");
const email = document.getElementById("email");
const passwordError = document.getElementById("password-error");
const emailError = document.getElementById("email-error");
const formElement = document.getElementById("form-contact");
var isFormValid = false;
var isModalShown = false;

function validationCheck(event) {
  const isValid = event.target.validity.valid;
  if (event.target === password) {
    if (isValid) password.setCustomValidity("");
    else
      password.setCustomValidity(
        `Пароль содержит меньше ${password.minLength} символов`
      );
    passwordError.textContent = password.validationMessage;
  } else if (event.target === email) {
    if (isValid) email.setCustomValidity("");
    else email.setCustomValidity(`Некорректная почта`);
    emailError.textContent = email.validationMessage;
  }
  isFormValid = password.validity.valid && email.validity.valid;
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

registration.onclick = changeModalVisibility;
close.onclick = changeModalVisibility;
modalForm.addEventListener("blur", validationCheck, true);
showpassword.onpointerdown = () => (password.type = "text");
showpassword.onpointerup = () => (password.type = "password");
addEventListener("pointerdown", (event) => {
  event.target !== modal && !modal.contains(event.target) && isModalShown
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
