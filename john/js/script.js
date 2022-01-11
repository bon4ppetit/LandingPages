(function () {
    const burger = document.querySelector('.burger')
    const menuBurger = document.querySelector('.header__menu')
    burger.addEventListener('click', () => {
        burger.classList.toggle('burger-active')
        menuBurger.classList.toggle('burger__menu-effect')
    })
}());