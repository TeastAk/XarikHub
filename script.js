const h = document.querySelectorAll('.h');
const romka = document.querySelector('.romka');

romka.addEventListener('click', () => {
    h.forEach(e => {
        e.classList.add('active-roma');
    });
});