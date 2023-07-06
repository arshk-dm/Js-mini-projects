const colors = ["blue", "yellow", "rgba(133,122,200)", "#f15025"];
const btn = document.querySelector("main .btn-wrapper .color-btn");
const colorName = document.querySelector("main .container h2 .color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  colorName.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
