// Lấy phần tử background-container
const backgroundContainer = document.querySelector('.background-container');

// Hàm kiểm tra khi cuộn trang
function checkVisibility() {
  // Kiểm tra nếu backgroundContainer tồn tại
  if (!backgroundContainer) return;

  // Lấy thông tin về vị trí của background-container
  const rect = backgroundContainer.getBoundingClientRect();

  // Kiểm tra nếu phần tử nằm trong vùng nhìn thấy của trình duyệt
  // Thêm buffer để tránh bị mất khi gần hết vùng nhìn thấy
  if (rect.top <= window.innerHeight + 100 && rect.bottom >= 0) {
    // Thêm lớp 'in-view' để kích hoạt hiệu ứng
    backgroundContainer.classList.add('in-view');
  } else {
    // Loại bỏ lớp 'in-view' khi phần tử không còn trong vùng nhìn thấy
    backgroundContainer.classList.remove('in-view');
  }
}

// Gọi hàm kiểm tra mỗi khi cuộn trang
window.addEventListener('scroll', checkVisibility);

// Kiểm tra ngay khi tải trang để đảm bảo phần tử hiển thị nếu nó có sẵn trong viewport
window.addEventListener('load', checkVisibility);
