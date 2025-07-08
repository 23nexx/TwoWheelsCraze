function showPopup() {
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function showTab(tab) {
  // Hide both forms
  document.getElementById("login-form").classList.remove("active");
  document.getElementById("register-form").classList.remove("active");

  // Show the selected form
  if (tab === "login") {
    document.getElementById("login-form").classList.add("active");
    document
      .querySelectorAll(".tab-button")
      .forEach((button) => button.classList.remove("active"));
    document.querySelector(".tab-button:nth-child(1)").classList.add("active");
  } else {
    document.getElementById("register-form").classList.add("active");
    document
      .querySelectorAll(".tab-button")
      .forEach((button) => button.classList.remove("active"));
    document.querySelector(".tab-button:nth-child(2)").classList.add("active");
  }
}

window.addEventListener("scroll", function () {
  var loginButton = document.querySelector(".login-button");
  if (window.scrollY > 100) {
    // Ajuste o valor conforme necessário
    loginButton.classList.add("hidden");
  } else {
    loginButton.classList.remove("hidden");
  }
});

// Inicializa a funcionalidade de arrastar quando o popup é mostrado
function makePopupDraggable(popup) {
  let isDragging = false;
  let offsetX, offsetY;

  popup.addEventListener("mousedown", function (e) {
    if (e.target.classList.contains("close")) return; // Impede que o botão de fechar ative o arrasto

    isDragging = true;
    offsetX = e.clientX - popup.getBoundingClientRect().left;
    offsetY = e.clientY - popup.getBoundingClientRect().top;

    popup.style.cursor = "grabbing";
    popup.style.position = "absolute";
    popup.style.zIndex = 1000;
  });

  document.addEventListener("mousemove", function (e) {
    if (isDragging) {
      let newX = e.clientX - offsetX;
      let newY = e.clientY - offsetY;

      // Mantém o popup dentro da tela
      const maxX = window.innerWidth - popup.offsetWidth;
      const maxY = window.innerHeight - popup.offsetHeight;

      newX = Math.max(0, Math.min(maxX, newX));
      newY = Math.max(0, Math.min(maxY, newY));

      popup.style.left = `${newX}px`;
      popup.style.top = `${newY}px`;
    }
  });

  document.addEventListener("mouseup", function () {
    isDragging = false;
    popup.style.cursor = "move";
  });
}

// Make popup draggable
const popup = document.getElementById("popup");
makePopupDraggable(popup);
