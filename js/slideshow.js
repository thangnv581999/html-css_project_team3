let currentIndex = 0;

function moveSlide(direction) {
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;
  currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
  document.querySelector(".slideshow-wrapper").style.transform = `translateX(${
    -currentIndex * 100
  }%)`;
}
