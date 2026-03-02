// Button click message
function sayHello() {
    alert("Hello! Thanks for visiting my portfolio 🚀");
}

// Scroll animation for cards
const cards = document.querySelectorAll(".card");

function showCardsOnScroll() {
    const triggerPoint = window.innerHeight - 100;

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < triggerPoint) {
            card.classList.add("show");
        }
    });
}

// Run on scroll and load
window.addEventListener("scroll", showCardsOnScroll);
window.addEventListener("load", showCardsOnScroll);
