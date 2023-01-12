const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phonenumber = document.getElementById("phonenumber");
const address = document.getElementById("address");
const comment = document.getElementById("comment");
const submitbtn = document.getElementById("submit");
const usernameErrorMessage = document.getElementById("username_message");
const emailErrorMessage = document.getElementById("email_message");
const mobileNumberErrorMessage = document.getElementById(
  "mobile_number_message"
);
const addressErrorMessage = document.getElementById("address_message");
const commentErrorMessage = document.getElementById("comment_message");

username.addEventListener("input", (form) => {
  let usernameInputValue = username.value;
  if (
    !(
      usernameInputValue.charCodeAt(0) >= 65 &&
      usernameInputValue.charCodeAt(0) <= 90
    )
  ) {
    usernameErrorMessage.innerText = "Username must start with capital letter";
    document.querySelector(".form-control").classList.add("error");
  } else if (usernameInputValue.length < 3) {
    usernameErrorMessage.innerText = "Username must be of atleast 3 characters";
    document.querySelector(".form-control").classList.add("error");
  } else {
    usernameErrorMessage.innerText = "";
    document.querySelector(".form-control").classList.remove("error");
    document.querySelector(".form-control").classList.add("success");
  }
});

 
email.addEventListener("input", () => {
  if (
    !email.value.startsWith(" ") &&
    email.value.includes("@") &&
    email.value.includes(".")
  ) {
    document.querySelectorAll(".form-control")[1].classList.add("success");
  } else {
    document.querySelectorAll(".form-control")[1].classList.remove("success");
  }
});

phonenumber.addEventListener("input", () => {
  if (phonenumber.value.includes(".")) {
    
    document.querySelectorAll(".form-control")[2].classList.add("error");
    mobileNumberErrorMessage.innerText =
      "Mobile number must not contain decimal";
  } else if (phonenumber.value.length != 10) {
    document.querySelectorAll(".form-control")[2].classList.add("error");
    mobileNumberErrorMessage.innerText = "Mobile number must be 10 digits";
  } else {
    mobileNumberErrorMessage.innerText = "";
    document.querySelectorAll(".form-control")[2].classList.remove("error");
    document.querySelectorAll(".form-control")[2].classList.add("success");
  }
});

address.addEventListener("input", () => {
  if (address.value.length > 3) {
    document.querySelectorAll(".form-control")[3].classList.add("success");
  } else {
    document.querySelectorAll(".form-control")[3].classList.remove("success");
  }

  if (
    (username.value.length &&
      email.value.length &&
      phonenumber.value.length &&
      address.value.length) > 0
  ) {
    submitbtn.removeAttribute("disabled");
    document.getElementsByClassName("btn")[0].style.cursor = "pointer";
    document.getElementsByClassName("btn")[0].style.backgroundColor = "green";
  } else {
    submitbtn.disabled = true;
    document.getElementsByClassName("btn")[0].style.cursor = "not-allowed";
    document.getElementsByClassName("btn")[0].style.backgroundColor = "gray";
  }
});

comment.addEventListener("input", () => {
  if (comment.value.length > 2) {
    document.querySelectorAll(".form-control")[4].classList.add("success");
  } else {
    document.querySelectorAll(".form-control")[4].classList.remove("success");
  }
});

submitbtn.addEventListener("click", () => {
  alert("Thank you for contact to us.");
});

