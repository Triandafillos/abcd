let button1 = document.querySelector("#healthButton");
let loginButton = document.querySelector("#login");
let loginSection = document.querySelector("#loginSection");
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
    loginSection.display = none;
}