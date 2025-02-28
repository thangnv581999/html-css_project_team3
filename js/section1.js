// Lấy tất cả các phần tử cần thêm hiệu ứng 'in-view'
const elements = document.querySelectorAll('.background-container, .foreground-image, .content, .features');

// Hàm kiểm tra khi cuộn trang
function checkVisibility() {
  elements.forEach((element, index) => {
    // Kiểm tra nếu element tồn tại
    if (!element) return;

    // Lấy thông tin về vị trí của phần tử
    const rect = element.getBoundingClientRect();

    // Thêm buffer để tránh bị mất khi gần hết vùng nhìn thấy
    if (rect.top <= window.innerHeight + 100 && rect.bottom >= 0) {
      // Thêm lớp 'in-view' để kích hoạt hiệu ứng
      element.classList.add('in-view');
      // Thêm thời gian delay khác nhau cho mỗi phần tử
      element.style.transitionDelay = `${index * 0.3}s`; // Delay 0s cho phần tử đầu tiên, 0.3s cho phần tử thứ hai, v.v.
    } else {
      // Loại bỏ lớp 'in-view' khi phần tử không còn trong vùng nhìn thấy
      element.classList.remove('in-view');
    }
  });
}

// Gọi hàm kiểm tra mỗi khi cuộn trang
window.addEventListener('scroll', checkVisibility);

// Kiểm tra ngay khi tải trang để đảm bảo phần tử hiển thị nếu nó có sẵn trong viewport
window.addEventListener('load', checkVisibility);
