const questions = [
    {
        question: "Mikä näistä on maailman suosituin e-urheilu peli? ",
        options: ["Dota 2", "League of Legends", "Fortnite", "CS:GO"],
        answer: "League of Legends"
    },
    {
        question: "Mikä näistä oli ensimmäinen virallinen e-urheilulaji?",
        options: ["Quake", "Counter-Strike", "StarCraft", "Pac-Man"],
        answer: "StarCraft"
    },
    {
        question: "Missä maassa The International Dota 2 -turnaus yleensä pidetään? ",
        options: ["Kiina", "Saksa", "USA", "Etelä-Korea"],
        answer: "USA"
    },
    {
        question: "Mitä FPS tarkoittaa pelaamisessa?",
        options: ["Frames Per Second", "First Person Shooter", "Fast Play Setup", "Free Play Session"],
        answer: "First Person Shooter"
    },
    {
        question: "Mikä pelinkehittäjä on tehnyt Fortniten?",
        options: ["Valve", "Epic Games", "Blizzard", "Riot Games"],
        answer: "Epic Games"
    },
    {
        question: "Mikä maa on voittanut kaikkein eniten League Of Legends Worlds-turnauksia?",
        options: ["Kiina", "Etelä-Korea", "USA", "Japani"],
        answer: "Etelä-Korea"
    },
    {
        question: "Mikä on pelinsisäisen valuutan nimi pelissä Fortnite?",
        options: ["Gold", "V-Bucks", "Coins", "Credits"],
        answer: "V-Bucks"
    }
];

let currentQuestion = 0;
let score = 0;

const startGame = () => {
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("question-screen").style.display = "block";
    currentQuestion = 0;
    score = 0;
    showQuestion();
}

const showQuestion = () => {
    document.getElementById("next-btn").disabled = true;
    const question = questions[currentQuestion];
    document.getElementById("question-text").innerText = question.question;

    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";

    question.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("option-button");
        button.onclick = () => selectAnswer(button, option);
        optionsContainer.appendChild(button);
    });
}

const selectAnswer = (button, selectedOption) => {
    const correctAnswer = questions[currentQuestion].answer;
    if (selectedOption === correctAnswer) {
        score++;
        button.style.backgroundColor = "lightgreen";
    } else {
        button.style.backgroundColor = "lightcoral";
    }

    document.querySelectorAll(".option-button").forEach(btn => btn.disabled = true);
    document.getElementById("next-btn").disabled = false;
}

const nextQuestion = () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        endGame();
    }
}

const endGame = () => {
    document.getElementById("question-screen").style.display = "none";
    document.getElementById("result-screen").style.display = "block";
    document.getElementById("result-text").innerText = `Sait ${score} / ${questions.length} oikein!`;
}

const resetGame = () => {
    document.getElementById("result-screen").style.display = "none";
    document.getElementById("start-screen").style.display = "block";
}
