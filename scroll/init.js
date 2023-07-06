// date
const date = document.querySelector("#date");
date.innerHTML = new Date().getFullYear();

// close links
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const myLinks = document.querySelector(".links");

const home = document.querySelector("#home");

navToggle.addEventListener("click", function () {
  // navToggle.classList.toggle('show-links');
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = myLinks.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

// fixed scrollbar
const nav = document.querySelector("#nav");
const topLink = document.querySelector(".top-link");
window.addEventListener("scroll", function () {
  // console.log(window.pageYOffset);
  const scrollHeight = window.pageYOffset;
  const navHeight = nav.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    nav.classList.add("fixed-nav");
  } else {
    nav.classList.remove("fixed-nav");
  }

  const homeHeight = home.getBoundingClientRect().height;

  if (scrollHeight > homeHeight) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach(function(link){
    link.addEventListener('click', function(e){
        e.preventDefault();
        // navigate to specific spot
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        // calculate the heights

        const navHeight = nav.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = nav .classList.contains('fixed-nav');
        
        
        let position = element.offsetTop - navHeight;
        if(!fixedNav){
            position = position - navHeight;

        }

        if(navHeight > 82){
            position = position + containerHeight;
        }
        window.scrollTo({
            left:0,
            top: position,
        });
        linksContainer.style.height = 0;
    });
})