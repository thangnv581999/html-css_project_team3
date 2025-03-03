let currentIndex = 0;
let autoSlideInterval; // Variable to hold the interval ID

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    moveSlide(1); // Move to the next slide
  }, 3000); // Change slide every 3 seconds
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval); // Stop the automatic sliding
}

function moveSlide(direction) {
  stopAutoSlide(); // Stop auto sliding when user interacts
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;
  currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
  updateSlide();
  startAutoSlide(); // Restart auto sliding
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

// Call startAutoSlide when the page loads
startAutoSlide();








