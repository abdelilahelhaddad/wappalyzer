import './style.css'

const mobileDarkLayer = document.querySelector('#mobileDarkLayer');
const mobileNavbar = document.querySelector('#mobileNavbar');
const mobileBurgerMenu = document.querySelector('#mobileBurgerMenu');
const body = document.querySelector('body');

mobileBurgerMenu.addEventListener('click', () => {
    mobileDarkLayer.classList.remove('hidden');
    mobileNavbar.classList.remove('hidden');
    body.style.overflowY = 'hidden';
});

mobileDarkLayer.addEventListener('click', () => {
    mobileDarkLayer.classList.add('hidden');
    mobileNavbar.classList.add('hidden');
    body.style.overflowY = 'auto';
});

//Toggle Products Menu

const productsNavBar = document.querySelector('#productsNavBar');
const productsDropDown = document.querySelector('#productsDropDown');

productsNavBar.addEventListener('click', () => {
    productsDropDown.classList.toggle('hidden');
});

//Toggle Recources Menu

const resourcesNavBar = document.querySelector('#resourcesNavBar');
const resourcesDropDown = document.querySelector('#resourcesDropDown');

resourcesNavBar.addEventListener('click', () => {
    resourcesDropDown.classList.toggle('hidden');
});

//Close menu when click outside

window.addEventListener('click', function (e) {
    if (e.target != productsNavBar) {
        productsDropDown.classList.add('hidden');
    }
    if (e.target != resourcesNavBar) {
        resourcesDropDown.classList.add('hidden');
    }
});