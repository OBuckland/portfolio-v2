import profileImage1 from "./assets/portfolio-profile.jpg";
import masterMind from "./assets/mastermind.png";
import brewdog from "./assets/bewdog.png";
import calculator from "./assets/calculator2.png";
import hostileAliens from "./assets/hostile-aliens2.png";
import morseCode from "./assets/morsecode2.png";


export const projectData = [
    {
        name: "Mastermind",
        description: "This is a codebreaker game based on the Mastermind board game. Built using JavaScript, HTML, CSS, SCSS and BEM. This is a fully functional game, the computer will give the player feedback as they play.",
        image: masterMind,
        technology: "JavaScript",
        gitHub: "https://github.com/OBuckland/mastermind-game",
        url: "https://obuckland.github.io/mastermind-game/"    
    },
    {
        name: "Brewdog API",
        description: <p>This is a React built App. It displays Brewdog beers, each beer has a: name, image, ABV and tagline. There is a filter function to refine the user's search. <br /> <br />Data has been taken from the Punk API, which contained the beer data used for the app. Where possible the App has been unit tested using Enzyme.</p>,
        image: brewdog,
        technology: "React",
        gitHub: "https://github.com/OBuckland/mastermind-game",
        url: ""    
    },
    {
        name: "Hostile Aliens",
        description: "This game is loosely based on the Space Invaders arcade game. The game has been built using an OOP approach and unit tested using Jest. ",
        image: hostileAliens,
        technology: "JavaScript",
        gitHub: "https://github.com/OBuckland/hostile-aliens",
        url: "https://obuckland.github.io/hostile-aliens/"    
    },
    {
        name: "Calculator",
        description: "Calculator built using JavaScript, HTML, CSS, SCSS and BEM. This is a simple calculator that is able to perform addition, subtraction, division and multiplication. It also has a percentage function and can handle decimals.",
        image: calculator,
        technology: "Javascript",
        gitHub: "https://github.com/OBuckland/js-calculator",
        url: "https://obuckland.github.io/js-calculator/"
    },
    {
        name: "Morsecode Translator",
        description: "This translator can translate between Morse Code and English. The translator has been built using HTML, JavaScript and CSS. It has been tested using Jest.",
        image: morseCode,
        technology: "JavaScript",
        gitHub: "https://github.com/OBuckland/morse-code-translator",
        url: "https://obuckland.github.io/morse-code-translator/"    
    },

    
]