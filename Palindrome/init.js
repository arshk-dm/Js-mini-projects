// const submit = document.getElementById("sub");
// const input = document.getElementById("textInput");
// const lettersArray = [];
// const firstHalfArray = [];
// const secondHalfArray = [];
// submit.addEventListener("click", getInputValue);

// /* this function will get input's value, put value's string inside an array,
// then it will divide that array by two and put first half and second half of letters
// inside two diffrent arrays*/
// function getInputValue() {
//   // push initial values inside an array
//   const inputValue = input.value;
//   for (let i = 0; i < inputValue.length; i++) {
//     lettersArray.push(inputValue[i]);
//   }
//   //   divide arrays lenght into two so later on we can use it
//   const checkPoint = Math.floor(lettersArray.length / 2);
//   //   will get first half of letters and shove them inside the firstHalfArray
//   for (let n = 0; n < checkPoint; n++) {
//     firstHalfArray.push(lettersArray[n]);
//   }
//   /*   will get the second half of letters, if arrays lenght is even then it
//   will just shove the second half into a diffrent array, but if the arrays lenght
//   is odd, then it will skip the middle letter and put the last letters into
//   second half of array */
//   if (lettersArray.length % 2 === 0) {
//     for (let n = checkPoint; n < lettersArray.length; n++) {
//       secondHalfArray.push(lettersArray[n]);
//     }
//   } else {
//     for (let n = checkPoint + 1; n < lettersArray.length; n++) {
//       secondHalfArray.push(lettersArray[n]);
//     }
//   }

//   console.log(firstHalfArray);
//   console.log(secondHalfArray);
//   palindromable(firstHalfArray,secondHalfArray);
// }
// function palindromable(ArrayOne, ArrayTwo){

// }

// my way was to complicated

// this is better

const submit = document.getElementById("sub");
const input = document.getElementById("textInput");

// after pressing submit make getInputValue function happen
submit.addEventListener("click", getInputValue);

function getInputValue(){
    const inputValue = input.value;
    // convert input's value into an array
    const lettersArray = inputValue.split("");
    // get's previous array, reverse it and make it into a string
    const reverseArray = lettersArray.reverse().join("");
    
    // compare reversed word with initial word
    if (reverseArray === inputValue){
        console.log("palindorable");
    }else{
        console.log("not palindorable");
    }
}
