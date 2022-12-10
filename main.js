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

const productsNavBar = document.querySelector('#productsNavBar');
const productsDropDown = document.querySelector('#productsDropDown');

productsNavBar.addEventListener('click', ()=>{
    productsDropDown.classList.toggle('hidden');
});

const resourcesNavBar = document.querySelector('#resourcesNavBar');
const resourcesDropDown = document.querySelector('#resourcesDropDown');

resourcesNavBar.addEventListener('click', ()=>{
    resourcesDropDown.classList.toggle('hidden');
});