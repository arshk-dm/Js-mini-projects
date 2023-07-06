const countedNumber = document.querySelector('#countedNumber');
countedNumber.textContent = 0;
const decreaseNumber = document.querySelector('#decrease');
const resetNumber = document.querySelector('#reset');
const increaseNumber = document.querySelector('#increase');

decreaseNumber.addEventListener('click', function(){
    countedNumber.textContent --;
})
increaseNumber.addEventListener('click', function(){
    countedNumber.textContent ++;
})
resetNumber.addEventListener('click', function(){
    countedNumber.textContent = 0;
})