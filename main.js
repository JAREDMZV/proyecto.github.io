var div = document.getElementById('mi-div');

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function animateDiv() {
    if (isElementInViewport(div)) {
        anime({
            targets: '#mi-div',
            translateX: [
                { value: 250, duration: 1000 },
                { value: 0, duration: 800 }
            ],
            rotate: '1turn',
            backgroundColor: '#FFF',
            duration: 2000,
            loop: false // Para una sola vuelta de la animación
        });
        window.removeEventListener('scroll', animateDiv);
        window.removeEventListener('touchmove', animateDiv); // Elimina el evento touchmove después de la animación
    }
}

window.addEventListener('scroll', animateDiv);
window.addEventListener('touchmove', animateDiv); // Agrega el evento touchmove para dispositivos táctiles
