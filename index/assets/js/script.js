const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

/*
let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []
*/

/*
let questions = [
  {
    question: 'Arrays in JavaScript can br used to strore?',
    answers: [
    { text: 'numbers and strings', correct: true },
    { text:  'other arrays', correct: false}, 
    { text: 'booleans', correct: false},
    { text:  'IDK', correct: false}
    ]
  },
  {
    question: 'A condition in an if/else statement is enclosed in _____',
    answers: [
      { text: 'quotes', correct: false },
      { text: 'parenthesis', correct: true },
      { text: 'curly bracket', correct: false },
      { text: 'square bracket', correct: false }
    ]
  },
  {
    question: 'Commonly used data types DO Not include: ',
    answers: [
      { text: 'strings', correct: false },
      { text: 'booleans', correct: false },
      { text: 'alerts', correct: true },
      { text: 'numbers', correct: false }
    ]
  },
  {
    question: 'String values must be enclosed in ____ when being assigned to variables',
    answers: [
      { text: 'commas', correct: false },
      { text: 'curly brackets', correct: false },
      { text: 'quotes', correct: true },
      { text: 'parenthesis', correct: false }
    ]
  },
  {
    question: 'A very useful tool during development and debugging for printing content in the debugger is',
    answers: [
      { text: 'Javascript', correct: false },
      { text: 'terminal/bash', correct: false },
      { text: 'for loops', correct: false },
      { text: 'console log', correct: true }
    ]
  },

]
*/
/*
const SCORE_POINTS = 100
const MAX_QUESTIONS = 5

startGame = () => {
  questionCounter = 0
  score = 0
  availableQuestions = [...question]
  getNewQuestion()
}

*/

let shuffledQuestions, currentQuestionIndex

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})


/*
getNewQuestion = () => {
  if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
    localStorage.setItem('mostRecentScore',score)

    return window.location.assign('end.html')
  }

  questionCounter++
  progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
  progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

  const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
  currentQuestion = availableQuestions[questionsIndex]
  question.innerText = currentQuestion.question

  choices.forEach(choice => {
    const number = choice.dataset["number"]
    choice.innerText = currentQuestion[answers.text]
  })

  availableQuestions.splice(questionsIndex,1)

  acceptingAnswers = true

}
*/

document.addEventListener('DOMContentLoaded', () => {
  const timeLeftDisplay = document.querySelector('#time-left')
  const startBtn = document.querySelector('#start-button')
  let timeLeft = 75

  function countDown(){
    setInterval(function(){
      if(timeLeft <= 0) {
        clearInterval(timeLeft=0)
      }
      timeLeftDisplay.innerHTML = timeLeft
      timeLeft -= 1
    },75000)
  }

  startButton.addEventListener('click', countDown)

})

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Arrays in JavaScript can be used to strore?',
    answers: [
      { text: 'numbers and strings', correct: true },
      { text: 'other arrays', correct: false },
      { text: 'booleans', correct: false },
      { text: 'IDK', correct: false }
    ]
  },
  {
    question: 'A condition in an if/else statement is enclosed in _____',
    answers: [
      { text: 'quotes', correct: false },
      { text: 'parenthesis', correct: true },
      { text: 'curly bracket', correct: false },
      { text: 'square bracket', correct: false }
    ]
  },
  {
    question: 'Commonly used data types DO Not include: ',
    answers: [
      { text: 'strings', correct: false },
      { text: 'booleans', correct: false },
      { text: 'alerts', correct: true },
      { text: 'numbers', correct: false }
    ]
  },
  {
    question: 'String values must be enclosed in ____ when being assigned to variables',
    answers: [
      { text: 'commas', correct: false },
      { text: 'curly brackets', correct: false },
      { text: 'quotes', correct: true },
      { text: 'parenthesis', correct: false }
    ]
  },
  {
    question: 'A very useful tool during development and debugging for printing content in the debugger is',
    answers: [
      { text: 'Javascript', correct: false },
      { text: 'terminal/bash', correct: false },
      { text: 'for loops', correct: false },
      { text: 'console log', correct: true }
    ]
  },
]


