const cards = document.querySelectorAll(".card");
const cardContainer = document.querySelector(".card-container");
let isFlipping = false;

cardContainer.addEventListener("mouseenter", function () {
  if (!isFlipping) {
    isFlipping = true;
    cards.forEach(function (card, index) {
      setTimeout(function () {
        card.classList.add("flip");
        if (index === cards.length - 1) {
          isFlipping = false;
        }
      }, index * 200);
    });
  }
});
cardContainer.addEventListener("mouseleave", function () {
    cards.forEach(function (card, index) {
      setTimeout(function () {
        card.classList.remove("flip");
      }, index * 200); 
    });
  });
