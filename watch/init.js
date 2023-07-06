const displayTime = document.querySelector(".time");

updateTime();

setInterval(updateTime, 1000)


function updateTime() {
  let currentTime = new Date();

  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();

  displayTime.innerHTML = `<h4 class="time"><span class="hours">${hours}</span>:<span class="minutes">${minutes}</span>:<span class="seconds">${seconds}</span></h4>`;
}
