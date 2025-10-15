// --- LOGIC CHO CUỘN MƯỢT (SMOOTH SCROLL) ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Nếu menu mobile đang mở, đóng nó trước khi cuộn
        if (window.innerWidth <= 992) {
            closeMenu();
        }

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
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
    const button = event.currentTarget; 

    if (detailsDiv.style.display === 'none' || detailsDiv.style.display === '') {
        detailsDiv.style.display = 'block';
        button.textContent = 'Hide Details';
    } else {
        detailsDiv.style.display = 'none';
        button.textContent = 'See Details';
    }
}

// --- LOGIC CHO NÚT SCROLL TO TOP ---
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const scrollBtn = document.getElementById("scrollUpBtn");
    // Nếu cuộn xuống hơn 200px so với đầu trang, hiển thị nút
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
}