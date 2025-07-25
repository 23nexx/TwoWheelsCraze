const steps = document.querySelectorAll(".form-step");
let currentStep = 0;

function showStep(index) {
  steps.forEach((step, i) => {
    step.classList.toggle("active", i === index);
  });
}

function nextStep() {
  if (currentStep < steps.length - 1) {
    currentStep++;
    showStep(currentStep);
  }
}

function prevStep() {
  if (currentStep > 0) {
    currentStep--;
    showStep(currentStep);
  }
}

document.getElementById("signup-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Account created successfully! (simulated)");
  // Aqui podes fazer submit com AJAX, fetch, ou redirecionar
});
