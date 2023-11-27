const form = document.querySelector("#form");
const input = document.querySelector("#email");
const button = document.querySelector("#button");

let inputValue = input.value;
const errorMessage = document.createElement("span");
errorMessage.classList.add("error-message");
errorMessage.textContent = "Please provide a valid email address";

function isValidEmail(email) {
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

input.addEventListener("input", () => {
  inputValue = input.value;
});

function submitForm(e) {
  e.preventDefault();

  if (!isValidEmail(inputValue)) {
    form.classList.add("error");
    if (form.classList.contains("error")) {
      input.insertAdjacentElement("afterend", errorMessage);
    }
  } else {
    form.classList.remove("error");
    if(errorMessage){
      errorMessage.remove();
    }
    alert("Successfully subscribed. Stay tuned for the notification!");
  }
}

form.addEventListener("submit", submitForm);
