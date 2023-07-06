const questions = [
  { question: "Question 1?", answer: "second" },
  { question: "Question 2?", answer: "third" },
  { question: "Question 3?", answer: "third" },
  { question: "Question 4?", answer: "forth" },
  { question: "Question 5?", answer: "second" },
];
const answerBtn = document.querySelectorAll(".answer-btn");
const quizBoxes = document.querySelectorAll(".quiz-box");
const rightAnswerText = document.querySelector(".right-answer");
const wrongAnswerText = document.querySelector(".wrong-answer");
let currentQuestionIndex = 0;

answerBtn.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const currentQuestion = questions[currentQuestionIndex];
    if (btn.dataset.id === currentQuestion.answer) {
      rightAnswer();
      revealQuestion();
    } else {
      currentQuestionIndex = 0;
      wrongAnswer();
    }
  });
});

function revealQuestion() {
  quizBoxes[currentQuestionIndex].classList.remove("active");
  currentQuestionIndex++;
  if (currentQuestionIndex < quizBoxes.length) {
    quizBoxes[currentQuestionIndex].classList.add("active");
  } else {
    alert("the exam is finished");
  }
}

function wrongAnswer() {
  wrongAnswerText.classList.add("active");
  setTimeout(function () {
    wrongAnswerText.classList.remove("active");
  }, 2000);
}

function rightAnswer() {
  rightAnswerText.classList.add("active");
  setTimeout(function () {
    rightAnswerText.classList.remove("active");
  }, 2000);
}
