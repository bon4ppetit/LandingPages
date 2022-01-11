(function () {
    const burger = document.querySelector('.header__burger')
    const menuBurger = document.querySelector('.header__menu')
    burger.addEventListener('click', () => {
        burger.classList.toggle('header__burger-active')
        menuBurger.classList.toggle('header__menu-effect')
    })
}());

function serchClick() {
    searchClickIn.classList.toggle('menu__link-input-effect')
}