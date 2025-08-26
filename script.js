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

// Menu burger
const burgerBtn = document.getElementById('burger-btn');
const mainNav = document.getElementById('main-nav');
burgerBtn.addEventListener('click', () => {
    mainNav.classList.toggle('open');
});

// Ferme le menu au clic sur un lien
mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mainNav.classList.remove('open'));
});

// Ferme le menu si on clique en dehors
document.addEventListener('click', function(e) {
    if (
        mainNav.classList.contains('open') &&
        !mainNav.contains(e.target) &&
        e.target !== burgerBtn
    ) {
        mainNav.classList.remove('open');
    }
});

// Avis clients dynamiques
const avis = [
    { nom: "Fatou D.", note: 5, texte: "Des œufs délicieux et un service rapide. Je recommande à 100% !" },
    { nom: "Mamadou S.", note: 5, texte: "Depuis que je consomme ces œufs, je me sens en meilleure forme." },
    { nom: "Awa B.", note: 4, texte: "Très bon goût, livraison à l'heure. Merci !" },
    { nom: "Cheikh N.", note: 5, texte: "La chair de caille est tendre et savoureuse. Bravo !" }
];
const avisList = document.getElementById('avis-list');
if (avisList) {
    avis.forEach(a => {
        const card = document.createElement('div');
        card.className = 'avis-card';
        card.innerHTML = `
            <div class="avis-nom">${a.nom}</div>
            <div class="avis-note">${'★'.repeat(a.note)}${'☆'.repeat(5-a.note)}</div>
            <div class="avis-texte">${a.texte}</div>
        `;
        avisList.appendChild(card);
    });
}

// Affichage/masquage de la vidéo au scroll (une seule fois)
const videoContainer = document.getElementById('video-caille-container');
const video = document.getElementById('video-caille');

window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        if (videoContainer) videoContainer.style.display = 'none';
    } else {
        if (videoContainer) {
            videoContainer.style.display = 'flex';
            // Remet la vidéo au début et relance la lecture à chaque retour en haut
            if (video) {
                video.currentTime = 0;
                video.play();
            }
        }
    }
});

// Bouton remonter en haut
const scrollBtn = document.getElementById('scrollTopBtn');
if (scrollBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    });
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}