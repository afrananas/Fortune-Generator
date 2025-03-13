
const fortunes = [
    "True wisdom comes not from knowledge, but from understanding.",
    "The best time to plant a tree was 20 years ago. The second best time is now.",
    "Your future is as bright as your faith.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The journey of a thousand miles begins with one step.",
    "Happiness is not something ready-made. It comes from your own actions.",
    "Believe you can and you're halfway there.",
    "Change your thoughts and you change your world.",
    "The only way to do great work is to love what you do."
];


const fortuneText = document.getElementById('fortune-text');
const fortuneBox = document.getElementById('fortune-box');
const buttons = document.querySelectorAll('.color-button');


function generateFortune() {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    fortuneText.textContent = fortunes[randomIndex];
}

function applyStyles(button) {
    const color = window.getComputedStyle(button).backgroundColor; 

    fortuneBox.style.backgroundColor = color;
    fortuneBox.style.borderColor = color;


    fortuneText.style.color = getContrastColor(color);


    fortuneText.style.fontFamily = getRandomFont();
    fortuneText.style.fontSize = getRandomFontSize();
}


function getRandomFont() {
    const fonts = ['Arial', 'Georgia', 'Courier New', 'Verdana'];
    return fonts[Math.floor(Math.random() * fonts.length)];
}


function getRandomFontSize() {
    return `${Math.floor(Math.random() * 10) + 18}px`;
}


function getContrastColor(backgroundColor) {

    
    if (fortuneBox.style.backgroundColor == '#white') {
        return '#000000';
    }
    else{
        return '#FFFFFF';
    }

    
}

buttons.forEach(button => {
    button.addEventListener('click', () => applyStyles(button));
});


window.onload = generateFortune;ff