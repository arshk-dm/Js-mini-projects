// starting count
let count = 1;
const value = document.querySelector("#countedNumber");
const allBtn = document.querySelectorAll(".btn");
// const decreaseBtn = document.querySelector(".btn.decrease");
// decreaseBtn.setAttribute("disabled", "");
allBtn.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      if(count > 1){
        count--;
      }
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 1;
    }

    // if (count > 1) {
    //   decreaseBtn.removeAttribute("disabled", "");
    // } else {
    //   decreaseBtn.setAttribute("disabled", "");
    // }

    // if(count = 1){
    //    const decreaseBtn = document.querySelector('.btn.decrease');
    //    decreaseBtn.setAttribute("disabled","");
    // }

    // if(count > 0){
    //     value.style.color = 'green'
    // }
    // if(count < 0){
    //     value.style.color = 'red'
    // }
    // if(count === 0){
    //     value.style.color = 'black'
    // }
    value.textContent = count;
  });
});
