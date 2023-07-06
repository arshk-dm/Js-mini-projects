const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector(".hex-body main .btn-wrapper .color-btn");
const colorTxt = document.querySelector(".color");

btn.addEventListener('click', function(){
    let hexColor = "#";
    for(let i = 0; i<6; i++){
        hexColor += hex[getRandomNumber()]
    }
    colorTxt.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}

const submit = document.querySelector('.inputBtn');

submit.addEventListener("click", function(){
    let input = document.querySelector("#inputColor").value;
    let hexColor = '#' + input;
    document.body.style.backgroundColor = hexColor;
    colorTxt.textContent = hexColor;

})