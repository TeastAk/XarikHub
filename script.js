const h = document.querySelectorAll('.h');
const romka = document.querySelector('.romka');

romka.addEventListener('click', () => {
    h.forEach(e => {
        e.classList.add('active-roma');
    });
});


// input 

const inp = document.querySelector('.header__input');
const button = document.querySelector('.header__search');
const butLink = document.querySelector('.top-header__links');

button.addEventListener('click', (e) => {
    e.preventDefault();

    if(inp.value === 'defix') {
        butLink.classList.remove('none')
    }

});
