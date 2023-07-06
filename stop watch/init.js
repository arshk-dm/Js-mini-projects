const displayTime = document.querySelector(".show-time");
const btns = document.querySelectorAll(".maniuplate-time-btn");
let minute = 0;
let second = 0;
let interValId;

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const btnType = e.currentTarget.dataset.id;
    if (btnType == "start") {
      interValId = setInterval(function () {
        counting();
      }, 1000);
    }
    if (btnType == "stop") {
      clearInterval(interValId);
    }
    if (btnType == "reset") {
      clearInterval(interValId);
      minute = 0;
      second = 0;
      displayTime.innerHTML = `
    <h4 class="show-time"><span class="minute">00</span>:<span class="second">00</span></h4>`;
    }
  });
});

function counting(m, s) {
  second++;
  if (second > 59) {
    second = 0;
    minute++;
  }
  if (second >= 10) {
    displayTime.innerHTML = `
    <h4 class="show-time"><span class="minute">0${minute}</span>:<span class="second">${second}</span></h4>`;
  } else {
    displayTime.innerHTML = `
    <h4 class="show-time"><span class="minute">0${minute}</span>:<span class="second">0${second}</span></h4>`;
  }
}
