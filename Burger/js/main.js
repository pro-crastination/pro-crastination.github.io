
(function () {
    const burgerItem = document.querySelector('.header__burger');
    const menu = document.querySelector('.header__menu');
    const body = document.querySelector('body');
    burgerItem.addEventListener('click', () => {
        menu.classList.toggle('active');
        burgerItem.classList.toggle('active');
        body.classList.toggle('lock')
    });
}());



