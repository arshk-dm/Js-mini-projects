const reviews = [
  {
    id: 1,
    name: "Arshk",
    text: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
  },
  {
    id: 2,
    name: "Amir Hossein",
    text: "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
  },
  {
    id: 3,
    name: "Sobhan",
    text: "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC",
  },
  {
    id: 4,
    name: "Ali",
    text: "DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
  },
];

// select items
const img = document.querySelector("#peopleImg");
const authorName = document.querySelector("#personName");
const authorTxt = document.querySelector("#txt-review");
const prevBtn = document.querySelector(".right-btn");
const nxtBtn = document.querySelector(".left-btn");
const randomBtn = document.querySelector(".random-generator");
const allBtn = document.querySelectorAll(".btn");
// set starting items
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem);
});

// show person based on item

function showPerson(person) {
  const item = reviews[person];
  authorName.textContent = item.name;
  authorTxt.textContent = item.text;
}

allBtn.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    // next btn
    if (styles.contains("left-btn")) {
      currentItem++;
      if (currentItem > reviews.length - 1) {
        currentItem = 0;
      }
      showPerson(currentItem);
    }
    // prev btn
    if (styles.contains("right-btn")) {
      currentItem--;
      if (currentItem < 0) {
        currentItem = reviews.length - 1;
      }
      showPerson(currentItem);
    }
    if (styles.contains("random-generator")){
        currentItem = Math.floor(Math.random() * reviews.length)
        showPerson(currentItem);

    }
  });
});
