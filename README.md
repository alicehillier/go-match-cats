# **Go Match! Cats**

![The game as it appears on it different devices](assets/images/readme-images/devices-overview.png)

[Visit my website here](https://alicehillier.github.io/go-match-cats/)

1. [Introduction](https://github.com/alicehillier/go-match-cats/#introduction)

2. [UX Design](https://github.com/alicehillier/go-match-cats/#ux-design)

    i. [Strategy Plane](https://github.com/alicehillier/go-match-cats/#strategy-plane)

    ii. [Scope Plane](https://github.com/alicehillier/go-match-cats/#scope-plane)
    
    iii. [Structure Plane](https://github.com/alicehillier/go-match-cats/#structure-plane)

    iv. [Skeleton Plane/Wireframes](https://github.com/alicehillier/go-match-cats/#skeleton-plane)

    v. [Surface Plane](https://github.com/alicehillier/go-match-cats/#surface-plane)

3. [Features](https://github.com/alicehillier/go-match-cats/#features)

    i. [Existing Features](https://github.com/alicehillier/go-match-cats/#existing-features)

    ii. [Features to be implemented in the future](https://github.com/alicehillier/go-match-cats/#features-to-be-implemented-in-the-future)

4. [Technology Used](https://github.com/alicehillier/go-match-cats/#technology-used)

    i. [Main Languages](https://github.com/alicehillier/go-match-cats/#main-languages)

    ii. [Frameworks, Libraries and Programmes](https://github.com/alicehillier/go-match-cats/#frameworks-libraries-and-programmes)

5. [Issues and Bugs](https://github.com/alicehillier/go-match-cats/#issues-and-bugs)

6. [Deployment](https://github.com/alicehillier/go-match-cats/#deployment)

7. [Testing](https://github.com/alicehillier/go-match-cats/#testing)

8. [Credits](https://github.com/alicehillier/go-match-cats/#credits)

9. [Acknowledgements](https://github.com/alicehillier/go-match-cats/#acknowledgements)

## **Introduction**

[Go Match! Cats](https://alicehillier.github.io/go-match-cats/) is a memory game in which players are tasked with matching cards within a time limit. The game is suitable for all ages and has a cute, anime style. It is designed to be a casual, fun and visually-appealing game. 

This game has been created by Alice Hillier for the second project in Code Institute's Software Development Programme.

[Back to top](https://github.com/alicehillier/go-match-cats/#go-match-cats)

## **UX Design**

### **Strategy Plane**

In the initial stages of the design process, I researched common features of this particular type of memory game, as well as popular styles and themes. Some of the products researched were:

#### [**Genshin Impact**](https://genshin.hoyoverse.com/en/home)

![Genshin Impact's event page](assets/images/readme-images/genshin-impact.png)

The above image was sourced from [https://genshin.hoyoverse.com/en/home](https://genshin.hoyoverse.com/en/home).

- Very colourful
- Anime-style art
- Cute characters
- Vibrant images

#### [**Studio Ghibli**](https://www.studioghibli.com.au/)

![Studio Ghibli's My Neighbor Totoro](assets/images/readme-images/sg-my-neighbor-totoro.png)
![Studio Ghibli's Spirited Away](assets/images/readme-images/sg-spirited-away.png)
![Studio Ghibli's The Cat Returns](assets/images/readme-images/sg-the-cat-returns.png)

The above images were sourced from [https://www.studioghibli.com.au/](https://www.studioghibli.com.au/).

- Very colourful
- Cute anime-style art
- Beautiful images

#### [**Pokemon**](https://www.pokemon.com/us)

![Pokemon's Detective Pikachu Returns on Nintendo Switch](assets/images/readme-images/pokemon.png)

The above image was sourced from [https://www.pokemon.com/us](https://www.pokemon.com/us).

- Vibrant colours
- Cute, anime/cartoon-style art
- Adorable, unique creatures

### **User Stories**

#### **First-Time Visitor Goal**

- I want to read instructions about how to play the game.
- I want to be able to restart the game before the round is over.
- I want to see colourful, visually-appealing images.
- I want to be able to view the cards when I flip them.
- I want to know how much time I have to complete the game.

#### **Returning Visitor Goal**

- I want to see what my score was last time (and see if I can do better this time).
- I want the cards to change positions every time I play.

#### **Frequent Visitor Goal**

- I want to see what my best score was and how my scores compare with others.
- I want more levels to play.
- I want to choose the level of difficulty.

### **Scope Plane**

Based on the research conducted in the Strategy Plane, I decided to use the following features in the Go Match! Cats game:

#### **Taking inspiration from the products researched in the Strategy Plane:**

- Plenty of colour to make the game visually appealing
- Cute anime-style images of cats

#### **Drawing conclusions from the User Stories in the Strategy Plane:**

- Instructions so the player can check how to play the game
- 12 cards, each with a duplicate (24 cards in total) to ensure the game is challenging enough
- All cards will change position every time the game is played
- A timer, so the player can see how long they have to complete the challenge
- A 'you win!' message if the player completes the game within the set timeframe
- A 'you lose!' message if the timer reaches '00:00' before the player completes the game
- An option to replay the game, whether the player wins or loses
- An option to restart the game while the game is still in progress

#### **Considering functionality requirements:**

- The game area will take up most of the viewport
- Cards will be large enough to view images on all screen sizes
- Instructions can be navigated to easily and quickly, and players can return to the game area in one click

[Back to top](https://github.com/alicehillier/go-match-cats/#go-match-cats)

### **Structure Plane**

When planning the construction of the game, I decided that the entire page's content should fit into the viewport.
This is because when the user is playing the game, scrolling could waste time, cause confusion and break the flow of the game.

Rather than having a separate page for the instructions, I decided to have it act as an overlay once the 'help' button is clicked. 
The instructions can be closed by clicking on the 'X' in the top right corner of the page.
This means that a page does not need to be loaded each time the user clicks on 'help' or exits the instructions.

The structure and process of playing the game adheres to the conventions of a memory game, ensuring that it is intuitive for users who have played
a memory card game before. For those who have not played before, the simple rules will be well-explained in the instructions.

[Back to top](https://github.com/alicehillier/go-match-cats/#go-match-cats)

### **Skeleton Plane**

When designing the game, I created low-fidelity wireframes using Balsamiq. These wireframes, which can be found below, show what the website would look like on 
desktop, tablet and mobile devices. 

#### **Wireframes on Desktop Devices**

![Wireframes on desktop devices](assets/images/readme-images/wireframes-desktop.png)

---

#### **Wireframes on Tablet Devices**

![Wireframes on tablet devices](assets/images/readme-images/wireframes-tablet.png)

---

#### **Wireframes on Mobile Devices**

![Wireframes on mobile devices](assets/images/readme-images/wireframes-mobile.png)

---

### **Surface Plane**

After establishing the structure and general design of the page, I moved onto the design phase, where I considered colour schemes,
typography and imagery.

#### **Colour Scheme**

Considering the themes of the products I researched in the Strategy Plane, I wanted to use bright colours to convey a positive and exciting experience.

I utilised Bing's AI image generator, powered by DALL-E, to explore card designs and looked for one that matched my design. Some of the images returned had darker colours, which I felt didn't convey the light-hearted and cute theme, and others used too many colours which were too strong. After a short time, the image below was generated. The blend of pale yellow, pink and blue, with a soft shine, was a perfect fit for the game. The colours weren't overpowering, but pleasant to look at.   

![The design of the back of the memory cards](assets/images/readme-images/card-back.jpg)

Having the card colours in mind, I considered darker colours for the background, so the cards would stand out. I initially selected a darker blue, but found that the plain background wasn't contributing to the theme beyond drawing attention to the cards. I utilised ColorHunt to explore palettes, and paid special attention to those with the 'happy' keyword. I was particularly interested in the palette below, as the colours were similar to some of those on the card backs.

![Color Hunt 'happy' Palette](assets/images/readme-images/color-hunt-palette.png)

![Color Hunt 'happy' Palette Hexadecimal and RGB Reference](assets/images/readme-images/color-hunt-palette-details.png)

However, as these colours were too light, and would not have good contrast with the cards, I selected similar colours and blended them with the initial darker shade of the blue in a linear-gradient. This darker shade of blue is also used for the cards' borders, to ensure that each card is well-defined and appears to have some depth.

From left to right in the images below, the colours used are: **rgb(0, 0, 52)**, **rgb(85, 163, 189)**, **lightpink**.

![rgb(0, 0, 52) dark blue](assets/images/readme-images/colours-dark-blue.png)
![rgb(85, 163, 189) light blue](assets/images/readme-images/colours-light-blue.png)
![lightpink](assets/images/readme-images/colours-light-pink.png)

#### **Typography**

The font used across the webpage is 'Mochiy Pop One', a sans-serif font from Google Fonts. I selected this font because of its informal and playful appearance. Similar to the font used in the Genshin Impact image below, it is consistent with the style and fits perfectly with the design.

*Genshin Impact's font*

![Genshin Impact font](assets/images/readme-images/genshin-impact-font.png) 

*'Mochiy Pop One' font*

!['Mochiy Pop One' font](assets/images/readme-images/mochiy-pop-one-font.png) 

#### **Imagery**

Having decided on a cute anime theme, I wanted to use images that were consistent with that style for the cards. I returned to Bing's AI image generator and searched for cats in an anime art style. I performed multiple searches and put together a collection of the highest quality images, which can be seen below. I was eager to use similar images in order to increase the difficulty of the game and encourage players to pay attention to the details. 

![Go Match! Cats Card Image 1](assets/images/readme-images/cats-1.jpg)
![Go Match! Cats Card Image 2](assets/images/readme-images/cats-2.jpg)
![Go Match! Cats Card Image 3](assets/images/readme-images/cats-3.jpg)
![Go Match! Cats Card Image 4](assets/images/readme-images/cats-4.jpg)
![Go Match! Cats Card Image 5](assets/images/readme-images/cats-5.jpg)
![Go Match! Cats Card Image 6](assets/images/readme-images/cats-6.jpg)
![Go Match! Cats Card Image 7](assets/images/readme-images/cats-7.jpg)
![Go Match! Cats Card Image 8](assets/images/readme-images/cats-8.jpg)
![Go Match! Cats Card Image 9](assets/images/readme-images/cats-9.jpg)
![Go Match! Cats Card Image 10](assets/images/readme-images/cats-10.jpg)
![Go Match! Cats Card Image 11](assets/images/readme-images/cats-11.jpg)
![Go Match! Cats Card Image 12](assets/images/readme-images/cats-12.jpg)

[Back to top](https://github.com/alicehillier/go-match-cats/#go-match-cats)

## **Features**

### **Existing Features**

#### Favicon

![Cat favicon in title bar](assets/images/readme-images/features/features-favicon.png)

The title bar includes a small cartoon cat, which is used throughout the page. This establishes the theme of the game and makes the tab easy to identify.

#### Header Elements

![Header with interactive features](assets/images/readme-images/features/features-header.png)

##### Timer

The timer adds a degree of challenge to the game. With only 30 seconds to complete the round, players will have to focus and make quick decisions in order to succeed. 

Located in the top left corner of the screen, the timer is easy to find. It is uncluttered with no distractions nearby, so players will be able to keep track of time while playing. The timer, along with other elements in the header, has been designed to fit within the viewport of all screen sizes, meaning players won't need to scroll to view how much time is remaining, or indeed to return to the game area.

##### Scoring System

A scoring system offers a reward to the player, encouraging them to play more to achieve a higher score. With five points for every two cards matched, the maximum points can only be awarded if the user clears the board on hard mode.

##### Difficulty Label

Once a difficulty level has been selected by the player, it will be displayed in the header while the game is being played, so the player can see what they have selected.

##### Background Music with On/Off Controls

In keeping with the theme, I added happy, anime-inspired music, which can be played before, after and during the game. By default, the audio is turned off. To listen to the music, the user must click on the speaker icon with a cross in the header. Once the user does this, the icon will change to a speaker with increased volume, and the music will play. The user can turn the music off at any time by clicking on the icon, which will toggle to its previous state. 

##### Quit Button

![Quit button](assets/images/readme-images/features/features-quit-button.png)

The quit button appears only once the game has begun and disappearance once a game has finished. Its position in the header, alongside the "help" button, ensures that it is easy to find and interact with.

##### Instructions

![Instructions displayed to the user](assets/images/readme-images/features/features-instructions.png)

The instructions for the game can be found by clicking on the 'help' button. The player is only able to access the instructions before and after a game as the button is disabled while a game is in progress. 

Rather than navigating to another page, the instructions appear as an overlay and take up the full height and width of the viewport, eliminating distractions and ensuring that the text is cleanly displayed and easy to read. The instructions are well-spaced and offer information in bite-sized pieces, so users will not be overwhelmed or confused. 

To exit the instructions, users must click on the 'X' button placed in the top right corner of the page, the conventional layout for an intuitive and better user experience.

##### Leaderboard

![Leaderboard displayed to the user](assets/images/readme-images/features/features-leaderboard.png)

The leaderboard feature can be found by clicking on the 'leadboard' button. The player is only able to access the leaderboard before and after a game as the button is disabled while a game is in progress. 

The leaderboard adds a competitive element to the game, displaying the top scores recorded in local storage. The leaderboard has been implemented to encourage users to play the game repeatedly to beat the highest score.

#### Visuals

#### Cartoon Cat Animation

![Cat-animation](assets/images/readme-images/features/features-cat-animation.gif)

When the page loads, a small animated cat glides along the bottom of the screen repeatedly. Once a game begins, the animation stops and the cat remains static in the bottom left corner of the screen. This stops the animation from distracting the user while they are playing the game. As soon as the game is over, the animation is triggered again.

#### Game Features

##### Player Name

![Player name input area](assets/images/readme-images/features/features-set-name.png)

When the page loads, the user is asked to enter a name into the provided input field. If the player enters a name, this name will be displayed alongside the score on the leaderboard. If no name is provided, the default name 'GUEST' will display on the leaderboard instead.

##### Levels of Difficulty

![Difficulty buttons](assets/images/readme-images/features/features-difficulty-buttons.png)

Prior to starting the game, the player is required to select a difficulty level for the game. Appearing in order of increasing difficulty, the easy button generates a board of 12 cards, with 30 seconds to complete the game. Meanwhile, the normal button generates a board of 16 cards, also with 30 seconds to complete the game. Finally, the hard button generates a board of 24 cards, with 60 seconds to complete the game. Once the difficulty has been selected, it will be displayed in the header while the game is being played, so the player can see what they have selected.

##### Start Button

![Start Button](assets/images/readme-images/features/features-start-button.png)

Located in the centre of the game area, the start button is clearly labelled, with dark blue upper-case text on a white background. The button has a hover effect, which increases its size slightly and extends the shadow. When the player clicks on the start button,  the following text appears: "3", "2", "1", "GO!". There is short delay of one second between each message. As soon as "GO!" disappears, the 30-second timer begins and players are able to flip the cards.

##### Game Won Message

![Winning message](assets/images/readme-images/features/features-winning-message.png)

If the player matches all of the cards correctly before the timer reaches '00:00', a "YOU WIN!" message will appear in the centre of the game, following the conventions of other messages and buttons in the game. When this message appears, the timer will stop. Similarly to the game over message, the game won message will appear for only one second before being replaced with a button offering the player the opportunity to play again.

##### Game Over Message

![Losing message](assets/images/readme-images/features/features-losing-message.png)

If the timer runs out before the player has finished matching all of the cards, a "YOU LOSE!" message will appear in the centre of the game area. When this message appears, the timer will be set to '00:00' and the player will not be able to flip the cards. The game over message will remain on the screen for just one second before being replaced with a button offering the player the opportunity to try again.

##### Exit Button

The exit button appears inside the winning/losing message. It resets the game and gives the player the opportunity to select the difficulty level. The same steps are followed as in the initial process, so the user is required to click on 'start' in order to commence the game. This allows the user to start the game only when they are ready.

### **Features to be implemented in the future**

- Multiple versions of the game, such as Go Match! Dogs and Go Match! Cities.
- More animations and graphics.
- A more complex scoring system, taking into account the time taken to match all the cards.
- An in-game economy, where players are rewarded upon completion of a game and can unlock more levels/new cards/boosters.
- A player versus computer option in which the player competes with the computer to match the most cards.
- A multiplayer option in which two players compete to match the most cards.

[Back to top](https://github.com/alicehillier/go-match-cats/#go-match-cats)

## **Technology Used**

### **Main Languages**

- HTML
- CSS
- JavaScript

### **Frameworks, Libraries and Programmes**

[Back to top](https://github.com/alicehillier/go-match-cats/#go-match-cats)

## **Issues and Bugs**

-   Issue: When the youWin function had run once, the next game would instantly run the youWin function before any cards had been flipped.

    Solution: I removed the flippedCard class from the cards once the maximum number had been reached, resetting the number of cards flipped to zero.

-   Issue: The score from the previous game was being carried over to the next game.

    Solution: I created a resetScore function, which is called at the end of each game, after the score has been added to the scoreboard array.

-   Issue: The timer did not stop when the player clicks on the button to restart the game when a match is in progress.

    Solution: I created a variable called *startAgain* and set it to *false*. When the player clicks on the button, the variable is reassigned the value *true*. I then wrote a conditional statement for when *startAgain* is *true* and set the instructions to *clearInterval(timer)*. *startAgain* would then be set back to *false* so the process could be repeated.

-   Issue: When a player has played the game on easy mode and then selects a different difficulty the next game, the number of cards would not increase as they should.

    Solution: I created variables and assigned them boolean values. I used these variables to create conditionals within normalMode and hardMode functions, which removed the no-display class from the relevant number of cards labelled in the easyMode function.

-   Issue: The leaderboard showed 'undefined: undefined' or '{object}: {object}' instead of the name and score.

    Solution: After doing some research (and making plenty of unsuccessful attempts), I understood that the reason my code was failing was because I wasn't retrieving the data from the value in the parameter, instead trying to extract it directly from the array. Once I used the parameter (value) to access the data, the correct information appeared. 


[Back to top](https://github.com/alicehillier/go-match-cats/#go-match-cats)

## **Deployment**

### **Deployment to GitHub Pages**

The project was deployed to GitHub Pages using the following steps:

1. Log in to GitHub.
2. Navigate to the main page of GitHub Repository that will be deployed.
3. At the top of the Repository, find the "Settings" button on the menu and click on it.
4. Inside the settings, on the left side of the page, there’s a list of tab menu. Find the “Pages” tab, and click on it.
5. Under "Source", click on the dropdown item called "None", select "Master", and then click on the “Save” button.
6. The page will automatically refresh.
7. Now you should see a notification message that provides the now published site link: “Your site is ready to be published at [https://alicehillier.github.io/go-match-cats/](https://alicehillier.github.io/go-match-cats/)”.

### **Forking the GitHub Repository**

By forking the GitHub repository you can make a copy of the original repository on your GitHub account. You can view and/or make changes to this copy, without affecting the original repository, by using the following steps:

1. Log in to GitHub.
2. Navigate to the main page of the GitHub Repository that you want to fork.
3. At the top right of the Repository, just below your profile picture, find the "Fork" button.
4. You should now have a copy of the original repository in your GitHub account.
5. Changes made to the forked repository can be merged with the original repository via a pull request.

### **Making a Local Clone**

By cloning a GitHub Repository, you can create a local copy on your computer of the remote repository. This allows you to make all of your edits locally, rather than directly in the source files of the origin repository, by using the following steps:

1. Log in to GitHub
2. Navigate to the main page of the GitHub Repository that you want to clone.
3. Above the list of files, click on the dropdown item called "Code".
4. To clone the repository using HTTPS, copy the link under "HTTPS".
5. Open Git Bash.
6. Change the current working directory to the location where you want the cloned directory to be made.
7. Type `git clone`, and then paste the URL you copied in Step 4.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```

8. Finally, press Enter. Your local clone has now been created.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

Changes made on the local machine (cloned repository) can be pushed to the upstream repository directly if you have a write access for the repository. Otherwise, the changes made in the cloned repository are first pushed to the forked repository, and then a pull request is created.

[Click Here](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository) for a more comprehensive guide on how to complete the above process.

[Back to top](https://github.com/alicehillier/go-match-cats/#go-match-cats)

## **Testing**

[Click here to view all testing documentation](https://github.com/alicehillier/go-match-cats/blob/main/README-testing.md)

## **Credits**

- [freeCodeCamp's video tutorial](https://www.youtube.com/watch?v=ZniVgo8U7ek): This was used as a guide in putting together the game's functions.

- [ChatGPT](https://chat.openai.com/): This was used to break down complex concepts and have them explained in a clear and simple way.

- [Bing's AI image generator, powered by DALL-E](https://www.bing.com/create): This was used to create images for the cards and the card-back design.

- [CLEANPNG](https://www.cleanpng.com/png-final-fantasy-xiv-emoji-discord-emote-emoticon-tsu-1116959/): The cartoon cat image used throughout the project was sourced from this website.

- [Font Awesome](https://fontawesome.com/): The audio icons were sourced from this website.

## **Acknowledgements**

- My mentor, Oluwaseun Owonikoko, for her patience, guidance and consistent constructive feedback.
- My husband, Norman, for his support, advice and regular testing.
- My friends and family for testing the game and providing feedback.

[Back to top](https://github.com/alicehillier/go-match-cats/#go-match-cats)