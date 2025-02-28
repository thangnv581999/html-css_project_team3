let currentIndex = 0;

function moveSlide(direction) {
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;
  currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
  updateSlide();
}

function setSlide(index) {
  currentIndex = index;
  updateSlide();
}

function updateSlide() {
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;
  document.querySelector(".slideshow-wrapper").style.transform = `translateX(${
    -currentIndex * 100
  }%)`;

  // Cập nhật các chấm
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });
}

// Cập nhật số thứ tự slide hiện tại
document.getElementById("current-slide").textContent = currentIndex + 1;
document.getElementById("total-slides").textContent = totalSlides;








