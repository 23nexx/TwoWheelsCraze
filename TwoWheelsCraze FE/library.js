function nextImage(button) {
  const galleryItem = button.parentElement;
  const images = galleryItem.querySelectorAll("img");
  let currentIndex = Array.from(images).findIndex(
    (img) => !img.style.display || img.style.display !== "none"
  );
  images[currentIndex].style.display = "none";
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].style.display = "block";
}

function prevImage(button) {
  const galleryItem = button.parentElement;
  const images = galleryItem.querySelectorAll("img");
  let currentIndex = Array.from(images).findIndex(
    (img) => !img.style.display || img.style.display !== "none"
  );
  images[currentIndex].style.display = "none";
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  images[currentIndex].style.display = "block";
}

document.addEventListener("DOMContentLoaded", () => {
  const galleryItems = document.querySelectorAll(".gallery-item");
  galleryItems.forEach((item) => {
    const images = item.querySelectorAll("img");
    if (images.length > 0) {
      images.forEach((img) => (img.style.display = "none")); // Oculta todas as imagens
      images[0].style.display = "block"; // Torna a primeira imagem visível
    }
  });
});

function nextImage(button) {
  const galleryItem = button.parentElement;
  const images = galleryItem.querySelectorAll("img");
  let currentIndex = Array.from(images).findIndex(
    (img) => img.style.display === "block"
  );
  images[currentIndex].style.display = "none";
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].style.display = "block";
}

function prevImage(button) {
  const galleryItem = button.parentElement;
  const images = galleryItem.querySelectorAll("img");
  let currentIndex = Array.from(images).findIndex(
    (img) => img.style.display === "block"
  );
  images[currentIndex].style.display = "none";
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  images[currentIndex].style.display = "block";
}
