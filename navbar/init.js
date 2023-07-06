const navBtn = document.querySelector('.nav-btn');
navBtn.addEventListener('click', function(){
    const hiddenNav = document.querySelector('.responsive-ul');
    // if(hiddenNav.classList.contains('show-links')){
    //     hiddenNav.classList.remove('show-links');
    //     navBtn.classList.remove('rotated')
    // }else{
    //     hiddenNav.classList.add('show-links');
    //     navBtn.classList.add('rotated')
    // }
    hiddenNav.classList.toggle('show-links');
    navBtn.classList.toggle('rotated');
})