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