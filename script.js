let button1 = document.querySelector("#healthButton");
let healthText = document.querySelector("#healthText");
let health = 100;

button1.onclick = ouch;

function ouch() {
    health = health - 10;
    healthText.innerText = health;
    if (health < 50) {
        healthText.style.color = "red";
    }
}