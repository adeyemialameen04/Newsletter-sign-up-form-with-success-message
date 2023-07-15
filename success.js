const emailText = document.querySelector("#email");

const urlParams = new URLSearchParams(window.location.search);
const email = urlParams.get("email");

emailText.textContent = email;