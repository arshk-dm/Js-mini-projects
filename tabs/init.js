const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function (e) {
  /* this e.target allows us to see what we're 
  currently clicking, if we click on a p tag is
  will clg p if we click on btn it will clg btn */
  console.log(e.target);
  const id = e.target.dataset.id;
  if(id){
    btns.forEach(function(btn){
        btn.classList.remove('active');
        e.target.classList.add('active');
    });
    articles.forEach(function(content){
        content.classList.remove('active');
    })
    const element = document.getElementById(id);
    element.classList.add('active');
  }
});
