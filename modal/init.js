const modalBtn = document.querySelector("#modalOpen");
const modal = document.querySelector(".modal");
const overLay = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector("#closeBtn");

modalBtn.addEventListener("click", function () {
  modal.classList.add("active");
  overLay.classList.add("show-overlay");
});
function closeModal() {
  //   closeBtn.addEventListener("click", function () {
  modal.classList.remove("active");
  overLay.classList.remove("show-overlay");
  //   });
}

closeBtn.addEventListener("click", closeModal);

overLay.addEventListener("click", closeModal);
