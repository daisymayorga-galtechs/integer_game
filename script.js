const quizData = [
    { question: "What is 8 + (-3)?", options: ["11", "5", "-5", "3"], answer: "5" },
    { question: "What is -7 + 10?", options: ["-17", "3", "-3", "7"], answer: "3" },
    { question: "What is 6 - (-4)?", options: ["10", "-10", "2", "-2"], answer: "10" },
    { question: "What is -5 * 3?", options: ["-15", "15", "-8", "-10"], answer: "-15" },
    { question: "What is -12 / 4?", options: ["-3", "3", "-4", "4"], answer: "-3" }
];

let currentQuestion = 0;
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const bunnyEl = document.getElementById("bunny");
const almostSqr = document.getElementById("sqr");
const micDropEl = document.getElementById("mic-drop");

function loadQuestion() {
    bunnyEl.style.display = "none";
    micDropEl.style.display = "none";
    const qData = quizData[currentQuestion];
    questionEl.textContent = qData.question;
    optionsEl.innerHTML = "";
    qData.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsEl.appendChild(button);
    });
}

function checkAnswer(selected) {
    if (selected === quizData[currentQuestion].answer) {
        bunnyEl.style.display = "block";
        setTimeout(() => {
            bunnyEl.style.display = "none";
            nextQuestion();
        }, 1500);
        
    } else {
        almostSqr.style.display = "block";
        setTimeout(() => {
            almostSqr.style.display = "none";
        }, 1500);
    }
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        questionEl.textContent = "You finished the quiz!";
        optionsEl.innerHTML = "";
        micDropEl.style.display = "block";
    }
}

loadQuestion();