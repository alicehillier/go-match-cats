/*jshint esversion: 6 */
// Adds an event listener to the submit button in the welcome message, triggering the selectDifficulty function
let submit = document.getElementById('submit');
submit.addEventListener('click', selectDifficulty);

// Adds an event listener to the audio icon, triggering the playAudio function
let audioIcon = document.getElementsByClassName('audio-icon');
audioIcon[0].addEventListener('click', playAudio);

/**Triggered by the player clicking on the audio icon, the audio is paused and the icon changes to a speaker with a cross on it. 
 * The event listener to trigger the stopAudio function is removed and the event listener to trigger the playAudio function is added */
function stopAudio() {
    let audio = document.getElementById('music');
    audio.pause();
    audioIcon[0].classList.remove('fa-volume-high');
    audioIcon[0].classList.add('fa-volume-xmark');
    audioIcon[0].removeEventListener('click', stopAudio);
    audioIcon[0].addEventListener('click', playAudio);
}

/**Triggered by the player clicking on the audio icon, the audio is played and the icon changes to a speaker with increased volume. 
 * The event listener to trigger the playAudio function is removed and the event listener to trigger the stopAudio function is added */
function playAudio() {
    let audio = document.getElementById('music');
    audio.play();
    audioIcon[0].classList.remove('fa-volume-xmark');
    audioIcon[0].classList.add('fa-volume-high');
    audioIcon[0].removeEventListener('click', playAudio);
    audioIcon[0].addEventListener('click', stopAudio);
}

/**Creates the start button and adds a 'click' event listener to trigger the shuffleCards function. Appends the start button to the game area */
function createStartButton() {
    let startButton = document.createElement('button');
    startButton.setAttribute('id', 'start-button');
    startButton.innerHTML = "START";
    startButton.addEventListener('click', shuffleCards);
    let cardsGrid = document.getElementsByClassName('cards-grid');
    cardsGrid[0].prepend(startButton);
}

//Adds an event listener to the 'help' button to trigger the showInstructions function.
let helpButton = document.getElementsByClassName('help');
helpButton[0].addEventListener('click', showInstructions);

// All difficulty modes are set to false until one has been selected.
let easyDifficulty = false;
let normalDifficulty = false;
let hardDifficulty = false;

/**Removes the welcome message and adds 'click' event listeners to the difficulty level buttons. */
function selectDifficulty() {
    let message = document.getElementsByClassName('get-username');
    message[0].style.display = "none";

    let easy = document.getElementsByClassName('easy');
    let normal = document.getElementsByClassName('normal');
    let hard = document.getElementsByClassName('hard');
    easy[0].addEventListener('click', easyMode);
    normal[0].addEventListener('click', normalMode);
    hard[0].addEventListener('click', hardMode);
}

/**Sets the game to easy mode, runs the createStartButton function, and hides 12 cards, leaving a total of 12 playable cards. */
function easyMode() {
    easyDifficulty = true;
    createStartButton();

    let cardsGrid = document.getElementsByClassName('cards-grid');
    cardsGrid[0].classList.remove('normal-cards-grid');
    cardsGrid[0].classList.add('easy-cards-grid');

    let difficultyLabel = document.getElementsByClassName('difficulty-label');
    difficultyLabel[0].innerHTML = '<p>EASY</p>';

    let difficultyContainer = document.getElementsByClassName('difficulty-container');
    difficultyContainer[0].style.visibility = "hidden";
    console.log('easy mode triggered');
    let cards = document.getElementsByClassName('card');
    // Hide the cards below
    cards[0].classList.add('no-display');
    cards[1].classList.add('no-display');
    cards[2].classList.add('no-display');
    cards[3].classList.add('no-display');
    cards[4].classList.add('no-display');
    cards[5].classList.add('no-display');
    cards[12].classList.add('no-display');
    cards[13].classList.add('no-display');
    cards[14].classList.add('no-display');
    cards[15].classList.add('no-display');
    cards[16].classList.add('no-display');
    cards[17].classList.add('no-display');
    // Do not hide the cards below, but give them a new class
    cards[6].classList.add('easy-card');
    cards[7].classList.add('easy-card');
    cards[8].classList.add('easy-card');
    cards[9].classList.add('easy-card');
    cards[10].classList.add('easy-card');
    cards[11].classList.add('easy-card');
    cards[18].classList.add('easy-card');
    cards[19].classList.add('easy-card');
    cards[20].classList.add('easy-card');
    cards[21].classList.add('easy-card');
    cards[22].classList.add('easy-card');
    cards[23].classList.add('easy-card');
    return;
}

/**Sets the game to normal mode, runs the createStartButton function, and hides 8 cards if the mode was previously set to 'hard', 
 * or removes the no-display class from 4 cards if the mode was previously set to 'easy', ensuring a total of 16 playable cards. */
function normalMode() {
    normalDifficulty = true;
    createStartButton();

    let cardsGrid = document.getElementsByClassName('cards-grid');
    cardsGrid[0].classList.remove('easy-cards-grid');
    cardsGrid[0].classList.add('normal-cards-grid');

    let difficultyLabel = document.getElementsByClassName('difficulty-label');
    difficultyLabel[0].innerHTML = '<p>NORMAL</p>';

    let difficultyContainer = document.getElementsByClassName('difficulty-container');
    difficultyContainer[0].style.visibility = "hidden";
    console.log('normal mode triggered');
    let cards = document.getElementsByClassName('card');
    cards[0].classList.add('no-display');
    cards[1].classList.add('no-display');
    cards[2].classList.add('no-display');
    cards[3].classList.add('no-display');
    cards[12].classList.add('no-display');
    cards[13].classList.add('no-display');
    cards[14].classList.add('no-display');
    cards[15].classList.add('no-display');
    if (easyDifficulty === true) {
        cards[4].classList.remove('no-display');
        cards[5].classList.remove('no-display');
        cards[16].classList.remove('no-display');
        cards[17].classList.remove('no-display');
        easyDifficulty = false;
    }
    return;
}

/**Sets the game to hard mode, runs the createStartButton function, and removes the 'no-display' class from all cards, 
 * leaving a total of 24 playable cards */
function hardMode() {
    hardDifficulty = true;
    createStartButton();

    let cardsGrid = document.getElementsByClassName('cards-grid');
    cardsGrid[0].classList.remove('easy-cards-grid');
    cardsGrid[0].classList.remove('normal-cards-grid');

    let difficultyLabel = document.getElementsByClassName('difficulty-label');
    difficultyLabel[0].innerHTML = '<p>HARD</p>';

    let difficultyContainer = document.getElementsByClassName('difficulty-container');
    difficultyContainer[0].style.visibility = "hidden";
    console.log('hard mode triggered');
    if (easyDifficulty === true || normalDifficulty === true) {
        let cards = document.getElementsByClassName('card');
        cards[0].classList.remove('no-display');
        cards[1].classList.remove('no-display');
        cards[2].classList.remove('no-display');
        cards[3].classList.remove('no-display');
        cards[4].classList.remove('no-display');
        cards[5].classList.remove('no-display');
        cards[12].classList.remove('no-display');
        cards[13].classList.remove('no-display');
        cards[14].classList.remove('no-display');
        cards[15].classList.remove('no-display');
        cards[16].classList.remove('no-display');
        cards[17].classList.remove('no-display');
        easyDifficulty = false;
        normalDifficulty = false;

    }
    return;
}

//THE CODE BELOW WAS SOURCED FROM A FREECODECAMP TUTORIAL: https://www.youtube.com/watch?v=ZniVgo8U7ek
// ---------------------------------

// Sets flippedCard to false as no card has been flipped, declares firstCard and secondCard
let flippedCard = false;
let firstCard;
let secondCard;

// Cards can be flipped as the board is not locked.
let boardLocked = false;

// ---------------------------------

/**Creates instructions and shows them to the player. The function within also removes them when the 'X' in the top right corner is clicked on. */
function showInstructions() {
    let instructions = document.createElement('div');
    instructions.setAttribute('id', 'instructions');
    instructions.innerHTML = `
    <button class="exit-instructions">X</button>
    <h2 class="instructions-title">HOW TO PLAY</h2>
    <ul>
    <li>The aim of the game is to match your cards.</li>
    <li>Click on two cards. If they match, they'll disappear. If not, they'll return to their positions.</li>
    <li>Have another go, selecting two cards. Try to remember where each card is on the board and you'll have a better chance of winning!</li>
    <li>Don't forget, you've got a time limit! If the timer runs out and you haven't matched all the cards, you'll lose the game.</li>
    <li>Too easy? Try a harder level!</li>
    </ul>
    <img src="assets/images/cartoon-cat-vector.png" alt="cartoon cat" class="cat-instructions">
    `;
    let body = document.getElementsByTagName('body');
    body[0].prepend(instructions);
    console.log("instructions here");
    let exit = document.getElementsByClassName('exit-instructions');
    exit[0].addEventListener('click', closeInstructions);

    /**Exit instructions and return to the main page. */
    function closeInstructions() {
        instructions.removeAttribute('id', 'instructions');
        instructions.style.display = "none";
    }
}

//THE CODE IN THE flipCard FUNCTION WAS SOURCED FROM A FREECODECAMP TUTORIAL AND CUSTOMISED: https://www.youtube.com/watch?v=ZniVgo8U7ek
//---------------------------------------------------------------------------------------------------------
/**Allows cards to be flipped, checks if cards match and hides them if they do, or returns them to their original position if they don't 
 * (with 1 sec delay for viewing) */
function flipCard() {
    // If the cards cannot be flipped, stop the function.
    if (boardLocked) return;
    // If the same card is clicked on twice, stop the function so it doesn't match with itself
    if (this === firstCard) return;

    // get all elements with the class 'card' and iterate through them, adding the event listener for all
    let cards = document.getElementsByClassName('card');
    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener('click', flipCard);
    }

    // Adds a 'flip' class to the card element. This allows the card to be flipped
    this.classList.add('flip');

    if (!flippedCard) {
        // When first card is selected. flippedCard is now true. It has been flipped once
        flippedCard = true;
        firstCard = this;
    } else {
        // When second card is selected. flippedCard is set back to false, ready for the next attempt
        flippedCard = false;
        secondCard = this;
    }
    checkCards();
}
//---------------------------------------------------------------------------------------------------------

//SOME OF THE CODE IN THE checkCards FUNCTION WAS SOURCED FROM A FREECODECAMP TUTORIAL AND CUSTOMISED: https://www.youtube.com/watch?v=ZniVgo8U7ek
//---------------------------------------------------------------------------------------------------------
/** Checks if cards match. If so, they disappear and cannot be clicked again. If not, they are flipped back to their original positions. 
 * Triggers the incrementScore function. */
function checkCards() {
    // If the cards match, hide the cards and remove the event listener so they cannot be activated again
    //DATASET NAMES, CARD STYLES, ADDITION OF CLASS NAMES AND CALLING OF incrementScore FUNCTION ARE MY OWN
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
        incrementScore();
    } else {
        // Stop the player from flipping cards
        boardLocked = true;
        // If the cards don't match, flip them back over to their original positions, with a 1 second delay so the user can view the selected cards
        setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            // Allow the player to flip cards again
            resetBoard();
        }, 1000);
    }
}
//---------------------------------------------------------------------------------------------------------

//THE CODE IN THE resetBoard FUNCTION WAS SOURCED FROM A FREECODECAMP TUTORIAL: https://www.youtube.com/watch?v=ZniVgo8U7ek
//---------------------------------------------------------------------------------------------------------
/**Allows the matching process to start again, letting the player flip 2 cards */
function resetBoard() {
    flippedCard = false;
    boardLocked = false;
    firstCard = null;
    secondCard = null;
}
//---------------------------------------------------------------------------------------------------------

//THE CODE IN THE shuffleCards FUNCTION WAS MADE USING LOGIC FROM A FREECODECAMP TUTORIAL AND CUSTOMISED SIGNIFICANTLY: https://www.youtube.com/watch?v=ZniVgo8U7ek

/**Shuffles the cards, putting them in a random order. Trigger the startGame function afterwards */
function shuffleCards() {
    let cards = document.getElementsByClassName('card');
    for (let i = 0; i < cards.length; i++) {
        let randomNumber = Math.floor(Math.random() * 24);
        cards[i].style.order = randomNumber;
    }
    startGame();
}

/**Resets the score by calling resetScore function, stops the cat animation and removes the Start button when it's clicked on, 
 * counting down "3, 2, 1, GO!" with one second between each of them */
function startGame() {
    let catAnimation = document.getElementById('cat-animation');
    catAnimation.classList.remove('moving-cat');
    // remove the start button after one second and display "3" in its place
    let startButton = document.getElementById('start-button');
    startButton.remove();
    let countdown = document.createElement('p');
    countdown.classList.add('start-countdown');
    countdown.innerHTML = "3";
    let cardsGrid = document.getElementsByClassName('cards-grid');
    cardsGrid[0].append(countdown);
    setTimeout(() => {
        // remove the "3" after one second and display "2" in its place
        countdown.innerHTML = "2";
        setTimeout(() => {
            // remove the "2" after one second and display "1" in its place
            countdown.innerHTML = "1";
            setTimeout(() => {
                // remove the "1" after one second and display "GO!" in its place
                countdown.innerHTML = "GO!";
                setTimeout(() => {
                    // remove the countdown.
                    countdown.remove();
                }, 1000);
                // immediately after "GO!" is removed, start the timer by triggering the startTimer 
                // function and let the user play by triggering the flipCard function
                startTimer();
                boardLocked = false;
                flipCard();
            }, 1000);
        }, 1000);
    }, 1000);
}

/**Starts the countdown from 30 seconds for easy and normal modes, or 60 seconds for hard mode. If 0 is reached, the gameOver function is triggered */
function startTimer() {
    let restartButton = document.getElementsByClassName('restart');
    restartButton[0].style.visibility = "visible";
    restartButton[0].addEventListener('click', restartMidGame);

    let maxTime;
    console.log('start timer now!');
    let gameTimer = document.getElementsByClassName('timer');
    if (easyDifficulty === true || normalDifficulty === true) {
        maxTime = 29;
    } else {
        maxTime = 59;
    }
    let timer = setInterval(() => {
        /* If the timer has more than 0 seconds remaining, show how many seconds are left
         in the gameTimer element. Then, deduct 1 second from the timer*/
        if (maxTime > 0) {
            // If there is less than 10 seconds on the timer, add a '0' before the number of seconds
            gameTimer[0].innerHTML = `00:${maxTime < 10 ? '0' + maxTime : maxTime}`;
            maxTime--;
            // If all 24 cards have the card-flipped class, remove the restart button and trigger the youWin function
            let cardFlipped = document.getElementsByClassName('card-flipped');
            if (maxTime > 0 && cardFlipped.length === 24) {
                clearInterval(timer);
                gameTimer[0].innerHTML = "00:00";
                youWin();
                let catAnimation = document.getElementById('cat-animation');
                catAnimation.classList.add('moving-cat');
                restartButton[0].style.visibility = "hidden";
                // If the game was played on normal mode and all 16 cards are matched, trigger the youWin function
            } else if (normalDifficulty === true && cardFlipped.length === 16) {
                clearInterval(timer);
                gameTimer[0].innerHTML = "00:00";
                youWin();
                let catAnimation = document.getElementById('cat-animation');
                catAnimation.classList.add('moving-cat');
                restartButton[0].style.visibility = "hidden";
            }
            // If the game was played on easy mode and all 12 cards are matched, trigger the youWin function
            else if (easyDifficulty === true && cardFlipped.length === 12) {
                clearInterval(timer);
                gameTimer[0].innerHTML = "00:00";
                youWin();
                let catAnimation = document.getElementById('cat-animation');
                catAnimation.classList.add('moving-cat');
                restartButton[0].style.visibility = "hidden";
            }
            // If the restart button has been clicked on, stop the timer.
            if (maxTime > 0 && startAgain === true) {
                clearInterval(timer);
                gameTimer[0].innerHTML = "00:00";
                startAgain = false;
            }
            /* If the timer reaches 0, show "00:00!" in the timer area, stop the timer, remove the restart button
            and trigger the gameOver function*/
        } else {
            gameTimer[0].innerHTML = "00:00";
            clearInterval(timer);
            gameOver();
            restartButton[0].style.visibility = "hidden";
        }
    }, 1000);
}

let startAgain = false;

/**Restarts the game and the timer when the player clicks on the restart button in the middle of the current game */
function restartMidGame() {
    console.log('restart mid-game now');
    boardLocked = true;
    // Hide the retry button as it has been clicked.
    let restartButton = document.getElementsByClassName('restart');
    restartButton[0].style.visibility = "hidden";
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
        let difficultyContainer = document.getElementsByClassName('difficulty-container');
        difficultyContainer[0].style.visibility = "visible";
    }, 500);
}

/** Shows the player a 'YOU WON!' message with their total score, and lets them return the main page by clicking the 'EXIT' button. */
function youWin() {
    saveScore();
    console.log('gameOver triggered');
    // get all elements with the class 'card' and iterate through them, adding the event listener for all.
    let cards = document.getElementsByClassName('card');
    for (let i = 0; i < cards.length; i++) {
        cards[i].removeEventListener('click', flipCard);
        // remove this class so the game isn't stuck in an endless loop saying "YOU WON!" - linked to timer.
        cards[i].classList.remove('card-flipped');
    }
    let scoreCounter = document.getElementsByClassName('score-counter');
    // show "YOU WIN!" to the player.
    let winningMessage = document.createElement('p');
    winningMessage.classList.add('winning-message');
    winningMessage.innerHTML = `
    <p>YOU WON!</p> 
    <p>Your score was ${scoreCounter[0].innerHTML}</p>
    `;
    let cardsGrid = document.getElementsByClassName('cards-grid');
    cardsGrid[0].append(winningMessage);
    let retryButton = document.createElement('button');
    retryButton.setAttribute('id', 'retry-button');
    retryButton.innerHTML = "EXIT";
    winningMessage.append(retryButton);
    retryButton.addEventListener('click', restartGame);
    resetScore();
}

/**Stops the player flipping cards and displays a 'YOU LOSE!' message, showing them their total score. 
 * Lets the player return to the main page by clicking on the 'EXIT' button. */
function gameOver() {
    saveScore();
    console.log('gameOver triggered');
    // get all elements with the class 'card' and iterate through them, adding the event listener for each of them.
    let cards = document.getElementsByClassName('card');
    for (let i = 0; i < cards.length; i++) {
        cards[i].removeEventListener('click', flipCard);
    } let scoreCounter = document.getElementsByClassName('score-counter');
    // show "YOU LOST!" to the player.
    let losingMessage = document.createElement('p');
    losingMessage.classList.add('losing-message');
    losingMessage.innerHTML = `
    <p>YOU LOST!</p> 
    <p>Your score was ${scoreCounter[0].innerHTML}</p>
    `;
    let cardsGrid = document.getElementsByClassName('cards-grid');
    cardsGrid[0].append(losingMessage);
    let retryButton = document.createElement('button');
    retryButton.setAttribute('id', 'retry-button');
    retryButton.innerHTML = "EXIT";
    losingMessage.append(retryButton);
    retryButton.addEventListener('click', restartGame);
    resetScore();
}

/**Removes the winning or losing message once the retry button has been clicked. Reset the game area and re-add the start button with its event listener so the game can be run again. */
function restartGame() {
    console.log('restart game now');
    // Remove the retry button as it has been clicked.
    let winningMessage = document.getElementsByClassName('winning-message');
    let losingMessage = document.getElementsByClassName('losing-message');
    if (winningMessage[0]) {
        winningMessage[0].remove();
    } else {
        losingMessage[0].remove();
    }
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
        let difficultyContainer = document.getElementsByClassName('difficulty-container');
        difficultyContainer[0].style.visibility = "visible";
        // startGame();
    }, 500);
}

/**Calculates the scoring, working in multiples of 5, and shows the score in the relevant li in the header. */
function incrementScore() {
    let scoreCounter = document.getElementsByClassName('score-counter');
    let cardFlipped = document.getElementsByClassName('card-flipped');
    let score = (cardFlipped.length) * 2.5;
    scoreCounter[0].innerHTML = score;
    console.log(score);
    return score;
}

/**Resets the score to 0, ready for a new game. */
function resetScore() {
    let scoreCounter = document.getElementsByClassName('score-counter');
    let cardFlipped = document.getElementsByClassName('card-flipped');
    if (cardFlipped.length >= 0) {
        let cards = document.getElementsByClassName('card');
        for (let i = 0; i < cards.length; i++) {
            cards[i].classList.remove('card-flipped');
            scoreCounter[0].innerHTML = 0;
        }
    }
    return;
}

let leaderboardButton = document.getElementsByClassName('scoreboard');
leaderboardButton[0].addEventListener('click', showScoreboard);

let scoreboard = [];

let localStorageScore = JSON.parse(localStorage.getItem('score'));
if (localStorageScore != null) {
    scoreboard = localStorageScore;
}

/**Takes the current score and pushes it into the scoreboard array, creating a collection of scores. */
function saveScore() {
    let scoreCounter = document.getElementsByClassName('score-counter');
    let cardFlipped = document.getElementsByClassName('card-flipped');
    let score = (cardFlipped.length) * 2.5;
    scoreCounter[0].innerHTML = score;

    let username = document.getElementById('name');
    let name = username.value;

    // Group the player name and score into an object, so they are stored together.
    let nameAndScore = { name, score };

    // Push the grouped information to the scoreboard.
    scoreboard.push(nameAndScore);
    localStorage.setItem('score', JSON.stringify(scoreboard));
    console.log(`${nameAndScore.name} and ${nameAndScore.score} added to scoreboard`);
    console.log(scoreboard);
    return;
}

/**Creates the scoreboard, which is visible when the user clicks on the 'leaderboard' button. Displays the collection of scores from this session. */
function showScoreboard() {
    let scoreboardDisplay = document.createElement('div');
    scoreboardDisplay.setAttribute('class', 'scoreboard-display');
    scoreboardDisplay.innerHTML = `
    <button class="exit-scoreboard">X</button>
    <h2>LEADERBOARD</h2>
    <ul class="top-10">
    `;
    console.log(scoreboard, 'before display');
    // Copies the scoreboard content, sorts the numbers from highest to lowest, then takes values from index 0 - 9. Specify that I want score so the array isn't sorted by player name.
    let top10 = scoreboard.sort((a, b) => b.score - a.score).slice(0, 10);
    let listTop10 = scoreboardDisplay.getElementsByClassName('top-10');
    console.log(top10);

    // Loops through the objects and displays the values for name and score.
    top10.forEach((value) => {
        listTop10[0].innerHTML += `<li><span class="player-name">${value.name}</span> : <span class="player-score">${value.score}</span></li>`;
    });
    scoreboardDisplay.innerHTML += `
    </ul>
    <img src="assets/images/cartoon-cat-vector.png" alt="cartoon cat" class="cat-leaderboard">
    `;

    let body = document.getElementsByTagName('body');
    body[0].prepend(scoreboardDisplay);
    console.log("scoreboard here");
    let exit = document.getElementsByClassName('exit-scoreboard');
    exit[0].addEventListener('click', closeScoreboard);

    /**Exit leaderboard and return to the main page. */
    function closeScoreboard() {
        scoreboardDisplay.removeAttribute('id', 'scoreboard-display');
        scoreboardDisplay.style.display = "none";
    }
}