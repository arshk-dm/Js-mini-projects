/* 
 when you open a site the first thing that loads is
html and then extra stuff like css and js

 DOMContentLoaded will shoot your stuff when html loads

 load event is fired when the whole page is 
loaded (including css and js)

*/

const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

btn.addEventListener("click", function () {
  btn.classList.toggle("slide");
  if (btn.classList.contains("slide")) {
    video.pause();
  } else {
    video.play();
  }
});

// preloader

const preloader = document.querySelector('.preloader');
window.addEventListener('load', function(){
    preloader.classList.add('hide-preloader');
})