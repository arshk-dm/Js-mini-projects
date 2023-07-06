const initalInput = document.querySelector("#checkAmount");
const tipBtn = document.querySelectorAll(".tip-button");
const calc = document.querySelector(".calculate");
const peopleInput = document.querySelector("#peopleAmount");
const totalTag = document.querySelector(".total");
let mainAmount;
let total;
let peopleAmount;

initalInput.addEventListener("input", function () {
  mainAmount = +initalInput.value;
});
peopleInput.addEventListener("input", function () {
  peopleAmount = +peopleInput.value;
});

function getTipAmount() {
  tipBtn.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const dataId = e.currentTarget.dataset.id;
      let helper;
      if (dataId !== "custom") {
        helper = (mainAmount * dataId) / 100;
      } else {
        let customTip = prompt("How much do you want to tip?");
        helper = (mainAmount * customTip) / 100;
      }
      total = mainAmount + helper;
    });
  });
}

getTipAmount(); // Call the function to calculate the tip

calc.addEventListener("click", function () {
  total = total / peopleAmount;
  totalTag.innerHTML = `<h1 class="total">Bill amount: ${total} $</h1>`;
  clearInputs();
});

function clearInputs(){
  initalInput.value = "";
  peopleInput.value = "";
}
