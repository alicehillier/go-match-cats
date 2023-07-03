// Creates start button and adds event listener to trigger startGame function.
let startButton = document.createElement('button');
startButton.setAttribute('id', 'start-button');
startButton.innerHTML = "START";
let cardsGrid = document.getElementsByClassName('cards-grid');
cardsGrid[0].prepend(startButton);
startButton.addEventListener('click', shuffleCards);
let helpButton = document.getElementsByClassName('help');
helpButton[0].addEventListener('click', showInstructions);

// Create the empty array and insert all cards.
let deck = [];
let allCards = document.getElementsByClassName('card');
for (let i = 0; i < allCards.length; i++) {
    deck.push(allCards[i].innerHTML);
}

//THE CODE BELOW WAS SOURCED FROM A FREECODECAMP TUTORIAL: https://www.youtube.com/watch?v=ZniVgo8U7ek
// ---------------------------------

let flippedCard = false;
let firstCard;
let secondCard;

// Cards can be flipped.
let boardLocked = false;

// ---------------------------------

/**Creates instructions and shows them to the player. Also removes them when the 'X' in the top right corner is clicked on. */
function showInstructions() {
    let instructions = document.createElement('div');
    instructions.setAttribute('id', 'instructions');
    instructions.innerHTML = `
    <button class="exit-instructions">X</button>
    <h2 class="instructions-title">How to Play</h2>
    <ul>
    <li>The aim of the game is to match your cards.</li>
    <li>Click on two cards. If they match, they'll disappear. If not, they'll return to their positions.</li>
    <li>Have another go, selecting two cards. Try to remember where each card is on the board and you'll have a better chance of winning!</li>
    <li>Don't forget, you've got a time limit! If the timer runs out and you haven't matched all the cards, you'll lose the game.</li>
    <li>Too easy? Try a harder level!</li>
    </ul>
    `
    let body = document.getElementsByTagName('body');
    body[0].prepend(instructions);
    console.log("instructions here");
    let exit = document.getElementsByClassName('exit-instructions');
    exit[0].addEventListener('click', closeInstructions);
    function closeInstructions() {
        instructions.removeAttribute('id', 'instructions');
        instructions.style.display = "none";
    }
}

//THE CODE IN THE flipCard FUNCTION WAS SOURCED FROM A FREECODECAMP TUTORIAL AND CUSTOMISED: https://www.youtube.com/watch?v=ZniVgo8U7ek
//---------------------------------------------------------------------------------------------------------

/**Allows cards to be flipped, checks if cards match and hides them if they do, or returns them to their original position if they don't (with 1 sec delay for viewing) */
function flipCard() {
    // If the cards cannot be flipped, stop the function.
    if (boardLocked) return;
    // If the same card is clicked on twice, stop the function so it doesn't match with itself.
    if (this === firstCard) return;

    // get all elements with the class 'card' and iterate through them, adding the event listener for all.
    let cards = document.getElementsByClassName('card');
    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener('click', flipCard);
    }
    // Adds a 'flip' class to the card element. This allows the card to be flipped.
    this.classList.add('flip');

    if (!flippedCard) {
        // When first card is selected. flippedCard is now true. It has been flipped once.
        flippedCard = true;
        firstCard = this;
    } else {
        // When second card is selected. flippedCard is set back to false, ready for the next attempt.
        flippedCard = false;
        secondCard = this;
    }
    checkCards();
};

//---------------------------------------------------------------------------------------------------------

//THE CODE IN THE checkCards FUNCTION WAS SOURCED FROM A FREECODECAMP TUTORIAL AND CUSTOMISED: https://www.youtube.com/watch?v=ZniVgo8U7ek
//---------------------------------------------------------------------------------------------------------

/** Checks if cards match. If so, they disappear and cannot be clicked again. If not, 
 *  they are flipped back to their original positions.*/
function checkCards() {
    // If the cards match, hide the cards and remove the event listener so they cannot be activated again.
    //DATASET NAMES, CARD STYLES, CLASS NAMES AND CONDITIONAL STATEMENT TRIGGERING youWin ARE MY OWN.
    if (firstCard.dataset.name === secondCard.dataset.name) {
        firstCard.style.visibility = "hidden";
        // If a card is matched, add a new class.
        firstCard.classList.add('card-flipped');
        firstCard.removeEventListener('click', flipCard);
        secondCard.style.visibility = "hidden";
        // If a card is matched, add a new class.
        secondCard.classList.add('card-flipped');
        secondCard.removeEventListener('click', flipCard);
        resetBoard();
    } else {
        // Stop the player from flipping cards.
        boardLocked = true;
        // If the cards don't match, flip them back over to their original positions, with a 1 second delay so the user can view the selected cards.
        setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            // Allow the player to flip cards again.
            resetBoard();
        }, 1000)
    }
}

//---------------------------------------------------------------------------------------------------------

//THE CODE IN THE resetBoard FUNCTION WAS SOURCED FROM A FREECODECAMP TUTORIAL: https://www.youtube.com/watch?v=ZniVgo8U7ek
//---------------------------------------------------------------------------------------------------------

/**The matching process starts again, allowing the player to flip 2 cards. */
function resetBoard() {
    flippedCard = false;
    boardLocked = false
    firstCard = null;
    secondCard = null;
}

//---------------------------------------------------------------------------------------------------------

function shuffleCards() {
    let cards = document.getElementsByClassName('card');
    for (let i = 0; i < cards.length; i++) {
        let randomNumber = Math.floor(Math.random() * 24);
        cards[i].style.order = randomNumber;
    }
    startGame();
}

/**Removes the Start button when it's clicked on and counts down "3, 2, 1, GO!" with one second between each of them. */
function startGame() {
    // remove the start button after one second and display "3" in its place.
    startButton.remove();
    let countdown = document.createElement('p');
    countdown.classList.add('start-countdown');
    countdown.innerHTML = "3";
    let cardsGrid = document.getElementsByClassName('cards-grid');
    cardsGrid[0].append(countdown);
    setTimeout(() => {
        // remove the "3" after one second and display "2" in its place.
        countdown.innerHTML = "2";
        setTimeout(() => {
            // remove the "2" after one second and display "1" in its place.
            countdown.innerHTML = "1";
            setTimeout(() => {
                // remove the "1" after one second and display "GO!" in its place.
                countdown.innerHTML = "GO!";
                setTimeout(() => {
                    // remove the countdown.
                    countdown.remove();
                }, 1000);
                // immediately after "GO!" is removed, start the timer by triggering the startTimer 
                // function and let the user play by triggering the flipCard function.
                startTimer();
                boardLocked = false;
                flipCard();
            }, 1000);
        }, 1000);
    }, 1000);
}

/**Starts the countdown from 60 seconds. If 0 is reached, the gameOver function is triggered. */
function startTimer() {
    let restartButton = document.createElement('button');
    restartButton.setAttribute('class', 'restart');
    restartButton.innerHTML = "RESTART";
    let headerButtons = document.getElementsByClassName('header-buttons');
    headerButtons[0].append(restartButton);
    restartButton.addEventListener('click', restartMidGame);

    console.log('start timer now!');
    let gameTimer = document.getElementsByClassName('timer');
    let maxTime = 30;
    let timer = setInterval(() => {
        /* If the timer has more than 0 seconds remaining, show how many seconds are left
         in the gameTimer element. Then, deduct 1 second from the timer.*/
        if (maxTime > 0) {
            // If there is less than 10 seconds on the timer, add a '0' before the number of seconds.
            gameTimer[0].innerHTML = `00:${maxTime < 10 ? '0' + maxTime : maxTime}`;
            maxTime--;
            // If all 24 cards have the card-flipped class, trigger the youWin function.
            let cardFlipped = document.getElementsByClassName('card-flipped');
            if (maxTime > 0 && cardFlipped.length === 24) {
                clearInterval(timer);
                gameTimer[0].innerHTML = "00:00";
                youWin();
                restartButton.remove();
            }
            if (maxTime > 0 && startAgain === true) {
                clearInterval(timer);
                gameTimer[0].innerHTML = "00:00";
                startAgain = false;
            }
            /* If the timer reaches 0, show "00:00!" in the timer area, stop the timer
            and trigger the gameOver function.*/
        } else {
            gameTimer[0].innerHTML = "00:00";
            clearInterval(timer);
            gameOver();
            restartButton.remove();
        }
    }, 1000);
}

let startAgain = false;

/**Restarts the game and the timer when the player is in the middle of the current game. */
function restartMidGame() {
    console.log('restart mid-game now');
    boardLocked = true;
    // Remove the retry button as it has been clicked.
    let restartButton = document.getElementsByClassName('restart');
    restartButton[0].remove();
    startAgain = true;
    let cards = document.getElementsByClassName('card');
    for (let i = 0; i < cards.length; i++) {
        // cards[i].removeEventListener('click', flipCard);
        // get all the cards and remove the 'flip' class, so they are all facing the same way.
        cards[i].classList.remove('flip');
        setTimeout(() => {
            // make all cards visible again after 0.5 sec delay, so player cannot see the image on the cards as they turn.  
            cards[i].style.visibility = "visible";
        }, 500);
    }
    // re-add the startbutton and its event listener, so the startGame function can be run again.
    // set timeout so button appears after cards have been returned to original positions.
    setTimeout(() => {
        cardsGrid[0].prepend(startButton);
    }, 500);
}

/** Shows the player a 'you won!' message and lets them restart the game by clicking the 'play again' button. */
function youWin() {
    console.log('gameOver triggered');
    // get all elements with the class 'card' and iterate through them, adding the event listener for all.
    let cards = document.getElementsByClassName('card');
    for (let i = 0; i < cards.length; i++) {
        cards[i].removeEventListener('click', flipCard);
        // remove this class so the game isn't stuck in an endless loop saying "YOU WON!" - linked to timer.
        cards[i].classList.remove('card-flipped');
    }
    // show "YOU WIN!" to the player.
    let winningMessage = document.createElement('p');
    winningMessage.classList.add('winning-message');
    winningMessage.innerHTML = "YOU WON!";
    let cardsGrid = document.getElementsByClassName('cards-grid');
    cardsGrid[0].append(winningMessage);
    setTimeout(() => {
        // remove the winningMessage after one second and display retryButton in its place.
        winningMessage.remove();
        console.log('winningMessage removed');
        let retryButton = document.createElement('button');
        retryButton.setAttribute('id', 'retry-button');
        retryButton.innerHTML = "PLAY AGAIN?";
        cardsGrid[0].append(retryButton);
        retryButton.addEventListener('click', restartGame);
    }, 2000);
}

/**Stops the player from flipping cards and tells them the game is over. Gives the player the option to play again with a retry button. */
function gameOver() {
    console.log('gameOver triggered');
    // get all elements with the class 'card' and iterate through them, adding the event listener for all.
    let cards = document.getElementsByClassName('card');
    for (let i = 0; i < cards.length; i++) {
        cards[i].removeEventListener('click', flipCard);
    }
    // show "YOU LOST!" to the player.
    let losingMessage = document.createElement('p');
    losingMessage.classList.add('losing-message');
    losingMessage.innerHTML = "YOU LOST!";
    let cardsGrid = document.getElementsByClassName('cards-grid');
    cardsGrid[0].append(losingMessage);
    setTimeout(() => {
        // remove the losingMessage after one second and display retryButton in its place.
        losingMessage.remove();
        console.log('losingMessage removed');
        let retryButton = document.createElement('button');
        retryButton.setAttribute('id', 'retry-button');
        retryButton.innerHTML = "TRY AGAIN?";
        cardsGrid[0].append(retryButton);
        retryButton.addEventListener('click', restartGame);
    }, 2000);
}

/**Removes the 'try again' button once clicked, reset the game area and re-add the start button with its event listener so the game can be run again. */
function restartGame() {
    console.log('restart game now');
    // Remove the retry button as it has been clicked.
    let retryButton = document.getElementById('retry-button');
    retryButton.remove();
    let cards = document.getElementsByClassName('card');
    for (let i = 0; i < cards.length; i++) {
        // cards[i].removeEventListener('click', flipCard);
        // get all the cards and remove the 'flip' class, so they are all facing the same way.
        cards[i].classList.remove('flip');
        setTimeout(() => {
            // make all cards visible again after 0.5 sec delay, so player cannot see the image on the cards as they turn.  
            cards[i].style.visibility = "visible";
        }, 500);
    }
    // re-add the startbutton and its event listener, so the startGame function can be run again.
    // set timeout so button appears after cards have been returned to original positions.
    setTimeout(() => {
        cardsGrid[0].prepend(startButton);
        // startGame();
    }, 500);
}