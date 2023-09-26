document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");
  const errorMessage = document.getElementById("error-message");
  const signUpBtn = document.querySelector(".btn-signup");
  const signUpContainer = document.querySelector(".signup-container");
  const logInContainer = document.querySelector(".login-container");
  const signInBtn = document.querySelector(".btnSignin");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Replace these values with your actual login logic
    const username = "user2023";
    const password = "user2023";

    const enteredUsername = loginForm.username.value;
    const enteredPassword = loginForm.password.value;

    if (enteredUsername === username && enteredPassword === password) {
      // Successful login
      window.location.href = "welcome.html"; // Redirect to a welcome page
    } else {
      errorMessage.textContent =
        "Invalid username or password. Please try again.";
    }
  });

  signUpBtn.addEventListener("mousedown", function () {
    signUpContainer.classList.remove("hidden");
    logInContainer.classList.add("hidden");
  });
  signInBtn.addEventListener("click", function () {
    logInContainer.classList.remove("hidden");
    signUpContainer.classList.add("hidden");
  });
});
