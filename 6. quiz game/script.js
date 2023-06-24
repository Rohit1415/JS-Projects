const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Rome"],
    answer: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Jupiter", "Venus", "Saturn"],
    answer: "Mars"
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
    answer: "Leonardo da Vinci"
  },
  {
    question: "Which country won the FIFA World Cup in 2018?",
    options: ["France", "Germany", "Brazil", "Spain"],
    answer: "France"
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Fe", "Cu"],
    answer: "Au"
  },
  {
    question: "Which animal is known as the 'King of the Jungle'?",
    options: ["Lion", "Elephant", "Tiger", "Giraffe"],
    answer: "Lion"
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: ["William Shakespeare", "Jane Austen", "Charles Dickens", "Mark Twain"],
    answer: "William Shakespeare"
  },
  {
    question: "What is the largest organ in the human body?",
    options: ["Skin", "Heart", "Liver", "Brain"],
    answer: "Skin"
  },
  {
    question: "Which country is home to the kangaroo?",
    options: ["Australia", "Canada", "Brazil", "India"],
    answer: "Australia"
  },
  {
    question: "What is the tallest mountain in the world?",
    options: ["Mount Everest", "K2", "Kangchenjunga", "Makalu"],
    answer: "Mount Everest"
  },
  {
    question: "Who is the author of 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "F. Scott Fitzgerald", "J.D. Salinger", "Mark Twain"],
    answer: "Harper Lee"
  },
  {
    question: "Which city is known as the 'Big Apple'?",
    options: ["New York City", "Chicago", "Los Angeles", "San Francisco"],
    answer: "New York City"
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
    answer: "Pacific Ocean"
  },
  {
    question: "Who invented the telephone?",
    options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Albert Einstein"],
    answer: "Alexander Graham Bell"
  },
  {
    question: "What is the chemical symbol for oxygen?",
    options: ["O", "H", "C", "N"],
    answer: "O"
  },
  {
    question: "Which country is known as the 'Land of the Rising Sun'?",
    options: ["Japan", "China", "South Korea", "Thailand"],
    answer: "Japan"
  },
  {
    question: "Who painted the ceiling of the Sistine Chapel?",
    options: ["Michelangelo", "Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh"],
    answer: "Michelangelo"
  },
  {
    question: "What is the largest continent on Earth?",
    options: ["Asia", "Africa", "North America", "Europe"],
    answer: "Asia"
  },
  {
    question: "Which instrument does a percussionist play?",
    options: ["Drums", "Guitar", "Piano", "Violin"],
    answer: "Drums"
  },
  {
    question: "Who is the author of 'The Great Gatsby'?",
    options: ["F. Scott Fitzgerald", "George Orwell", "Ernest Hemingway", "J.R.R. Tolkien"],
    answer: "F. Scott Fitzgerald"
  },
  // Add more questions here
  {
    question: "Who is the current President of the United States?",
    options: ["Joe Biden", "Barack Obama", "Donald Trump", "George Washington"],
    answer: "Joe Biden"
  },
  {
    question: "What is the currency of Japan?",
    options: ["Yen", "Dollar", "Euro", "Pound"],
    answer: "Yen"
  },
  {
    question: "Who painted 'The Starry Night'?",
    options: ["Vincent van Gogh", "Salvador Dalí", "Pablo Picasso", "Leonardo da Vinci"],
    answer: "Vincent van Gogh"
  },
  {
    question: "Which animal is known as the 'Ship of the Desert'?",
    options: ["Camel", "Horse", "Elephant", "Giraffe"],
    answer: "Camel"
  },
  {
    question: "Who wrote 'Pride and Prejudice'?",
    options: ["Jane Austen", "Emily Brontë", "Charlotte Brontë", "Virginia Woolf"],
    answer: "Jane Austen"
  },
  {
    question: "What is the chemical symbol for sodium?",
    options: ["Na", "So", "Sa", "No"],
    answer: "Na"
  }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const submitButton = document.getElementById("submit-btn");

function loadQuestion() {
  const q = questions[currentQuestion];

  questionElement.textContent = q.question;

  optionsContainer.innerHTML = "";

  for (let i = 0; i < q.options.length; i++) {
    const option = document.createElement("button");
    option.setAttribute("class", "option");
    option.textContent = q.options[i];
    option.addEventListener("click", selectOption);
    optionsContainer.appendChild(option);
  }
}

function selectOption(event) {
  const selectedOption = event.target;
  const answer = questions[currentQuestion].answer;

  if (selectedOption.textContent === answer) {
    selectedOption.style.backgroundColor = "green";
    score++;
  } else {
    selectedOption.style.backgroundColor = "red";
  }

  disableOptions();
  showNextButton();
}

function disableOptions() {
  const options = optionsContainer.getElementsByClassName("option");
  for (let i = 0; i < options.length; i++) {
    options[i].removeEventListener("click", selectOption);
    options[i].style.pointerEvents = "none";
  }
}

function showNextButton() {
  submitButton.style.display = "block";
}

function hideNextButton() {
  submitButton.style.display = "none";
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
    hideNextButton();
  } else {
    showResult();
  }
}

function showResult() {
  questionElement.textContent = `You scored ${score} out of ${questions.length} questions.`;
  optionsContainer.innerHTML = "";
}

submitButton.addEventListener("click", nextQuestion);

loadQuestion();
