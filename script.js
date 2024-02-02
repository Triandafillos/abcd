let button1 = document.querySelector("#healthButton");
let loginButton = document.querySelector("#login");
let loginSection = document.querySelector("#loginSection");
let usernameField = document.querySelector("#username");
let passwordField = document.querySelector("#password");
let healthText = document.querySelector("#healthText");
let health = 100;

button1.onclick = ouch;
loginButton.onclick = login;

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
    console.log(usernameField.innerText.length)
    console.log(passwordField.innerText.length)
    console.log(!(usernameField.innerText.length=0)&&(passwordField.innerText.length > 47))
    if(!(usernameField.innerText.length=0)&&(passwordField.innerText.length > 47)){
        console.log("x");
        loginSection.style.display = "none";
    }
}