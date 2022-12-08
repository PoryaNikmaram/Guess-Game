'use strict'


let counter = 20;
let secretNumber = Math.ceil(Math.random() * 20);
let Highscore = 0;
document.querySelector('.check-btn').addEventListener('click', function() {
    const guessNumber = Number(document.querySelector('.input-number').value);

    //Falsy Value
    if (!guessNumber) {
        document.querySelector('.situation').textContent = '🚫 Try Between 1-20'
    }
    //win
    else if (guessNumber === secretNumber) {
        document.querySelector('.situation').textContent = 'You Win 🏆';
        document.querySelector('body').style.backgroundImage = 'linear-gradient(to bottom right, #00FF00, #006400)'
        document.querySelector('.number').style.width = '350px';
        document.querySelector('.number').textContent = secretNumber;

        if (Highscore < counter) {
            Highscore = counter;
            document.querySelector('.high-score').textContent = '🥇 Highscore :' + Highscore;
        }
    }
    //too High
    else if (guessNumber > secretNumber) {
        if (counter > 1) {
            document.querySelector('.situation').textContent = 'Too high 📈'
            counter--
            document.querySelector('.score').textContent = '💯 Score : ' + counter;
        } else {
            document.querySelector('.situation').textContent = '☹ You Lose !'
            document.querySelector('body').style.backgroundImage = 'linear-gradient(to bottom right, #FF3333, #990000)'
        }
    }
    //too Low
    else if (guessNumber < secretNumber) {
        if (counter > 1) {
            document.querySelector('.situation').textContent = 'Too Low 📉'
            counter--
            document.querySelector('.score').textContent = '💯 Score : ' + counter;
        } else {
            document.querySelector('.situation').textContent = '☹ You Lose !'
            document.querySelector('body').style.backgroundImage = 'linear-gradient(to bottom right, #FF3333, #990000)'
        }
    }
});
document.querySelector('.again-btn').addEventListener('click', function() {
    secretNumber = Math.ceil(Math.random() * 20);
    counter = 20;
    document.querySelector('body').style.backgroundImage = 'linear-gradient(to bottom right, #333, #333)'
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '50px';
    document.querySelector('.situation').textContent = '❓ Start Guessing ...';
    document.querySelector('.score').textContent = '💯 Score : ' + counter;
    document.querySelector('.input-number').value = null;
})