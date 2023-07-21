/*jshint esversion: 6 */

// Elements and actions to be implemented on load.

// Adds an event listener to the submit button in the welcome message, triggering the selectDifficulty function.
let submit = document.getElementById('submit');
submit.addEventListener('click', selectDifficulty);
// Adds an event listener to the audio icon, triggering the playAudio function.
let audioIcon = document.getElementsByClassName('audio-icon');
audioIcon[0].addEventListener('click', playAudio);
//Adds an event listener to the 'help' button to trigger the showInstructions function.
let helpButton = document.getElementsByClassName('help');
helpButton[0].addEventListener('click', showInstructions);
// Adds an event listener to the 'leaderboard' button to trigger the showScoreboard function.
let leaderboardButton = document.getElementsByClassName('scoreboard');
leaderboardButton[0].addEventListener('click', showScoreboard);
// All difficulty modes are set to false until one has been selected.
let easyDifficulty = false;
let normalDifficulty = false;
let hardDifficulty = false;

//THE CODE BELOW WAS SOURCED FROM A FREECODECAMP TUTORIAL: https://www.youtube.com/watch?v=ZniVgo8U7ek
// ---------------------------------
// Sets flippedCard to false as no card has been flipped, declares firstCard and secondCard.
let flippedCard = false;
let firstCard;
let secondCard;
// Cards can be flipped as the board is not locked.
let boardLocked = false;
// ---------------------------------

// Variable created to represent whether or not the 'quit' button has been clicked.
let startAgain = false;
// Array to store player names and scores.
let scoreboard = [];
// If there are scores in local storage, these will be included on the leaderboard.
let localStorageScore = JSON.parse(localStorage.getItem('score'));
if (localStorageScore != null) {
    scoreboard = localStorageScore;
}

/**Creates instructions and shows them to the player. The closeInstructions function within also removes the instructions when the 'X' in the top right corner is clicked on. */
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
    let exit = document.getElementsByClassName('exit-instructions');
    exit[0].addEventListener('click', closeInstructions);
    /**Exits instructions and return to the main page. */
    function closeInstructions() {
        instructions.removeAttribute('id', 'instructions');
        instructions.style.display = "none";
    }
}

/**Triggered by the player clicking on the audio icon, the audio is paused and the icon changes to a speaker with a cross on it. 
 * The event listener to trigger the stopAudio function is removed and the event listener to trigger the playAudio function is added. */
function stopAudio() {
    let audio = document.getElementById('music');
    audio.pause();
    audioIcon[0].classList.remove('fa-volume-high');
    audioIcon[0].classList.add('fa-volume-xmark');
    audioIcon[0].removeEventListener('click', stopAudio);
    audioIcon[0].addEventListener('click', playAudio);
}

/**Triggered by the player clicking on the audio icon, the audio is played and the icon changes to a speaker with increased volume. 
 * The event listener to trigger the playAudio function is removed and the event listener to trigger the stopAudio function is added. */
function playAudio() {
    let audio = document.getElementById('music');
    audio.play();
    audioIcon[0].classList.remove('fa-volume-xmark');
    audioIcon[0].classList.add('fa-volume-high');
    audioIcon[0].removeEventListener('click', playAudio);
    audioIcon[0].addEventListener('click', stopAudio);
}

/**Hides the welcome message and adds 'click' event listeners to the difficulty level buttons. */
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
    // Adds the 'easy-cards-grid' class to 'cards-grid'.
    let cardsGrid = document.getElementsByClassName('cards-grid');
    cardsGrid[0].classList.remove('normal-cards-grid');
    cardsGrid[0].classList.add('easy-cards-grid');
    // Changes the difficulty label text to 'EASY'.
    let difficultyLabel = document.getElementsByClassName('difficulty-label');
    difficultyLabel[0].innerHTML = '<p>EASY</p>';
    // Hides difficulty buttons.
    let difficultyContainer = document.getElementsByClassName('difficulty-container');
    difficultyContainer[0].style.visibility = "hidden";
    let cards = document.getElementsByClassName('card');
    // Adds the 'easy-card' class to adjust the size of the cards in easy mode.
    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.add('easy-card');
    }
    // Hides the cards below.
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
    return;
}

/**Sets the game to normal mode, runs the createStartButton function, and hides 8 cards if the mode was previously set to 'hard', 
 * or removes the no-display class from 4 cards if the mode was previously set to 'easy', ensuring a total of 16 playable cards. */
function normalMode() {
    normalDifficulty = true;
    createStartButton();
    // Adds the 'normal-cards-grid' class to 'cards-grid'.
    let cardsGrid = document.getElementsByClassName('cards-grid');
    cardsGrid[0].classList.remove('easy-cards-grid');
    cardsGrid[0].classList.add('normal-cards-grid');
    // Changes the difficulty label text to 'NORMAL'.
    let difficultyLabel = document.getElementsByClassName('difficulty-label');
    difficultyLabel[0].innerHTML = '<p>NORMAL</p>';
    // Hides difficulty buttons.
    let difficultyContainer = document.getElementsByClassName('difficulty-container');
    difficultyContainer[0].style.visibility = "hidden";
    // Hides the cards below.
    let cards = document.getElementsByClassName('card');
    cards[0].classList.add('no-display');
    cards[1].classList.add('no-display');
    cards[2].classList.add('no-display');
    cards[3].classList.add('no-display');
    cards[12].classList.add('no-display');
    cards[13].classList.add('no-display');
    cards[14].classList.add('no-display');
    cards[15].classList.add('no-display');
    // If the game was played on easy mode previously, removes the 'easy-card' class from cards.
    if (easyDifficulty === true) {
        for (let i = 0; i < cards.length; i++) {
            cards[i].classList.remove('easy-card');
        }
        // Makes the cards below visible.
        cards[4].classList.remove('no-display');
        cards[5].classList.remove('no-display');
        cards[16].classList.remove('no-display');
        cards[17].classList.remove('no-display');
        easyDifficulty = false;
    }
    return;
}

/**Sets the game to hard mode, runs the createStartButton function, and removes the 'no-display' class from all cards, 
 * leaving a total of 24 playable cards. */
function hardMode() {
    hardDifficulty = true;
    createStartButton();
    // Removes the 'easy-cards-grid' and 'normal-cards-grid' classes from 'cards-grid'.
    let cardsGrid = document.getElementsByClassName('cards-grid');
    cardsGrid[0].classList.remove('easy-cards-grid');
    cardsGrid[0].classList.remove('normal-cards-grid');
    // Changes the difficulty label text to 'HARD'.
    let difficultyLabel = document.getElementsByClassName('difficulty-label');
    difficultyLabel[0].innerHTML = '<p>HARD</p>';
    // Hides difficulty buttons.
    let difficultyContainer = document.getElementsByClassName('difficulty-container');
    difficultyContainer[0].style.visibility = "hidden";
    // If the game was played on easy or normal mode previously, removes the 'easy-card' and 'no-display' classes from all cards.
    if (easyDifficulty === true || normalDifficulty === true) {
        let cards = document.getElementsByClassName('card');
        for (let i = 0; i < cards.length; i++) {
            cards[i].classList.remove('easy-card', 'no-display');
        }
        easyDifficulty = false;
        normalDifficulty = false;
    }
    return;
}

/**Creates the start button and appends it to the game area. Adds a 'click' event listener to trigger the shuffleCards function. */
function createStartButton() {
    let startButton = document.createElement('button');
    startButton.setAttribute('id', 'start-button');
    startButton.innerHTML = "START";
    startButton.addEventListener('click', shuffleCards);
    let cardsGrid = document.getElementsByClassName('cards-grid');
    cardsGrid[0].prepend(startButton);
}

//THE CODE MARKED IN THE shuffleCards FUNCTION WAS MADE USING LOGIC FROM A FREECODECAMP TUTORIAL AND CUSTOMISED: https://www.youtube.com/watch?v=ZniVgo8U7ek
/**Shuffles the cards, putting them in a random order. Triggers the startGame function. */
function shuffleCards() {
    let cards = document.getElementsByClassName('card');
    // ---------------------------------
    for (let i = 0; i < cards.length; i++) {
        let randomNumber = Math.floor(Math.random() * 24);
        cards[i].style.order = randomNumber;
    }
    // ---------------------------------
    startGame();
}

/**Disables leaderboard and help buttons, initiates countdown and adds a click event listener, triggering the flipCards function. */
function startGame() {
    // Disables leaderboard and help buttons.
    let leaderboardButton = document.getElementsByClassName('scoreboard');
    leaderboardButton[0].removeEventListener('click', showScoreboard);
    leaderboardButton[0].style.opacity = "0.5";
    leaderboardButton[0].style.cursor = "not-allowed";
    let helpButton = document.getElementsByClassName('help');
    helpButton[0].removeEventListener('click', showInstructions);
    helpButton[0].style.opacity = `0.5`;
    helpButton[0].style.cursor = "not-allowed";
    // Stops cat animation.
    let catAnimation = document.getElementById('cat-animation');
    catAnimation.classList.remove('moving-cat');
    // Removes the start button after one second and displays "3" in its place.
    let startButton = document.getElementById('start-button');
    startButton.remove();
    let countdown = document.createElement('p');
    countdown.classList.add('start-countdown');
    countdown.innerHTML = "3";
    let cardsGrid = document.getElementsByClassName('cards-grid');
    cardsGrid[0].append(countdown);
    setTimeout(() => {
        // Removes the "3" after one second and displays "2" in its place.
        countdown.innerHTML = "2";
        setTimeout(() => {
            // Removes the "2" after one second and displays "1" in its place.
            countdown.innerHTML = "1";
            setTimeout(() => {
                // Removes the "1" after one second and displays "GO!" in its place.
                countdown.innerHTML = "GO!";
                setTimeout(() => {
                    // Removes the countdown.
                    countdown.remove();
                }, 1000);
                // Immediately after "GO!" is removed, start the timer and add a click event listener to cards to trigger the flipCard function.
                startTimer();
                boardLocked = false;
                let cards = document.getElementsByClassName('card');
                for (let i = 0; i < cards.length; i++) {
                    cards[i].addEventListener('click', flipCard);
                }
            }, 1000);
        }, 1000);
    }, 1000);
}

/**Starts the countdown from 30 seconds for easy and normal modes, or 60 seconds for hard mode. If 0 is reached, the gameOver function is triggered. */
function startTimer() {
    // Makes quit button visible and interactive.
    let quitButton = document.getElementsByClassName('quit');
    quitButton[0].style.visibility = "visible";
    quitButton[0].addEventListener('click', restartMidGame);
    // Retrieve timer.
    let maxTime;
    let gameTimer = document.getElementsByClassName('timer');
    // If the game is being played on easy or normal mode, the maxTime is set to 29 seconds (+1 second as the cards can be clicked immediately after "GO!" displays).
    if (easyDifficulty === true || normalDifficulty === true) {
        maxTime = 29;
    } else {
        // If the game is being played on hard mode, the maxTime is set to 59 seconds (+1 second as the cards can be clicked immediately after "GO!" displays).
        maxTime = 59;
    }
    // Create timer.
    let timer = setInterval(() => {
        /* If the timer has more than 0 seconds remaining, show how many seconds are left
         in the gameTimer element. Then, deduct 1 second from the timer. */
        if (maxTime > 0) {
            // If there are less than 10 seconds on the timer, add a '0' before the number of seconds.
            gameTimer[0].innerHTML = `00:${maxTime < 10 ? '0' + maxTime : maxTime}`;
            maxTime--;
            // If the game was played on hard mode and all 24 cards are matched, reset the timer and trigger the youWin function.
            let cardFlipped = document.getElementsByClassName('card-flipped');
            if (maxTime > 0 && cardFlipped.length === 24) {
                clearInterval(timer);
                gameTimer[0].innerHTML = "00:00";
                youWin();
                // Start cat animation and hide the quit button.
                let catAnimation = document.getElementById('cat-animation');
                catAnimation.classList.add('moving-cat');
                quitButton[0].style.visibility = "hidden";
                // If the game was played on normal mode and all 16 cards are matched, reset the timer and trigger the youWin function.
            } else if (normalDifficulty === true && cardFlipped.length === 16) {
                clearInterval(timer);
                gameTimer[0].innerHTML = "00:00";
                youWin();
                // Start cat animation and hide the quit button.
                let catAnimation = document.getElementById('cat-animation');
                catAnimation.classList.add('moving-cat');
                quitButton[0].style.visibility = "hidden";
            }
            // If the game was played on easy mode and all 12 cards are matched, reset the timer and trigger the youWin function.
            else if (easyDifficulty === true && cardFlipped.length === 12) {
                clearInterval(timer);
                gameTimer[0].innerHTML = "00:00";
                youWin();
                // Start cat animation and hide the quit button.
                let catAnimation = document.getElementById('cat-animation');
                catAnimation.classList.add('moving-cat');
                quitButton[0].style.visibility = "hidden";
            }
            // If the quit button has been clicked on before the timer has reached 0, reset the timer to 0.
            if (maxTime > 0 && startAgain === true) {
                clearInterval(timer);
                gameTimer[0].innerHTML = "00:00";
                startAgain = false;
                // Start cat animation.
                let catAnimation = document.getElementById('cat-animation');
                catAnimation.classList.add('moving-cat');
            }
            /* If the timer reaches 0, show "00:00!" in the timer display, and trigger the gameOver function.*/
        } else {
            gameTimer[0].innerHTML = "00:00";
            clearInterval(timer);
            gameOver();
            // Start cat animation and hide the quit button.
            let catAnimation = document.getElementById('cat-animation');
            catAnimation.classList.add('moving-cat');
            quitButton[0].style.visibility = "hidden";
        }
    }, 1000);
}

//THE CODE IN THE flipCard FUNCTION WAS SOURCED FROM A FREECODECAMP TUTORIAL AND CUSTOMISED: https://www.youtube.com/watch?v=ZniVgo8U7ek
//---------------------------------------------------------------------------------------------------------
/** Allows the cards to be flipped in pairs, then triggers the checkCards function to see if the cards match. */
function flipCard() {
    // If the cards cannot be flipped, stop the function.
    if (boardLocked) return;
    // If the same card is clicked on twice, stop the function so it doesn't match with itself.
    if (this === firstCard) return;
    // Adds a 'flip' class to the card element. This allows the card to be flipped.
    this.classList.add('flip');
    if (!flippedCard) {
        // When the first card has been clicked on, flippedCard becomes true. It has been flipped once.
        flippedCard = true;
        firstCard = this;
    } else {
        // When the second card has been clicked on, flippedCard is set back to false and the checkCards function is called to see if the cards match.
        flippedCard = false;
        secondCard = this;
        checkCards();
    }
}
//---------------------------------------------------------------------------------------------------------

//SOME OF THE CODE IN THE checkCards FUNCTION WAS SOURCED FROM A FREECODECAMP TUTORIAL AND CUSTOMISED: https://www.youtube.com/watch?v=ZniVgo8U7ek
//DATASET NAMES, CARD STYLES, ADDITION OF CLASS NAMES AND CALLING OF incrementScore FUNCTION ARE MY OWN.
//---------------------------------------------------------------------------------------------------------
/** Checks if cards match. If so, they disappear and cannot be clicked again. If not, they are flipped back to their original positions. 
 * Triggers the incrementScore function. */
function checkCards() {
    // If the cards match, hide the cards and remove the event listeners so they cannot be activated again.
    if (firstCard.dataset.name === secondCard.dataset.name) {
        firstCard.style.visibility = "hidden";
        firstCard.classList.add('card-flipped');
        firstCard.removeEventListener('click', flipCard);
        secondCard.style.visibility = "hidden";
        secondCard.classList.add('card-flipped');
        secondCard.removeEventListener('click', flipCard);
        // Unlock board and clear firstCard and secondCard values, allowing the pair-matching process to start again.
        resetBoard();
        // Increase the score as a match has been made.
        incrementScore();
    } else {
        // Stop the player from flipping cards.
        boardLocked = true;
        // If the cards don't match, flip them back over to their original positions, with a 1 second delay so the user can view the selected cards.
        setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            // Unlock board and clear firstCard and secondCard values, allowing the pair-matching process to start again.
            resetBoard();
        }, 1000);
    }
}
//---------------------------------------------------------------------------------------------------------

//THE CODE IN THE resetBoard FUNCTION WAS SOURCED FROM A FREECODECAMP TUTORIAL: https://www.youtube.com/watch?v=ZniVgo8U7ek
//---------------------------------------------------------------------------------------------------------
/**Allows the matching process to start again, letting the player flip 2 cards. */
function resetBoard() {
    flippedCard = false;
    boardLocked = false;
    firstCard = null;
    secondCard = null;
}
//---------------------------------------------------------------------------------------------------------

/**Quits the game when the player clicks on the 'quit' button during the game. */
function restartMidGame() {
    // Leaderboard and help buttons are accessible again and have full opacity.
    let leaderboardButton = document.getElementsByClassName('scoreboard');
    leaderboardButton[0].addEventListener('click', showScoreboard);
    leaderboardButton[0].style.opacity = "1";
    leaderboardButton[0].style.cursor = "pointer";
    let helpButton = document.getElementsByClassName('help');
    helpButton[0].addEventListener('click', showInstructions);
    helpButton[0].style.opacity = `1`;
    helpButton[0].style.cursor = "pointer";
    // Lock the board so no cards can be flipped.
    boardLocked = true;
    // Hide the quit button as it has been clicked.
    let quitButton = document.getElementsByClassName('quit');
    quitButton[0].style.visibility = "hidden";
    startAgain = true;
    // Get all the cards and remove the 'flip' class, so the player can no longer see the images.
    let cards = document.getElementsByClassName('card');
    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.remove('flip');
        setTimeout(() => {
            // Make all cards visible again after a 0.5 sec delay, so player cannot see the images on the cards as they turn.
            cards[i].style.visibility = "visible";
        }, 500);
    }
    // Show the difficulty buttons after a 0.5 second delay, enabling the player to select their preferred difficulty.
    setTimeout(() => {
        let difficultyContainer = document.getElementsByClassName('difficulty-container');
        difficultyContainer[0].style.visibility = "visible";
    }, 500);
}

/** Shows the player a 'YOU WON!' message with their total score, and lets them return the main page by clicking the 'EXIT' button. */
function youWin() {
    // Saves the player's score.
    saveScore();
    // Remove the click event listener from all cards.
    let cards = document.getElementsByClassName('card');
    for (let i = 0; i < cards.length; i++) {
        cards[i].removeEventListener('click', flipCard);
        // Remove the 'card-flipped' class from cards so the player's game progress and score is not carried over to the next game.
        cards[i].classList.remove('card-flipped');
    }
    let scoreCounter = document.getElementsByClassName('score-counter');
    // show the message "YOU WON!" to the player.
    let winningMessage = document.createElement('p');
    winningMessage.classList.add('winning-message');
    winningMessage.innerHTML = `
    <p>YOU WON!</p> 
    <p>Your score was ${scoreCounter[0].innerHTML}</p>
    `;
    let cardsGrid = document.getElementsByClassName('cards-grid');
    cardsGrid[0].append(winningMessage);
    // Add an 'EXIT' button to winning message so the player can return to the main page.
    let retryButton = document.createElement('button');
    retryButton.setAttribute('id', 'retry-button');
    retryButton.innerHTML = "EXIT";
    winningMessage.append(retryButton);
    retryButton.addEventListener('click', restartGame);
    // Leaderboard and help buttons are accessible again and have full opacity.
    let leaderboardButton = document.getElementsByClassName('scoreboard');
    leaderboardButton[0].addEventListener('click', showScoreboard);
    leaderboardButton[0].style.opacity = "1";
    leaderboardButton[0].style.cursor = "pointer";
    let helpButton = document.getElementsByClassName('help');
    helpButton[0].addEventListener('click', showInstructions);
    helpButton[0].style.opacity = `1`;
    helpButton[0].style.cursor = "pointer";
    // Reset the score to 0, ready for the next game.
    resetScore();
}

/**Stops the player flipping cards and displays a 'YOU LOSE!' message, showing them their total score. 
 * Lets the player return to the main page by clicking on the 'EXIT' button. */
function gameOver() {
    // Saves the player's score.
    saveScore();
    // Remove the click event listener from all cards.
    let cards = document.getElementsByClassName('card');
    for (let i = 0; i < cards.length; i++) {
        // Remove the 'card-flipped' class from cards so the player's game progress and score is not carried over to the next game.
        cards[i].removeEventListener('click', flipCard);
    }
    let scoreCounter = document.getElementsByClassName('score-counter');
    // show the message "YOU LOST!" to the player.
    let losingMessage = document.createElement('p');
    losingMessage.classList.add('losing-message');
    losingMessage.innerHTML = `
    <p>YOU LOST!</p> 
    <p>Your score was ${scoreCounter[0].innerHTML}</p>
    `;
    let cardsGrid = document.getElementsByClassName('cards-grid');
    cardsGrid[0].append(losingMessage);
    // Add an 'EXIT' button to winning message so the player can return to the main page.
    let retryButton = document.createElement('button');
    retryButton.setAttribute('id', 'retry-button');
    retryButton.innerHTML = "EXIT";
    losingMessage.append(retryButton);
    retryButton.addEventListener('click', restartGame);
    // Leaderboard and help buttons are accessible again and have full opacity.
    let leaderboardButton = document.getElementsByClassName('scoreboard');
    leaderboardButton[0].addEventListener('click', showScoreboard);
    leaderboardButton[0].style.opacity = "1";
    leaderboardButton[0].style.cursor = "pointer";
    let helpButton = document.getElementsByClassName('help');
    helpButton[0].addEventListener('click', showInstructions);
    helpButton[0].style.opacity = `1`;
    helpButton[0].style.cursor = "pointer";
    // Reset the score to 0, ready for the next game.
    resetScore();
}

/**Removes the winning or losing message once the 'EXIT' button has been clicked. Reset the game area and re-add the difficulty buttons for the player to choose their preferred difficulty. */
function restartGame() {
    // Whether the player won or lost the game, remove the message.
    let winningMessage = document.getElementsByClassName('winning-message');
    let losingMessage = document.getElementsByClassName('losing-message');
    if (winningMessage[0]) {
        winningMessage[0].remove();
    } else {
        losingMessage[0].remove();
    }
    // Get all the cards and remove the 'flip' class, so the player can no longer see the images.
    let cards = document.getElementsByClassName('card');
    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.remove('flip');
        setTimeout(() => {
            // Make all cards visible again after a 0.5 sec delay, so player cannot see the images on the cards as they turn.  
            cards[i].style.visibility = "visible";
        }, 500);
    }
    // Re-add the difficulty buttons with a 0.5 second delay, so they appear after all cards have turned.
    setTimeout(() => {
        let difficultyContainer = document.getElementsByClassName('difficulty-container');
        difficultyContainer[0].style.visibility = "visible";
    }, 500);
}

/**Calculates the score, increasing in multiples of 5, and shows the score in the relevant section of the header. */
function incrementScore() {
    let scoreCounter = document.getElementsByClassName('score-counter');
    let cardFlipped = document.getElementsByClassName('card-flipped');
    let score = (cardFlipped.length) * 2.5;
    scoreCounter[0].innerHTML = score;
    return score;
}

/**Resets the score to 0, removing the card-flipped class from all cards, ready for a new game. */
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

/**Takes the finishing score and pushes it into the scoreboard array, creating a collection of scores to be stored locally. */
function saveScore() {
    // Multiply the number of cards flipped by 2.5, and display the result in the relevant section in the header.
    let scoreCounter = document.getElementsByClassName('score-counter');
    let cardFlipped = document.getElementsByClassName('card-flipped');
    let score = (cardFlipped.length) * 2.5;
    scoreCounter[0].innerHTML = score;
    // Retrieve the name entered by the user when the session began.
    let username = document.getElementById('name');
    let name = username.value;
    // Group the player name and score into an object, so they are stored together.
    let nameAndScore = { name, score };
    // Push the grouped information to the scoreboard.
    scoreboard.push(nameAndScore);
    // Turn the score into a string and store it locally, so it can be accessed in future sessions.
    localStorage.setItem('score', JSON.stringify(scoreboard));
    return;
}

/**Creates the scoreboard, which is visible when the user clicks on the 'leaderboard' button. Displays the top 10 scores from all sessions on the user's device. */
function showScoreboard() {
    // Creates the leaderboard display that will be seen by the user.
    let scoreboardDisplay = document.createElement('div');
    scoreboardDisplay.setAttribute('class', 'scoreboard-display');
    scoreboardDisplay.innerHTML = `
    <button class="exit-scoreboard">X</button>
    <h2>LEADERBOARD</h2>
    <ul class="top-10">
    `;
    // Creates a variable made up of scoreboard array's content, after sorting the scores from highest to lowest, and taking the values from indexes 0 - 9.
    let top10 = scoreboard.sort((a, b) => b.score - a.score).slice(0, 10);
    let listTop10 = scoreboardDisplay.getElementsByClassName('top-10');
    // Loops through the objects and displays the values for name and score.
    top10.forEach((value) => {
        // If no name was entered at the beginning of the session, use the name, 'GUEST', followed by the player's score.
        if (value.name == '') {
            listTop10[0].innerHTML += `<li><span class="player-name">GUEST</span> : <span class="player-score">${value.score}</span></li>`;
        } else {
            // Display the name the player entered at the beginning of the session and their score.
            listTop10[0].innerHTML += `<li><span class="player-name">${value.name}</span> : <span class="player-score">${value.score}</span></li>`;
        }
    });
    // Close the ul tag and add the cat image to the leaderboard display.
    scoreboardDisplay.innerHTML += `
    </ul>
    <img src="assets/images/cartoon-cat-vector.png" alt="cartoon cat" class="cat-leaderboard">
    `;
    // Attach the leaderboard to the body and add an event listener to exit the leaderboard.
    let body = document.getElementsByTagName('body');
    body[0].prepend(scoreboardDisplay);
    let exit = document.getElementsByClassName('exit-scoreboard');
    exit[0].addEventListener('click', closeScoreboard);
    /**Exit the leaderboard and return to the main page. */
    function closeScoreboard() {
        scoreboardDisplay.removeAttribute('id', 'scoreboard-display');
        scoreboardDisplay.style.display = "none";
    }
}