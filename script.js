// --- LOGIC CHO CUỘN MƯỢT (SMOOTH SCROLL) ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


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