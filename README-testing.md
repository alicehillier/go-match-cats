# **Go-Match! Cats - Testing**

[Go back to the README index](https://github.com/alicehillier/rainforest-cafe#go-match-cats)

[Go back to the Testing section of the README](https://github.com/alicehillier/go-match-cats#testing)

[Visit my website here](https://alicehillier.github.io/go-match-cats)

## **User Stories**

#### **First-Time Visitor Goal**

1. I want to read instructions about how to play the game.
    - Instructions about how to play the game can be found by clicking on the 'HELP' button in the header.

2. I want to be able to restart the game before the round is over.
    - While a game is in progress, a 'QUIT' button will appear in the header. When clicked, the game will restart and allow the player to select a different difficulty level.

3. I want to see colourful, visually-appealing images.
    - The background colours are bright, with a mix of blue and pink. The cartoon cat image is used regularly on larger screens, appearing in the title bar, as an animation at the bottom of the screen, in the leaderboard and instructions. On small screens, the cat animation can be seen in the header instead of the page title.

4. I want to be able to view the cards when I flip them.
    - Once two cards have been flipped, if they do not match, there is a one-second delay before the cards flip back over, allowing the player to view the images.

5. I want to know how much time I have to complete the game.
    - Once a game has begun, the timer in the top left corner starts the countdown, allowing the player to see how much time they have remaining to complete the game.

#### **Returning Visitor Goal**

1. I want to see what my score was last time (and see if I can do better this time).
    - Players can access the leaderboard before a game begins and after a game finishes. As the score is stored in local storage after every game, players can access their top scores beyond this session.
    If players share a device, they can enter their names at the beginning of the session to ensure that they can identify their own scores.

2. I want the cards to change positions every time I play.
    - The cards are shuffled before every game begins, ensuring a different experience every time. By adding some unpredictability, the game becomes more re-playable and enjoyable for the player.

#### **Frequent Visitor Goal**

1. I want to see what my best score was and how my scores compare with others.
    - Players can access the leaderboard before a game begins and after a game finishes. Players can enter their name at the beginning of the session, which will appear on the leaderboard. The leaderboard uses data stored in local storage, so in order to view others' scores, players must use the same device.

3. I want more levels to play.
    - Players can play the game on easy, normal or hard mode, which enables them to experience a new challenge every time. While new levels are not available at the moment, additional themes could be introduced in future.

4. I want to choose the level of difficulty.
    - Players can play the game on easy, normal or hard mode. Each mode offers a different number of cards, offering a greater challenge for players if they desire. Easy and normal mode have a time limit set at 30 seconds, while hard mode has a time limit set at 60 seconds. While it is more challenging, it is still possible to win with the additional time.

## **Manual Testing**

### **Homepage Responsive Design Testing**

The website has been designed to be responsive using media queries. Below are examples of the website's appearance on various devices.

iPhone SE

![iPhone SE](assets/images/readme-images/testing/iphone-se.png)

iPhone XR

![iPhone XR](assets/images/readme-images/testing/iphone-xr.png)

iPhone 12 Pro

![iPhone 12 Pro](assets/images/readme-images/testing/iphone-12-pro.png)

Google Pixel 5

![Google Pixel 5](assets/images/readme-images/testing/pixel-5.png)

Samsung Galaxy S8+

![Samsung Galaxy S8+](assets/images/readme-images/testing/samsung-galaxy-s8+.png)

Samsung Galaxy S20 Ultra

![Samsung Galaxy S20 Ultra](assets/images/readme-images/testing/samsung-galaxy-s20-ultra.png)

iPad Mini

![iPad Mini](assets/images/readme-images/testing/ipad-mini.png)

iPad Air

![iPad Air](assets/images/readme-images/testing/ipad-air.png)

## **Validation and Lighthouse**

### **W3C HTML Validation**

### **Jigsaw CSS Validation**

### **Jshint JavaScript Validation**

### **Lighthouse Testing**

#### **Go-Match! Cats on Desktop**

#### **Go-Match! Cats on Mobile**

## **User Testing**

## **Further Testing**

This website was tested on a variety of devices, including Windows laptops, iPhone 12 Mini and iPad Air. It was also tested on different browsers, including Google Chrome and Safari (iOS).