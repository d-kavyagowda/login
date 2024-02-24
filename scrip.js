document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Get username and password
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Simple validation
    if (username === "admin" && password === "password") {
      // Successful login
      window.location.href = "dashboard.html"; // Redirect to dashboard page
    } else {
      // Display error message
      var errorMessage = document.getElementById("error-message");
      errorMessage.textContent = "Invalid username or password.";
      errorMessage.style.display = "block";
    }
  });
  