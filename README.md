# Rock, Paper, Scissors, Lizard, Spock Game

Rock, Paper, Scissors, Lizard and Spock Game is a simple and easy to understand game, it is a derivation of the rock, paper, scissors game.

It was created based on the television series "The Big Bang Theory".

The game can be played by both adults and children. To start it is very simple, the user selects one of the options and the computer randomly chooses an option. Once both players have chosen their options, the game will show who won and which option was chosen by each. Depending on who wins, your score will be updated and the game will continue as long as the user is interested.

The game is compatible with any screen size, from cell phones to computer screens.

![Responsive_Web_Site](./assets/image/screenshots/responsive%20design.JPG)

# Features

### Existing Features

- Featured at the top of the page the header shows the game name and has a clearly contrast with the background.

- The header tells the user what game they are playing.

![Header](./assets/image/screenshots/header.JPG)

- __The Game Options__

    - The games options include clear instruction in the section rules and the choice of buttons: Rock, Paper, Scissors, Lizard and Spock. 

    - These options are interactive, and the user can click to make their choice.

![Game_Choice](./assets/image/screenshots/buttons.JPG)

- __Game area__

    - If the user chooses an option, the image will change to the one he chooses and randomly, the computer image will also change.

    - After the computer randomly chooses one, it will be determined the victory of one of the two.

    - The winner is announced to the user above the options button, and the score is updated for either the user or the computer, depending on who on.

    - The results ans score are clear to the user, making the game easy to play, understand who won and waht the score is.

![Game_Area](./assets/image/screenshots/game-area.JPG)

- __Rules area__

     - The section rules show the rules of the game to the user.

![Rules_area](./assets/image/screenshots/rules.JPG)

# Design

- Color Scheme:

   - I trialled many different color palettes whilst building the game and settled on lighter colors which makes a good contrast with the orange of the background image
 that show the idea of ​​a game. The choice of colors was to provide the maximum possible contrast and make it easy for the user to see. The rules section has been placed in black color and large letters so the user can easily understand why he/she or the computer won that match.

### #0000

 ![#0000](./assets/image/screenshots/%230000.JPG)

### #07D2EB

 ![#07D2EB](./assets/image/screenshots/%2307D2EB.JPG)

### #00008B

 ![#00008B](./assets/image/screenshots/%2300008B.JPG)

### #ADFF2F

 ![#ADFF2F](./assets/image/screenshots/%23adff2f.JPG)

### #DF9729

 ![#DF9729](./assets/image/screenshots/%23DF9729.JPG)

### #FFFFF

 ![#FFFFF](./assets/image/screenshots/%23FFFFF.JPG)

- Background

  - The chosen background is an image that constantly appears in the television series "The Big Bang Theory", which created the game and inspired the project.

![background_image](./assets/image/background.jpg)

- Typography

  - I choose 'Noto Sans' as the font for the site. It is a big bold type that stands out from the background well and is easy to read.

![noto_sans](./assets/image/screenshots/font.JPG)

- The images of each game option were chosen according to the initial image of each player, thus being easy to understand.

![game_options](./assets/image/screenshots/game-options.JPG)

# Testing

### Lighthouse

- The web page was tested using the Lighthouse feature on the chrome browser giving the following result.

![lighthouse](./assets/image/screenshots/lighthouse.JPG)

### Validator testing

- HTML
    - No errors were returned when passing through the official W3C validator.

![HTML_validator](./assets/image/screenshots/HTML%20validator.JPG)

- CSS
    - No errors were returned when passing through the official (Jigsaw) validator.

![CSS_validator](./assets/image/screenshots/CSS%20validator.JPG)

- JavaScript
    - No errors were found when passing through the official Jshint validator.

![js_validator](./assets/image/screenshots/js-validator.JPG)

- WAVE Web Accessibility Evaluation Tool

    - The WAVE tool was used to test the page for accessibility.

![wave_validator](./assets/image/screenshots/wave-validator.JPG)

- I decided to check the webpage in two other accessibility checkers namely color.a11y.com and audit.deque.com. Both of these sites reported no errors.

![color_a11_validator](./assets/image/screenshots/color-a11-validator.JPG)

![deque_validator](./assets/image/screenshots/deque-validator.JPG)

### Responsiveness

 - Media queries based on screen width were used to ensure the page displayed correctly across a range of screen sizes. the Chrome and Edge browsers were used to test responsiveness. I also used the device specific tool within these browsers to test a number of devices representng a wide range of device types.
The results are given below.

  |Device               |Result                       |
  |---------------------|-----------------------------|
  | Iphone SE           | Displays ok                 |
  | Iphone XR           | Displays ok                 | 
  | Iphone 12 pro       | Displays ok                 | 
  | iPhone 6/7/8        | Displays ok                 | 
  | Ipad Mini           | Displays ok                 |
  | Ipad Air            | Displays ok                 | 
  | Galaxy Fold         | Displays ok                 |
  | Surface Pro 7       | Displays ok                 |
  | Surface Duo         | Displays ok                 | 
  | Samsumg Galaxy A51  | Displays ok                 | 
  | Nest Hub            | Displays ok                 | 
  | Nest Hub Max        | Displays ok                 |

### Game results

 - I tested the game results and are always correct.

# Unfixed Bugs

- No unfixed bugs.

# Deployment

This project was built on the Gitpod IDE using the Code Institute template found here:<br>https://github.com/Code-Institute-Org/gitpod-full-template

### GitHub Pages
   
  GitHub Pages is a static site hosting service which uses files from a GitHub repository to publish a website.  I used Github Pages to deploy this project
    following the process set out below.  
    
  1. Open the Github repository page you wish to publish.
  1. Click on the 'Settings' option from the list of options above the repo contents.
  1. Scroll down the page untill the Github Pages heading appears and click on the link 'Check it out here!".
  1. Select Branch Main and leave /root unchanged.
  1. Click 'Save'.
  1. The URL for the website will be shown in a panel towards the top of the page.  After a brief wait it will turn green indicating the website is published.

### Forking
  Forking a Github repository is the the process of making a copy of any repository that you can use without affecting the original, this original is known as the 
  "upstream repository".
  The process for forking a repository is set out below.
  1. Go to the Github page that hosts the repository you wish to fork.
  1. On the top-right of the page there is a button "Fork".
  1. Click this button.
  1. This creates a repository in your Github home page which is a copy of the original. You can submit and receive changes to the code by using pull requests 
  and/or syncing with the upstream repository.

### Cloning 
  Cloning a repository involves making a full copy of that repository on your local machine. This makes working on the code easier.  Changes can be pushed back up to the 
  GitHub site or changes from other sources pulled to your local copy. To make a clone follow the process below.
  1. Goto the repository page on GitHub.
  1. Above the file list click on the green button titled "Code".
  1. You can choose to download a zip file of the repository, unpack it on your local machine and open it in your IDE or,
  1. Clone using HTTPS by copying the URL under the HTTPS tab.
  1. Open a terminal window, set current directory to the one you want to contain the clone.
  1. Type `git clone `and paste the URL copied from the GitHub page.
  1. The repository clone will be created on your machine.

The live link can be found here - https://lcassis10.github.io/second-project/

# Credits

 ### Content

  - When making my project, I was inspired by the Code Institute Rock, Paper, Scissors, Lizard, Spock idea.

  - Font was sourced from Google Fonts https://fonts.google.com/

 ### Media

  - Pictures were taken from the Google Images.

