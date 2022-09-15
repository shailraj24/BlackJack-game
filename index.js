let cards = [];
let sum = 0;
let hasBlalckJack = false;
let isAlive = false;
let message = "";

let messageEl = document.querySelector("#message-el");

let sumEl = document.querySelector("#sum-el");

let cardsEl = document.querySelector("#cards-el");

let player = {
  name: "raj",
  chips: 199,
};

let playerEl = document.querySelector("#player-el")
playerEl.textContent = player.name + ": $ " + player.chips;

document.querySelector("#start-game").addEventListener("click", startGame);

document.querySelector("#draw-card").addEventListener("click", newCard);

function getRendomeCard() {
  let randomNum = Math.floor(Math.random() * 13) + 1;

  if (randomNum > 10) {
    return 10;
  } else if (randomNum === 1) {
    return 11;
  } else {
    return randomNum;
  }
}

function startGame() {
  let firstCard = getRendomeCard();
  let lastCard = getRendomeCard();
  cards = [firstCard, lastCard];
  sum = firstCard + lastCard;

  isAlive = true;

  renderGame();
}

function renderGame() {
  sumEl.textContent = "Sum : " + sum;

  cardsEl.textContent = "Cards : ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  if (sum < 21) {
    message = "You want to draw new card ? ";
  } else if (sum === 21) {
    message = "whohoooooo you've get black jack";
    hasBlalckJack = true;
  } else {
    message = "you'r out of the game";
    isAlive = false;
  }
  //   console.log(message);
  messageEl.innerHTML = message;
}

function newCard() {
  // console.log("Drawing New Card From Deck !");

  if (isAlive === true && hasBlalckJack === false) {
    let card = getRendomeCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}
