// --- LOGIC CHO CUỘN MƯỢT (SMOOTH SCROLL) ---
// Đảm bảo việc nhấn vào các mục menu cuộn mượt đến section đó
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Ngăn chặn hành vi nhảy trang mặc định
        e.preventDefault();

        // Nếu menu mobile đang mở, đóng nó trước
        if (window.innerWidth <= 992) {
            closeMenu();
        }

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Cuộn mượt đến mục đích
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// --- LOGIC CHO MOBILE HAMBURGER MENU ---
function toggleMenu() {
    const menu = document.getElementById("mobile-menu");
    if (menu.style.width === "100%") {
        menu.style.width = "0"; // Đóng menu
    } else {
        menu.style.width = "100%"; // Mở menu
    }
}

function closeMenu() {
    document.getElementById("mobile-menu").style.width = "0";
}


// --- LOGIC CHO ẨN/HIỆN CHI TIẾT (SEE DETAILS) ---
function toggleDetails(id) {
    const detailsDiv = document.getElementById(id);
    const button = event.currentTarget; // Lấy nút đã click

    // Kiểm tra trạng thái hiện tại của nội dung
    if (detailsDiv.style.display === 'none' || detailsDiv.style.display === '') {
        // Nếu đang ẩn (none) hoặc chưa thiết lập style, thì hiện ra
        detailsDiv.style.display = 'block';
        button.textContent = 'Hide Details'; // Đổi chữ trên nút
    } else {
        // Nếu đang hiện, thì ẩn đi
        detailsDiv.style.display = 'none';
        button.textContent = 'See Details'; // Đổi chữ trên nút
    }
}