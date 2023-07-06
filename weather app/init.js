const apiKey = "b454158132c1f6b9accce479f0b46cf0";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const cityInput = document.querySelector(".city-input");
const searchBtn = document.querySelector("#searchBtn");
const weatherIcon = document.querySelector(".weather-icon");
const weatherBox = document.querySelector(".weather");
const errorMessage = document.querySelector(".error");

searchBtn.addEventListener("click", function () {
  weatherBox.classList.add("active");
  checkWeather(cityInput.value);
  cityInput.value = "";
});

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    errorMessage.classList.add("active");
    document.querySelector(".weather").style.display = "none";
  }else{
    
  }

  let data = await response.json();
  // update the html tags
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}°c`;
  document.querySelector(
    ".humidity"
  ).innerHTML = `${data.main.humidity}% humidity`;
  document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`;
  switch (data.weather[0].main) {
    case "Clouds":
      weatherIcon.src = "img/clouds.png";
      break;
    case "Clear":
      weatherIcon.src = "img/clear.png";
      break;
    case "Rain":
      weatherIcon.src = "img/rain.png";
      break;
    case "Drizzle":
      weatherIcon.src = "img/drizzle.png";
      break;
    case "Mist":
      weatherIcon.src = "img/mist.png";
      break;
    case "Snow":
      weatherIcon.src = "img/snow.png";
      break;
    default:
      weatherIcon.src = "";
      break;
  }
}
// checkWeather("rasht");
