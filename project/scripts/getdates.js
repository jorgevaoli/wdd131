/* Current date footer */
document.addEventListener('DOMContentLoaded', () => {
    const currentYear = document.querySelector("#currentyear");
    const lastModified = document.querySelector("#lastModified");

    const today = new Date();
    currentYear.innerHTML = today.getFullYear();
    lastModified.innerHTML = document.lastModified;

    /* Responsive code */
    const buttonMenu = document.querySelector("#menu");
    const navbar = document.querySelector(".navigation");

    if (buttonMenu && navbar) {
        buttonMenu.addEventListener("click", () => {
            navbar.classList.toggle("open");
            buttonMenu.classList.toggle("open");
        });
    }

    /* Form submission and review count handling */
    const reviewForm = document.getElementById('reviewForm');
    let reviewCount = parseInt(localStorage.getItem('reviewCount')) || 0;

    if (reviewForm) {
        reviewForm.addEventListener('submit', (event) => {
            event.preventDefault(); 

            reviewCount++;
            localStorage.setItem('reviewCount', reviewCount);

            window.location.href = 'message.html'; // Ensure this points to the correct page
        });
    }

    /* Review count display on message page */
    const reviewCountElement = document.getElementById('reviewCount');
    if (reviewCountElement) {
        reviewCountElement.textContent = reviewCount;
    }
});
