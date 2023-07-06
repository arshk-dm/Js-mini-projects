const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let futureDate = new Date(2023, 11, 24, 11, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const day = futureDate.getDate();

let month = futureDate.getMonth();
month = months[month];

const weekday = weekdays[futureDate.getDay()];


giveaway.textContent = `giveaway end on ${weekday} ${day} ${month} ${year}, ${hours}:${minutes}am`;
 
  // getTime returns current time in ms
const futureTime = futureDate.getTime();

function getRemainingTime(){
  const today = new Date().getTime();
  const t = futureTime - today;

  // values in ms
  const oneDay = 24*60*60*1000;
  const oneHour = 60*60*1000;
  const oneMin = 60*1000;

  let days = Math.floor(t/oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMin);
  let seconds = Math.floor((t % oneMin) / 1000);
 
  // set values array
  const values = [days, hours, minutes, seconds];

  // to make a 0 appear if number was lower than 10
  function format(item){
    if (item < 10){
      return item = `0${item}`
    }else{
      return item;
    }
  }

  items.forEach(function(item, index){
    item.innerHTML = format(values[index]);
  });
  if(t < 0){
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class=expired>
    sorry, this giveaway is expired</h4>`
  }
}
let countdown = setInterval(getRemainingTime, 1000)
getRemainingTime();