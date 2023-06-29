# **Go Match! Cats**

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

![Genshin Impact's event page](/assets/images/readme-images/genshin-impact.png)

The above image was sourced from [https://genshin.hoyoverse.com/en/home](https://genshin.hoyoverse.com/en/home).

- Very colourful
- Anime-style art
- Cute characters
- Vibrant images

#### [**Studio Ghibli**](https://www.studioghibli.com.au/)

![Studio Ghibli's My Neighbor Totoro](/assets/images/readme-images/sg-my-neighbor-totoro.png)
![Studio Ghibli's Spirited Away](/assets/images/readme-images/sg-spirited-away.png)
![Studio Ghibli's The Cat Returns](/assets/images/readme-images/sg-the-cat-returns.png)

The above images were sourced from [https://www.studioghibli.com.au/](https://www.studioghibli.com.au/).

- Very colourful
- Cute anime-style art
- Beautiful images

#### [**Pokemon**](https://www.pokemon.com/us)

![Pokemon's Detective Pikachu Returns on Nintendo Switch](/assets/images/readme-images/pokemon.png)

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

- I want to see how my scores compare with others.
- I want to see what my best score was.
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

![Wireframes on desktop devices](/assets/images/readme-images/wireframes-desktop.png)

---

#### **Wireframes on Tablet Devices**

![Wireframes on tablet devices](/assets/images/readme-images/wireframes-tablet.png)

---

#### **Wireframes on Mobile Devices**

![Wireframes on mobile devices](/assets/images/readme-images/wireframes-mobile.png)

---

### **Surface Plane**

After establishing the structure and general design of the page, I moved onto the design phase, where I considered colour schemes,
typography and imagery.

#### **Colour Scheme**

Considering the themes of the products I researched in the Strategy Plane, I wanted to use bright colours to convey a positive and exciting experience.

I utilised Bing's AI image generator, powered by DALL-E, to explore card designs and looked for one that matched my design. Some of the images returned had darker colours, which I felt didn't convey the light-hearted and cute theme, and others used too many colours which were too strong. After a short time, the image below was generated. The blend of pale yellow, pink and blue, with a soft shine, was a perfect fit for the game. The colours weren't overpowering, but pleasant to look at.   

![The design of the back of the memory cards](/assets/images/card-back2.jpg)

Having the card colours in mind, I considered darker colours for the background, so the cards would stand out. I initially selected a darker blue, but found that the plain background wasn't contributing to the theme beyond drawing attention to the cards. I utilised ColorHunt to explore palettes, and paid special attention to those with the 'happy' keyword. I was particularly interested in the palette below, as the colours were similar to some of those on the card backs.

![Color Hunt 'happy' Palette](/assets/images/readme-images/color-hunt-palette.png)

![Color Hunt 'happy' Palette Hexadecimal and RGB Reference](/assets/images/readme-images/color-hunt-palette-details.png)

However, as these colours were too light, and would not have good contrast with the cards, I selected similar colours and blended them with the initial darker shade of the blue in a linear-gradient. This darker shade of blue is also used for the cards' borders, to ensure that each card is well-defined and appears to have some depth.

From left to right in the images below, the colours used are: **rgb(0, 0, 52)**, **rgb(85, 163, 189)**, **lightpink**.

![rgb(0, 0, 52) dark blue](/assets/images/readme-images/colours-dark-blue.png)
![rgb(85, 163, 189) light blue](/assets/images/readme-images/colours-light-blue.png)
![lightpink](/assets/images/readme-images/colours-light-pink.png)

#### **Typography**

The font used across the webpage is 'Mochiy Pop One', a sans-serif font from Google Fonts. I selected this font because of its informal and playful appearance. Similar to the font used in the Genshin Impact image below, it is consistent with the style and fits perfectly with the design.

*Genshin Impact's font*

![Genshin Impact font](/assets/images/readme-images/genshin-impact-font.png) 

*'Mochiy Pop One' font*

!['Mochiy Pop One' font](/assets/images/readme-images/mochiy-pop-one-font.png) 

#### **Imagery**

Having decided on a cute anime theme, I wanted to use images that were consistent with that style for the cards. I returned to Bing's AI image generator and searched for cats in an anime art style. I performed multiple searches and put together a collection of the highest quality images, which can be seen below. I was eager to use similar images in order to increase the difficulty of the game and encourage players to pay attention to the details. 

![Go Match! Cats Card Image 1](/assets/images/readme-images/cats-1.jpg)
![Go Match! Cats Card Image 2](/assets/images/readme-images/cats-2.jpg)
![Go Match! Cats Card Image 3](/assets/images/readme-images/cats-3.jpg)
![Go Match! Cats Card Image 4](/assets/images/readme-images/cats-4.jpg)
![Go Match! Cats Card Image 5](/assets/images/readme-images/cats-5.jpg)
![Go Match! Cats Card Image 6](/assets/images/readme-images/cats-6.jpg)
![Go Match! Cats Card Image 7](/assets/images/readme-images/cats-7.jpg)
![Go Match! Cats Card Image 8](/assets/images/readme-images/cats-8.jpg)
![Go Match! Cats Card Image 9](/assets/images/readme-images/cats-9.jpg)
![Go Match! Cats Card Image 10](/assets/images/readme-images/cats-10.jpg)
![Go Match! Cats Card Image 11](/assets/images/readme-images/cats-11.jpg)
![Go Match! Cats Card Image 12](/assets/images/readme-images/cats-12.jpg)

[Back to top](https://github.com/alicehillier/go-match-cats/#go-match-cats)

## **Features**

### **Existing Features**
### **Features to be implemented in the future**

[Back to top](https://github.com/alicehillier/go-match-cats/#go-match-cats)

## **Technology Used**

### **Main Languages**

### **Frameworks, Libraries and Programmes**

[Back to top](https://github.com/alicehillier/go-match-cats/#go-match-cats)

## **Issues and Bugs**

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

freeCodeCamp's video tutorial: https://www.youtube.com/watch?v=ZniVgo8U7ek

## **Acknowledgements**

