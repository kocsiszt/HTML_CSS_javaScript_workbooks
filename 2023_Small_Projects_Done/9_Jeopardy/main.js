const game = document.getElementById("game");
const scoreDisplay = document.getElementById("score");

const jeopardyCategories = [
  {
    genre: "WHO",
    questions: [
      {
        question: "Who wrote Harry Potter?",
        answers: ["JK Rowling", "JRR Tolkien"],
        corrent: "JK Roowling",
        level: "easy",
      },
      {
        question: "Who was born on krypton",
        answers: ["Aquaman", "Superman"],
        correct: "Superman",
        level: "medium",
      },
      {
        question: "Who designed the first cal",
        answers: ["Karl Benz", "henry Ford"],
        correct: "Kalrl Benz",
        level: "hard",
      },
    ],
  },
  {
    genre: "WHERE",
    questions: [
      {
        question: "Rhere is Buchingham Place?",
        answers: ["Richmond", "London"],
        correnct: "London",
        level: "easy",
      },
      {
        question: "Where is the Colusseum",
        answers: ["Rome", "Milan"],
        correct: "Rome",
        level: "medium",
      },
      {
        question: "where is Mount Kilimanjaro",
        answers: ["Zimbabwe", "Tanzania"],
        correct: "Tanzania",
        level: "hard",
      },
    ],
  },
  {
    genre: "WHEN",
    questions: [
      {
        question: "When is Christmas?",
        answers: ["30th dec", "24th/25th Dec"],
        correct: "24th/25th Dec",
        level: "easy",
      },
      {
        question: "When was JFK Shot?",
        answers: ["1963", "1961"],
        correct: "1963",
        level: "hard",
      },
      {
        question: "when was WW2?",
        answers: ["1932", "1941"],
        correct: "1941",
        level: "medium",
      },
    ],
  },
  {
    genre: "WHAT",
    questions: [
      {
        question: "What is the capital of Saud Arabia?",
        answers: ["Jedda", "Riyad"],
        correct: "Riyad",
        level: "hard",
      },
      {
        question: "What do Koalas eat?",
        answers: ["Straw", "Eucalypt"],
        correct: "Eucalypt",
        level: "medium",
      },
      {
        question: "What is a kg short for",
        answers: ["Kilojoule", "Kilogram"],
        correct: "Kilogram",
        level: "easy",
      },
    ],
  },
  {
    genre: "HOW MANY",
    questions: [
      {
        question: "How many players in a football team?",
        answers: ["15", "11"],
        correct: "11",
        level: "easy",
      },
      {
        question: "How many seconds in on hour?",
        answers: ["15", "11"],
        correct: "11",
        level: "medium",
      },
      {
        question: "How many people in China?",
        answers: ["1.1 bil", "1.4 bil"],
        correct: "1.4 bil",
        level: "hard",
      },
    ],
  },
];

let score = 0;

function addCategory(category) {
  const column = document.createElement("div");
  column.classList.add("genre-column");

  const genretitle = document.createElement("div");
  genretitle.classList.add("genre-title");
  genretitle.innerHTML = category.genre;

  column.appendChild(genretitle);
  game.append(column);

  category.questions.forEach((question) => {
    const card = document.createElement("div");
    card.classList.add("card");
    column.append(card);

    if (question.level === "easy") {
      card.innerHTML = 100;
    }
    if (question.level === "medium") {
      card.innerHTML = 200;
    }
    if (question.level === "hard") {
      card.innerHTML = 300;
    }

    card.setAttribute("data-question", question.question);
    card.setAttribute("data-answer-1", question.answers[0]);
    card.setAttribute("data-answer-2", question.answers[1]);
    card.setAttribute("data-correct", question.correct);
    card.setAttribute("data-value", card.getInnerHTML());

    card.addEventListener("click", flipCard);
  });
}

jeopardyCategories.forEach((category) => addCategory(category));

function flipCard() {
  this.innerHTML = "";
  this.style.fontSize = "15px";
  this.style.lineHeight = "30px";
  const textDisplay = document.createElement("div");
  textDisplay.classList.add("card-text");
  textDisplay.innerHTML = this.getAttribute("data-question");
  const firstButton = document.createElement("button");
  const secondButton = document.createElement("button");
  firstButton.classList.add("first-button");
  secondButton.classList.add("second-button");
  firstButton.innerHTML = this.getAttribute("data-answer-1");
  secondButton.innerHTML = this.getAttribute("data-answer-2");
  firstButton.addEventListener("click", getResult);
  secondButton.addEventListener("click", getResult);
  this.append(textDisplay, firstButton, secondButton);

  const allCards = Array.from(document.querySelectorAll(".card"));
  allCards.forEach((card) => card.removeEventListener("click", flipCard));
}

function getResult() {
  const allCards = Array.from(document.querySelectorAll(".card"));
  allCards.forEach((card) => card.addEventListener("click", flipCard));

  const cardOfButton = this.parentElement;
  //console.log("cardOfButton", cardOfButton);

  if (cardOfButton.getAttribute("data-correct") == this.innerHTML) {
    score = score + parseInt(cardOfButton.getAttribute("data-value"));
    scoreDisplay.innerHTML = score;
    cardOfButton.classList.add("correct-answer");
    setTimeout(() => {
      while (cardOfButton.firsChild) {
        cardOfButton.removeChild(cardOfButton.lastChild);
      }
      cardOfButton.innerHTML = cardOfButton.getAttribute("data-value");
    }, 100);
  } else {
    cardOfButton.classList.add("wrong-answer");
    setTimeout(() => {
      while (cardOfButton.firsChild) {
        cardOfButton.removeChild(cardOfButton.lastChild);
      }
      cardOfButton.innerHTML = 0;
    }, 100);
  }
  cardOfButton.removeEventListener("click", flipCard);
}
