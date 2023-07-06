const textAreas = document.querySelectorAll(".text-area");
window.addEventListener("scroll", function () {
  let scrollPosition = window.pageYOffset;

  for (let n = 0; n < textAreas.length; n++) {
    let textAreaPosition = textAreas[n].getBoundingClientRect().top;
    if (textAreaPosition <= scrollPosition) {
      textAreas[n].classList.remove("hidden");
    } else if (!textAreas[n].classList.contains("hidden")) {
      textAreas[n].classList.add("hidden");
    }
  }
});
