const close = document.querySelector('.close');
const menu = document.querySelector('.menu');
const burger = document.querySelector('.header__container-menu');

close.addEventListener('click', () => {
    menu.style.transform = `translateX(${100}%)`
});

burger.addEventListener('click', () => {
    menu.style.transform = `translateX(${0}%)`
});

document.querySelectorAll('a[href*="://t.me/p2pcloud" i]').forEach(anchor => {
    anchor.setAttribute('target', '_blank');
    anchor.setAttribute('onclick', "gtag('event','telegram_click')");
})

document.querySelectorAll('a[href="/panel.html"]').forEach(anchor => {
    anchor.setAttribute('onclick', "gtag('event','app_click')");
})
document.querySelectorAll('a[href*="app.p2pcloud.io"]').forEach(anchor => {
    anchor.setAttribute('onclick', "gtag('event','app_click')");
})