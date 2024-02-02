let button1 = document.querySelector("#healthButton");
let loginButton = document.querySelector("#login");
let loginSection = document.querySelector("#loginSection");
let loggedIn = false;
let usernameField = document.querySelector("#username");
let passwordField = document.querySelector("#password");
let healthText = document.querySelector("#healthText");
let health = 100;

button1.onclick = ouch;
loginButton.onclick = login;

if(loggedIn)
{
    loginSection.style.display = "none";
}

function ouch() {
    if(health >0){
        health = health - 10;
    }
    healthText.innerText = health;
    if (health < 50) {
        healthText.style.color = "red";
    }
}

function login(){
    if(!(usernameField.value.length=0)&&(passwordField.value.length > 47)){
        loggedIn = true;
    }
}