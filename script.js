function showPopup() {
    document.getElementById('order-popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('order-popup').style.display = 'none';
}

// Afficher le pop-up après 5 secondes
setTimeout(showPopup, 5000);
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Gestion du pop-up
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        document.getElementById('order-popup').style.display = 'flex';
    }, 5000); // Affiche après 5 secondes

    // Rendre le pop-up draggable
    const popup = document.getElementById('draggable-popup');
    let isDragging = false;
    let startX, startY, initialLeft, initialTop;

    popup.addEventListener('mousedown', startDrag);
    popup.addEventListener('touchstart', startDrag);

    function startDrag(e) {
        isDragging = true;
        startX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
        startY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
        initialLeft = parseInt(getComputedStyle(popup).left) || 0;
        initialTop = parseInt(getComputedStyle(popup).top) || 0;
        document.addEventListener('mousemove', drag);
        document.addEventListener('touchmove', drag);
        document.addEventListener('mouseup', stopDrag);
        document.addEventListener('touchend', stopDrag);
    }

    function drag(e) {
        if (!isDragging) return;
        const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
        const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
        popup.style.left = `${initialLeft + clientX - startX}px`;
        popup.style.top = `${initialTop + clientY - startY}px`;
    }

    function stopDrag() {
        isDragging = false;
        document.removeEventListener('mousemove', drag);
        document.removeEventListener('touchmove', drag);
        document.removeEventListener('mouseup', stopDrag);
        document.removeEventListener('touchend', stopDrag);
    }
});

function closePopup() {
    document.getElementById('order-popup').style.display = 'none';
}
