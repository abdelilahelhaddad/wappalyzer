import './style.css'

const mobileDarkLayer = document.querySelector('#mobileDarkLayer');
const mobileNavbar = document.querySelector('#mobileNavbar');
const mobileBurgerMenu = document.querySelector('#mobileBurgerMenu');

const productsNavBar = document.querySelector('#productsNavBar');
const productsDropDown = document.querySelector('#productsDropDown');

mobileBurgerMenu.addEventListener('click', ()=>{
    mobileDarkLayer.classList.remove('hidden')
    mobileNavbar.classList.remove('hidden')
});

mobileDarkLayer.addEventListener('click', ()=>{
    mobileDarkLayer.classList.add('hidden')
    mobileNavbar.classList.add('hidden')
});

productsNavBar.addEventListener('click', ()=>{
    productsDropDown.classList.toggle('hidden');
});

