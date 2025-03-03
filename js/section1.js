// Lấy tất cả các phần tử cần thêm hiệu ứng 'in-view'
const elements = document.querySelectorAll('.background-container, .foreground-image, .content, .features');
const courseCards = document.querySelectorAll('.course-card'); // Lấy tất cả các card
const lampIcon = document.querySelector('.lamp-icon'); // Lấy biểu tượng lamp
const arrowIcon = document.querySelector('.arrow-icon'); // Lấy biểu tượng arrow

// Hàm kiểm tra khi cuộn trang
function checkVisibility() {
  elements.forEach((element) => {
    if (!element) return;

    const rect = element.getBoundingClientRect();
    if (rect.top <= window.innerHeight + 100 && rect.bottom >= 0) {
      element.classList.add('in-view');
    } else {
      element.classList.remove('in-view');
    }
  });

  // Kiểm tra và thêm hiệu ứng cho từng card
  courseCards.forEach((card, index) => {
    const rect = card.getBoundingClientRect();
    if (rect.top <= window.innerHeight + 100 && rect.bottom >= 0) {
      card.classList.add('in-view');
      card.style.transitionDelay = `${index * 0.5}s`; // Delay 0.5s cho mỗi card
    } else {
      card.classList.remove('in-view'); // Loại bỏ lớp in-view khi không còn trong viewport
      card.style.transitionDelay = '0s'; // Đặt lại độ trễ khi không còn trong viewport
    }
  });

  // Kiểm tra sự xuất hiện của lamp-icon và arrow-icon
  [lampIcon, arrowIcon].forEach(icon => {
    const rect = icon.getBoundingClientRect();
    if (rect.top <= window.innerHeight + 100 && rect.bottom >= 0) {
      icon.classList.add('in-view');
    } else {
      icon.classList.remove('in-view');
    }
  });
}

// Gọi hàm kiểm tra mỗi khi cuộn trang
window.addEventListener('scroll', checkVisibility);

// Kiểm tra ngay khi tải trang để đảm bảo phần tử hiển thị nếu nó có sẵn trong viewport
window.addEventListener('load', checkVisibility);
