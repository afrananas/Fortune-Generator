
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
const colorFontBtn = document.getElementById('color-font');
const colorBgBtn = document.getElementById('color-bg');
const colorBorderBtn = document.getElementById('color-border');
const fontStyleBtn = document.getElementById('font-style');


function generateFortune() {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    fortuneText.textContent = fortunes[randomIndex];
}


function changeFontColor() {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    fortuneText.style.color = randomColor;
}

function changeBgColor() {
    const colors = ['#FFC300', '#DAF7A6', '#C70039', '#900C3F'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById('fortune-box').style.backgroundColor = randomColor;
}

function changeBorderColor() {
    const colors = ['#581845', '#FF5733', '#33FF57', '#3357FF'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById('fortune-box').style.borderColor = randomColor;
}

function changeFontStyle() {
    const fonts = ['Arial', 'Georgia', 'Courier New', 'Verdana'];
    const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
    fortuneText.style.fontFamily = randomFont;
    fortuneText.style.fontSize = `${Math.floor(Math.random() * 10) + 18}px`;
}


colorFontBtn.addEventListener('click', changeFontColor);
colorBgBtn.addEventListener('click', changeBgColor);
colorBorderBtn.addEventListener('click', changeBorderColor);
fontStyleBtn.addEventListener('click', changeFontStyle);


window.onload = generateFortune;