const questions = [
  {
      question: "What is 2 + 2?",
      answers: ["4", "four"],
  },
  {
      question: "What is the capital of France?",
      answers: ["Paris"],
  },
  {
      question: "Which planet is known as the Red Planet?",
      answers: ["Mars"],
  },
];

const quizContainer = document.getElementById("quiz-container");
const questionContainer = document.getElementById("question-container");
const optionsContainer = document.getElementById("options-container");
const timerContainer = document.getElementById("timer-container");
const resultContainer = document.getElementById("result-container");

let currentQuestion = 0;
let score = 0;
let timeLeft = 10; // Timer in seconds
let timer;

function displayQuestion() {
  if (currentQuestion < questions.length) {
      questionContainer.textContent = questions[currentQuestion].question;
      optionsContainer.innerHTML = "";
      questions[currentQuestion].answers.forEach((answer, index) => {
          const option = document.createElement("button");
          option.className = "option";
          option.textContent = answer;
          option.addEventListener("click", () => checkAnswer(answer));
          optionsContainer.appendChild(option);
      });
  } else {
      showResult();
  }
}

function checkAnswer(selectedAnswer) {
  for (const answer of questions[currentQuestion].answers) {
      if (selectedAnswer.toLowerCase() === answer.toLowerCase()) {
          score++;
          break;
      }
  }

  currentQuestion++;
  displayQuestion();
}

function showResult() {
  quizContainer.style.display = "none";
  resultContainer.style.display = "block";
  resultContainer.textContent = `You scored ${score} out of ${questions.length} questions.`;
  clearInterval(timer);
}

function countdown() {
  const timerElement = document.getElementById("timer");
  timer = setInterval(() => {
      if (timeLeft <= 0) {
          showResult();
      } else {
          timerElement.textContent = timeLeft;
          timeLeft--;
      }
  }, 1000);
}

displayQuestion();
countdown();