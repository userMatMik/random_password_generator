const pswdEl = document.querySelector('#password');
const pswdLengthEl = document.querySelector('#len');
const upperChekEl = document.querySelector('#upper');
const lowerChekEl = document.querySelector('#lower');
const numChekEl = document.querySelector('#number');
const specialChekEl = document.querySelector('#special');
const generatePswdBtn = document.querySelector('#generate-pswd');

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const specialChar = "!@#$%^&*()_+=";



const generatePass = () => {

    if (upperChekEl.checked === false && lowerChekEl.checked === false && numChekEl.checked === false && specialChekEl.checked === false) {
        alert("At least one option must be checked!")
        return;
    }

    if (pswdLengthEl.value < 5) {
        alert("Your password should be at least 5 characters length!")
        return;
    }

    let avaliableChars='';
    let password = ''

    if (upperChekEl.checked === true) {
        avaliableChars += upperLetters;
    } 
    if (lowerChekEl.checked === true) {
        avaliableChars += lowerLetters;
    } 
    if (numChekEl.checked === true) {
        avaliableChars += numbers;
    } 
    if (specialChekEl.checked === true) {
        avaliableChars += specialChar;
    }

    const pswdLength = pswdLengthEl.value;

    for (let i = 0; i < pswdLength; i++ ) {
        
        randomIndex = Math.floor(Math.random() * avaliableChars.length);
        password += avaliableChars[randomIndex];

    }
    
    pswdEl.textContent = password;
}

const copyToClip = (password) => {
    navigator.clipboard.writeText(password.target.innerText)
}

generatePswdBtn.addEventListener('click', generatePass);

pswdEl.addEventListener('click', copyToClip);

document.addEventListener("DOMContentLoaded", generatePass());
  

