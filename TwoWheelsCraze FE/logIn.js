//       TO DO        //
/*	•	The login won’t actually log anyone in
	•	It won’t validate credentials
	•	It won’t save emails or users
	•	You won’t get errors if the password is wrong
	•	No authentication, no sessions, no memory
    */

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const error = document.getElementById("error");

  // Basic check: are fields filled?
  if (username === "" || password === "") {
    error.textContent = "Please enter both username and password.";
    error.style.display = "block";
    return;
  }

  // Optional: hardcoded fake credentials
  if (username !== "demoUser" || password !== "demoPass") {
    error.textContent = "Invalid credentials. Try demoUser / demoPass.";
    error.style.display = "block";
    return;
  }

  // Simulated successful login
  error.style.display = "none";
  alert("Login successful! Redirecting...");
  window.location.href = "dashboard.html"; // or any page you want
});
