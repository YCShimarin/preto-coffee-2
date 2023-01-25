// class active
const navbarNav = document.querySelector('.navbar-nav');
//klik ham menu
document.querySelector('#ham-menu').
onclick = () => {
    navbarNav.classList.toggle('active');
};

//klik luar sidebar
const Ham = document.querySelector('#ham-menu');

document.addEventListener('click', function(e){
    if(!Ham.contains(e.target)  && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});