const emailInput = document.querySelector("#email");
const submitEmailBtn = document.querySelector("#submitEmail");
let form = document.querySelector("#form");
const errorMessage = document.querySelector("#error-message");

const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w=)*(\.\w{2,3})+$/;

const validateEmail = () => {
  if (emailInput.value.match(mailFormat) || emailInput.value === "") {
    form.action = "Success.html";
    emailInput.style.backgroundColor = "hsl(5, 100%, 95%)";
    emailInput.style.borderColor = "hsl(4, 100%, 67%)";
    errorMessage.style.display = "block";
    return true;
  } else {
    form.action = "#";
    emailInput.classList.remove("invalidEmail");
    return false;
  }
};


submitEmailBtn.addEventListener("click", () => {
  validateEmail();
  // alert("kk");
});
