const dino  = document.getElementById('dino');
const cactus = document.getElementById('cactus');
const body = document.body
const game = document.querySelector('.game');

document.addEventListener('keydown', () => {
    jump();
});

function jump () {
    if (dino.classList != 'jump') {
        dino.classList.add('jump');
    } 

    setTimeout( () => {
        dino.classList.remove('jump');
    }, 300);
}

let isAlive = setInterval ( () => {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        alert('GAME OVER!!');
        body.classList.remove('dark');
        game.classList.remove('solid');
    }
}, 10);
 
setInterval(() => {
    body.classList.toggle('dark');
    game.classList.toggle('solid');
}, 20000);

