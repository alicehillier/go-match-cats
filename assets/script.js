// retrieves the start button and adds event listener to trigger the startGame function below.
let startButton = document.getElementById('start-button');
startButton.addEventListener('click', startGame);

/**Removes the Start button when it's clicked on and counts down "3, 2, 1, GO!" with one second between each of them */
function startGame() {
    // remove the start button after one second and display "3" in its place.
    startButton.remove();
    let three = document.createElement('p');
    three.classList.add('start-countdown');
    three.innerHTML = "3";
    let cardsGrid = document.getElementsByClassName('cards-grid');
    cardsGrid[0].append(three);
    setTimeout(() => {
        // remove the "3" after one second and display "2" in its place.
        three.remove();
        console.log('three removed');
        let two = document.createElement('p');
        two.classList.add('start-countdown');
        two.innerHTML = "2";
        cardsGrid[0].append(two);
        setTimeout(() => {
            // remove the "2" after one second and display "1" in its place.
            two.remove();
            console.log('two removed');
            let one = document.createElement('p');
            one.classList.add('start-countdown');
            one.innerHTML = "1";
            cardsGrid[0].append(one);
            setTimeout(() => {
                // remove the "1" after one second and display "GO!" in its place.
                one.remove();
                console.log('one removed');
                let go = document.createElement('p');
                go.classList.add('start-countdown');
                go.innerHTML = "GO!";
                cardsGrid[0].append(go);
                setTimeout(() => {
                    go.remove();
                    console.log('go removed');
                    // immediately after "GO!" is removed, start the timer by triggering the startTimer function.
                    startTimer();
                    // the flipCard function is also triggered here so players cannot flip cards before clicking on the start button and waiting for the countdown to end.
                    flipCard();
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}

/**Starts the countdown from 60 seconds. If 0 is reached, the gameOver function is triggered. */
function startTimer() {
    console.log('start timer now!');
    let score = document.getElementsByClassName('score-label');
    let maxTime = 5;
    let timer = setInterval(() => {
        /* If the timer has more than 0 seconds remaining, show how many seconds are left
         in the score element. Then, deduct 1 second from the timer.*/
        if (maxTime > 0) {
            score[0].innerHTML = `${maxTime}`;
            maxTime--;
            /* If the timer reaches 0, show "OH NO!" in the score area, stop the timer
            and trigger the gameOver function.*/
        } else {
            score[0].innerHTML = "OH NO!";
            clearInterval(timer);
            gameOver();
        }
    }, 1000);
}

function gameOver() {
    console.log('gameOver triggered');
    // get all elements with the class 'card' and iterate through them, adding the event listener for all.
    let cards = document.getElementsByClassName('card');
    for (let i = 0; i < cards.length; i++) {
        cards[i].removeEventListener('click', flipCard);
    }
    // Adds a 'flip' class to the card element, or removes it if the card already has the class. This allows the card to be flipped multiple times.
}

let restartButton = document.getElementsByClassName('restart');
restartButton[0].addEventListener('click', restartGame);

function restartGame() {
    console.log('restart game now');
}

let flippedCard = false;
let firstCard;
let secondCard;

function flipCard() {
    // get all elements with the class 'card' and iterate through them, adding the event listener for all.
    let cards = document.getElementsByClassName('card');
    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener('click', flipCard);
    }
    // Adds a 'flip' class to the card element, or removes it if the card already has the class. This allows the card to be flipped multiple times.
    this.classList.toggle('flip');

    if (!flippedCard) {
        // When first card is selected. flippedCard is now true. It has been flipped once.
        flippedCard = true;
        firstCard = this;
    } else {
        // When second card is selected. flippedCard is set back to false, ready for the next attempt.
        flippedCard = false;
        secondCard = this;

        // If the cards match, hide the cards and remove the event listener so they cannot be activated again.
        if (firstCard.dataset.name === secondCard.dataset.name) {
            firstCard.style.visibility = "hidden";
            firstCard.removeEventListener('click', flipCard);
            secondCard.style.visibility = "hidden";
            secondCard.removeEventListener('click', flipCard);
        } else {
            // If the cards don't match, flip them back over to their original positions, with a 1 second delay so the user can view the selected cards.
            setTimeout(() => {
                firstCard.classList.toggle('flip');
                secondCard.classList.toggle('flip');
            }, 1000)
        }
    }
};

