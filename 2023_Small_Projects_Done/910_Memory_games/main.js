document.addEventListener("DOMContentLoaded", () => {
  const cardArray = [
    {
      name: "fries",
      img: "/images/fries.png",
    },
    {
      name: "fries",
      img: "/images/fries.png",
    },
    {
      name: "cheseburger",
      img: "/images/cheeseburger.png",
    },
    {
      name: "cheseburger",
      img: "/images/cheeseburger.png",
    },
    {
      name: "hotdog",
      img: "/images/hotdog.png",
    },
    {
      name: "hotdog",
      img: "/images/hotdog.png",
    },
    {
      name: "ice-cream",
      img: "/images/ice-cream.png",
    },
    {
      name: "ice-cream",
      img: "/images/ice-cream.png",
    },
    {
      name: "milkschake",
      img: "/images/milkshake.png",
    },
    {
      name: "pizza",
      img: "/images/pizza.png",
    },
    {
      name: "pizza",
      img: "/images/pizza.png",
    },
  ];

  // Gameboard

  const grid = document.querySelector(".grid");

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "/images/blank.png");
      card.setAttribute("data-id", i);
      //card.addEventListener('click', flipcard)
      grid.appendChild(card);
    }
  }

  function flipcard() {}
  var cardIt = this.createBoard();
});
