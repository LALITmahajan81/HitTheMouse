const score = document.querySelector('.score span');
const holes = document.querySelectorAll('.hole');
const startBtn = document.querySelector('.buttons .start');
const stopBtn = document.querySelector('.buttons .stop');
const cursor = document.querySelector('.hammer img');

let gameInterval;
let points = 0;

window.addEventListener('mousemove', (e) => {
    cursor.style.top = e.pageY + "px";
    cursor.style.left = e.pageX + "px";
});


window.addEventListener('click', () => {
    cursor.style.animation = 'none';
    setTimeout(() => {
        cursor.style.animation = '';
    }, 100);
});

// Start game
startBtn.addEventListener('click', () => {
    startBtn.style.display = 'none';
    stopBtn.style.display = 'inline-block';
    points = 0;
    score.innerText = points;

    gameInterval = setInterval(() => {
        const randomHole = holes[Math.floor(Math.random() * holes.length)];
        const rat = document.createElement('img');
        rat.setAttribute('src', 'https://media.geeksforgeeks.org/wp-content/uploads/20210303135621/rat.png');
        rat.setAttribute('class', 'rat');
        randomHole.appendChild(rat);


        rat.addEventListener('click', () => {
            points++;
            score.innerText = points;
            randomHole.removeChild(rat); 
        });

        setTimeout(() => {
            if (randomHole.contains(rat)) {
                randomHole.removeChild(rat);
            }
        }, 700);
    }, 1000);
});

stopBtn.addEventListener('click', () => {
    clearInterval(gameInterval);
    stopBtn.style.display = 'none';
    startBtn.style.display = 'inline-block';
    score.innerText = '0';
});
