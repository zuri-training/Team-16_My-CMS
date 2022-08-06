const visibilitybtn = document.getElementById("visibilitybtn");
const confirmVisibilitybtn = document.getElementById("visibilitybt");
const form = document.getElementById("form");
const emailEl = document.getElementById("email");
const firstNameEl = document.getElementById("first-name");
const lastNameEl = document.getElementById("last-name");
const passwordEl = document.getElementById("password");
const confirmPasswordEl = document.getElementById("confirm_password");
const checkBoxE1 = document.querySelector(".checkbox_box");
const checkBoxInput = document.getElementById("myCheckboxId");
const button = document.querySelector("button");
const signupText = document.querySelector(".sign-up");

form.addEventListener("submit", (e) => {
  // prevent the form from submitting
  e.preventDefault();

  // validate forms
  let isFirstnameValid = checkFirstname(),
    isLastnameValid = checkLastname(),
    isEmailValid = checkEmail(),
    isPasswordValid = checkPassword(),
    isConfirmPasswordValid = checkConfirmPassword(),
    isBoxChecked = checkBox();

  let isFormValid =
    isFirstnameValid &&
    isLastnameValid &&
    isEmailValid &&
    isPasswordValid &&
    isConfirmPasswordValid &&
    isBoxChecked;
  // submit to the server if the form is valid
  if (isFormValid) {
  }
});

// the following isRequired() function returns true if the input argument is empty
const isRequired = (value) => (value === "" ? false : true);

// the following isBetween() function returns false if the length argument is not between the min and max argument
const isBetween = (length, min, max) =>
  length < min || length > max ? false : true;

// to check if the email is valid, you'll use a regular expression
const isEmailValid = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

// to check if a password is strong, which match a specified pattern, you'll also use a regular expression
const isPasswordSecure = (password) => {
  const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{10,})");
  return re.test(password);
};

// the following showError() function highlights the border of the input field and displays an error message if the input field is invalid
const showError = (input, message) => {
  // get the form-field element
  const formField = input.parentElement;
  // add the error class
  formField.classList.remove("text-dark");
  // formField.classList.add("text-danger");
  const inputEl = formField.querySelector("input");
  inputEl.classList.add("border-danger");

  // show the error msg
  const error = formField.querySelector("small");
  error.textContent = message;
};

// the function that shows the success indicator is similar to the showError() function
const showSuccess = (input, message) => {
  // get the form-field element
  const formField = input.parentElement;
  // remove the error class
  formField.classList.remove("text-danger");
  formField.classList.add("text-dark");
  // show the error msg
  const error = formField.querySelector("small");
  error.textContent = "";
};

// VALIDATE THE FIRSTNAME FIELD
const checkFirstname = () => {
  let valid = false;
  // const min = 3,
  //   max = 25;
  const firstname = firstNameEl.value.trim();

  if (!isRequired(firstname)) {
    showError(firstNameEl, "First name cannot be blank.");
  } else {
    showSuccess(firstNameEl);
    valid = true;
  }
  return valid;
};

// VALIDATE THE SECONDNAME FIELD
const checkLastname = () => {
  let valid = false;
  const min = 3,
    max = 25;
  const lastname = lastNameEl.value.trim();

  if (!isRequired(lastname)) {
    showError(lastNameEl, "Last name cannot be blank.");
  } else {
    showSuccess(lastNameEl);
    valid = true;
  }
  return valid;
};

// VALIDATE THE EMAIL FIELD
const checkEmail = () => {
  let valid = false;
  const email = emailEl.value.trim();

  if (!isRequired(email)) {
    showError(emailEl, "Email cannot be blank.");
  } else if (!isEmailValid(email)) {
    showError(emailEl, "Email is not valid");
  } else {
    showSuccess(emailEl);
    valid = true;
  }
  return valid;
};

// VALIDATE THE PASSWORD FIELD
const checkPassword = () => {
  let valid = false;
  const password = passwordEl.value.trim();

  if (!isRequired(password)) {
    showError(passwordEl, "Password cannot be blank.");
  } else if (!isPasswordSecure(password)) {
    showError(passwordEl, "Password must follow the criteria below");
  } else {
    showSuccess(passwordEl);
    valid = true;
  }
  return valid;
};

// VALIDATE THE CONFIRM PASSWORD FIELD
const checkConfirmPassword = () => {
  let valid = false;
  // const inputE2 = formField.querySelector(".pws");
  // check confirm password
  const confirmPassword = confirmPasswordEl.value.trim();
  const password = passwordEl.value.trim();

  if (!isRequired(confirmPassword)) {
    showError(confirmPasswordEl, "Please enter the password again");
  } else if (password !== confirmPassword) {
    showError(confirmPasswordEl, "Confirm password does not match");
  } else {
    showSuccess(confirmPasswordEl);
    passwordEl.classList.add("border-success");
    confirmPasswordEl.classList.add("border-success");
    valid = true;
  }
  return valid;
};
// PASSWORD EYE TOGGLE ICONS
visibilitybtn.addEventListener("click", toggleVisibility);
confirmVisibilitybtn.addEventListener("click", confirmToggleVisibility);

function toggleVisibility() {
  const passwordinput = document.getElementById("password");
  if (passwordinput.type === "password") {
    passwordinput.type = "text";
  } else {
    passwordinput.type = "password";
  }
  //change icon
  visibilitybtn.classList.toggle("bi-eye");
}
function confirmToggleVisibility() {
  const confirmpasswordinput = document.getElementById("confirm_password");
  if (confirmpasswordinput.type === "password") {
    confirmpasswordinput.type = "text";
  } else {
    confirmpasswordinput.type = "password";
  }
  //change icon
  confirmVisibilitybtn.classList.toggle("bi-eye");
}

// VALIDATE THE CHECKBOX
const checkBox = () => {
  let valid = false;

  if (checkBoxInput.checked == false) {
    // showError(checkboxBox, signupText.textContent = 'You must agree to the terms first')
    checkBoxE1.classList.add("border-danger");
    signupText.textContent = "Please agree to the privacy & terms of use ";
    signupText.style.color = "red";
  } else {
    checkBoxE1.classList.remove("border-danger");
    signupText.innerHTML =
      "Signing up for an account means you agree to the Privacy Policy <br/> and Terms of Service.";
    signupText.style.color = "#9e8d8d";
    valid = true;
  }
  return valid;
};
