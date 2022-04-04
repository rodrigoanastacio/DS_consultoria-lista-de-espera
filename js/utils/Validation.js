const form = document.querySelector('[data-js="cForm"]');
const inputEmail = document.querySelector('[data-js="inputEmail"]');
const feedback = document.querySelector('[data-js="feedbackError"]');
const labelEmail = document.querySelector('[data-js="formLabel"]');

const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

inputEmail.addEventListener("blur", (e) => {
  console.log(e.target.value === "");

  if (e.target.value !== "") {
    labelEmail.classList.add("error");
    return;
  }

  labelEmail.classList.remove("error");
});

form.addEventListener("submit", (event) => {
  // event.preventDefault();

  const email = inputEmail.value;
  const isValidEmail = emailRegex.test(email);
  const submitBTN = document.querySelector('[data-js="btnSend"]');

  if (!isValidEmail) {
    // feedback.textContent = "Informe um e-mail válido";
    inputEmail.classList.add("u-hasError");
    labelEmail.classList.add("u-error");
    inputEmail.focus();
    return;
  }

  feedback.textContent = "";
  feedback.classList.remove();
  inputEmail.classList.remove("u-hasError");
  labelEmail.classList.remove("u-error");
  submitBTN.textContent = "Enviando...";
  // submitBTN.setAttribute("disabled", true);
  form.reset();

  // setTimeout(() => {
  //   window.location = "./obrigado/";
  // }, 2000);
});
