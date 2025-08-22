// Affiche le pop-up après 5 secondes
setTimeout(showPopup, 5000);

// Fonction pour afficher le pop-up
function showPopup() {
    document.getElementById('order-popup').style.display = 'flex';
}

// Fonction pour fermer le pop-up
function closePopup() {
    document.getElementById('order-popup').style.display = 'none';
}

// Navigation fluide vers les sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});