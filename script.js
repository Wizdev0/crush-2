const nameInput =
document.getElementById("nameInput");
const revealButton =
document.getElementById("revealButton");
const FortuneSection =
document.getElementById("FortuneSection");
const FortuneMessage =
document.getElementById("FortuneMessage");
const complimentText =
document.getElementById("complimentText");

const Fortune = [
    "You light up every room you walk into.",
    "You smile is contagious. Keep sharing it.",
    "You have a heart full of gold and a soul full of kindness.",
    "You inspire those around you with your positivity.",
    "You are an incredible person with soo much to offer to the world!",
];

const compliment = [
    "I made this for you because your're special.",
    "You're the reason why I smile so often.",
    "Did you know your're amazing? Because you are.",
    "No one brightens my day the way you do.",
    "You're one of a kind, and am so glad to know you.",
];


revealButton.addEventListener("click", () => {
    const name =
nameInput.value.trim();

if (name === "") {
    alert("Please enter your name!");
    return;
}    

const randomFortune =
Fortune[Math.floor(Math.random()* Fortune.length)];
const randomCompliment =
compliment[Math.floor(Math.random()* compliment.length)];

FortuneMessage.textContent = `Dear ${name}, ${randomFortune}`;
/* complimentText.textContent = randomCompliment; */

FortuneSection.classList.remove("hidden");
});


