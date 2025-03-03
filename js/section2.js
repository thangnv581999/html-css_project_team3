// Function to handle scroll events
let lastScrollTop = 0;
const iconContainer = document.querySelector('.icon-container');
const icons = document.querySelectorAll('.lamp-icon, .arrow-icon');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        iconContainer.classList.add('hidden');
    } else {
        // Scrolling up
        iconContainer.classList.remove('hidden');
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});

// Hàm kiểm tra khi cuộn trang
function checkVisibility() {
    const rect = iconContainer.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setTimeout(() => {
            iconContainer.classList.add('in-view');
        }, 1000); // Delay 1 giây
    } else {
        iconContainer.classList.remove('in-view');
    }
}

// Gọi hàm kiểm tra mỗi khi cuộn trang
window.addEventListener('scroll', checkVisibility);

// Kiểm tra ngay khi tải trang để đảm bảo phần tử hiển thị nếu nó có sẵn trong viewport
window.addEventListener('load', checkVisibility);
