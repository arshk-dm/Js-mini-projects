const btn = document.querySelector('#sideBarBtn');

btn.addEventListener('click', function(){
    const sideBar = document.querySelector('.sidebar');
    sideBar.classList.toggle('show-sidebar')
})