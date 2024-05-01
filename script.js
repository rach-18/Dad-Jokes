const jokeDisplay = document.querySelector("#joke");
const questionDisplay = document.querySelector("#question");
const sureBtn = document.querySelector(".sure-btn");
const nopeBtn = document.querySelector(".nope-btn");
const box = document.querySelector(".box");
const api = "https://api.api-ninjas.com/v1/dadjokes";
const apiKey = "+ASAjviq/XZ4X3WkLYUEMw==La2VXqgy7Tnamnx8";

const options = {
    method: "GET",
    headers: {
      "X-Api-Key": apiKey,
    },
};

function moveButton() {
    const buttonWidth = nopeBtn.offsetWidth;
    const buttonHeight = nopeBtn.offsetHeight;
    const bodyWidth = box.offsetWidth;
    const bodyHeight = box.offsetHeight;
  
    const newX = Math.random() * (bodyWidth - buttonWidth);
    const newY = Math.random() * (bodyHeight - buttonHeight);
  
    nopeBtn.style.left = newX + 'px';
    nopeBtn.style.top = newY + 'px';
}

async function generateJoke() {
    try {
        jokeDisplay.innerHTML = "Okay hold..";
        const joke = await fetch(api, options);
        const jsonJoke = await joke.json();
        jokeDisplay.innerHTML = jsonJoke[0]["joke"];
        questionDisplay.innerHTML = "Want to hear some more?";
    }
    catch(err) {
        jokeDisplay.innerHTML = "Oopps.. Let's try again!"
    }
}

sureBtn.addEventListener("click", () => {
    generateJoke();
});

nopeBtn.addEventListener("mousemove", () => {
    moveButton();
})
