const audio = document.querySelector("#myAudio");
const muteBtn = document.querySelector("#muteAudio");
const stars = 400;

for (let i = 0; i < stars; i++) {
  let star = document.createElement("div");
  star.classList.add("stars");
  let xy = randomPosition();
  star.style.left = xy[0] + `px`;
  star.style.top = xy[1] + `px`;
  document.body.append(star);
}

function randomPosition() {
  let y = window.innerHeight;
  let x = window.innerWidth;
  let randomX = Math.floor(Math.random() * x);
  let randomY = Math.floor(Math.random() * y);
  return [randomX, randomY];
}

window.addEventListener("load", function () {
  audio.play();
  muteBtn.addEventListener("click", function(){
    audio.muted = false;
  })
});
