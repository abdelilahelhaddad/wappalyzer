import './style.css'

const mobileDarkLayer = document.querySelector('#mobileDarkLayer');
const mobileNavbar = document.querySelector('#mobileNavbar');
const mobileBurgerMenu = document.querySelector('#mobileBurgerMenu');

mobileBurgerMenu.addEventListener('click', ()=>{
    mobileDarkLayer.classList.remove('hidden')
    mobileNavbar.classList.remove('hidden')
});

mobileDarkLayer.addEventListener('click', ()=>{
    mobileDarkLayer.classList.add('hidden')
    mobileNavbar.classList.add('hidden')
});