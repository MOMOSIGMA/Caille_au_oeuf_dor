function showPopup() {
    document.getElementById('order-popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('order-popup').style.display = 'none';
}

// Afficher le pop-up après 5 secondes
setTimeout(showPopup, 5000);