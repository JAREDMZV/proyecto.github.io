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
            loop: false 
        });
        window.removeEventListener('scroll', animateDiv); 
    }
}

window.addEventListener('scroll', animateDiv);

