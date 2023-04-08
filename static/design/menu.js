const close = document.querySelector('.close');
const menu = document.querySelector('.menu');
const burger = document.querySelector('.header__container-menu');



close.addEventListener('click', () => {
    menu.style.transform = `translateX(${100}%)`
});

burger.addEventListener('click', () => {
    menu.style.transform = `translateX(${0}%)`
});
