// JavaScript code
// Function to show error messages
function showError(inputField, message) {
  var formGroup = inputField.parentElement;
  var errorDiv = formGroup.querySelector(".error-message");

  if (!errorDiv) {
    errorDiv = document.createElement("div");
    errorDiv.className = "error-message";
    formGroup.appendChild(errorDiv);
  }

  errorDiv.innerText = message;
}

// Function to validate the name field
function validateName(name) {
  return name.length >= 5;
}

// Function to validate the email field
function validateEmail(email) {
  var emailPattern = /\S+@\S+\.\S+/;
  return emailPattern.test(email);
}

// Function to validate the phone number field (including multiple phone numbers)
function validatePhone(phone) {
  // Split the phone numbers using commas as separators
  var phoneNumbers = phone.split(",");

  // Loop through each phone number and validate them individually
  for (var i = 0; i < phoneNumbers.length; i++) {
    var phoneNumber = phoneNumbers[i].trim();

    if (phoneNumber === "123456789" || !/^\d{10}$/.test(phoneNumber)) {
      return false;
    }
  }

  return true; // All phone numbers are valid
}

// Function to validate the password field
function validatePassword(password, name) {
  // Password cannot be 'password'
  if (password.toLowerCase() === 'password') {
    return false;
  }

  // Password cannot be the name of the user
  if (password.toLowerCase() === name.toLowerCase()) {
    return false;
  }

  // Password should be at least 8 characters long
  return password.length >= 8;
}

// Function to validate the confirm password field
function validateConfirmPassword(password, confirmPassword) {
  return password === confirmPassword;
  if (password !== confirmPassword) {
    showError(confirmPasswordInput, "Passwords do not match");
  } else {
    showSuccess(confirmPasswordInput);
  }
}

// Function to handle form submission
function onSubmitForm(event) {
  event.preventDefault(); // Prevent form submission if validation fails

  // Remove previous error messages
  var errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach(function (errorMessage) {
    errorMessage.remove();
  });

  // Get form inputs
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var dateOfBirth = document.getElementById("dateOfBirth").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;

  // Validate form inputs
  if (!validateName(name)) {
    showError(document.getElementById("name"), "Name should be at least 5 characters long.");
    return;
  }

  if (!validateEmail(email)) {
    showError(document.getElementById("email"), "Please enter a valid email address with @ character.");
    return;
  }

  if (!validatePhone(phone)) {
    showError(document.getElementById("phone"), "Please enter valid 10-digit phone numbers separated by commas.");
    return;
  }

  if (!validatePassword(password, name)) {
    showError(document.getElementById("password"), "Password cannot be 'password', your name, or less than 8 characters long.");
    return;
  }

  if (!validateConfirmPassword(password, confirmPassword)) {
    showError(document.getElementById("confirmPassword"), "Passwords do not match.");
    return;
  }

  // Form is valid, submit the form (you can add your submit logic here)
  alert("Form submitted successfully!");
}

// Function to toggle password visibility
function togglePasswordVisibility() {
  var passwordInput = document.getElementById("password");
  var passwordToggleIcon = document.querySelector("#password-toggle i");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    passwordToggleIcon.className = "fas fa-eye-slash"; // Eye with slash icon
  } else {
    passwordInput.type = "password";
    passwordToggleIcon.className = "fas fa-eye"; // Regular eye icon
  }
}



function toggleConfirmPasswordVisibility() {
  var confirmPasswordInput = document.getElementById("confirmPassword");
  var confirmPasswordToggleIcon = document.querySelector("#confirmPassword-toggle i");

  if (confirmPasswordInput.type === "password") {
    confirmPasswordInput.type = "text";
    confirmPasswordToggleIcon.classList.remove("fa-eye");
    confirmPasswordToggleIcon.classList.add("fa-eye-slash");
  } else {
    confirmPasswordInput.type = "password";
    confirmPasswordToggleIcon.classList.remove("fa-eye-slash");
    confirmPasswordToggleIcon.classList.add("fa-eye");
  }
  
  // Clear the error message when toggling visibility
  var confirmPasswordError = document.getElementById("confirmPassword-error");
  confirmPasswordError.innerText = "";
}




// Add event listeners after the page is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Add onSubmit event listener to the form
  var registrationForm = document.getElementById("registrationForm");
  registrationForm.addEventListener("submit", onSubmitForm);

  // Add onChange event listeners to form input fields (optional)
  var inputFields = document.querySelectorAll("input");
  for (var i = 0; i < inputFields.length; i++) {
    inputFields[i].addEventListener("change", onInputChange);
  }
});






