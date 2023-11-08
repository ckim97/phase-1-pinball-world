fetch("http://localhost:3000/games")
    .then(res => res.json())
    .then(data => {
        renderImage(data[0]);
        for (let name of data) {
            renderName(name);
        }
    })

function renderName(gameObject) {
    let gameContainer = document.querySelector(".game-list");
    let name = document.createElement("h5");
    name.textContent = `${gameObject.name} (${gameObject["manufacturer_name"]})`;

    name.addEventListener("click", function() {
        renderImage(gameObject);
    });

    gameContainer.append(name);
}

function renderImage(gameObject) {
    let image = document.getElementById("detail-image");
    image.src = gameObject.image;

    let name = document.getElementById("detail-title");
    name.textContent = gameObject.name;

    let highScore = document.getElementById("detail-high-score");
    highScore.textContent = gameObject["high_score"];
}

let form = document.getElementById("high-score-form");
form.addEventListener("submit", handleSubmission)

function handleSubmission(e) {
    e.preventDefault();
    let newHighScore = e.target["score-input"].value;

    let currentHighScore = document.querySelector("#detail-high-score");
    currentHighScore.textContent = newHighScore;
    form.reset();
}