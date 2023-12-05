var miOtroDiv = document.getElementById('mi-otro-div');

anime({
    targets: '#mi-otro-div',
    translateX: [
        { value: 250, duration: 1000 },
        { value: 0, duration: 800 }
    ],
    rotate: '1turn',
    backgroundColor: '#FFF',
    duration: 2000,
    loop: false // Para una sola vuelta de la animación
});

var div = document.getElementById('mi-div');
var count = 0;

function animateDiv() {
    if (count < 10) {
        var windowWidth = window.innerWidth;
        var divWidth = div.offsetWidth;
        anime({
            targets: '#mi-div',
            translateX: [
                { value: windowWidth - divWidth, duration: 2000, easing: 'linear' }, // Mueve hacia la derecha
                { value: 0, duration: 2000, easing: 'linear' } // Mueve hacia la izquierda
            ],
            borderRadius: 50,
            loop: true,
            complete: function(anim) {
                count++;
                if (count >= 10) {
                    anim.pause(); // Pausa la animación después de 10 repeticiones
                }
            }
        });
    }
}

animateDiv(); // Inicia la animación
