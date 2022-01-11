(function () {
    const burger = document.querySelector('.burger')
    const menuBurger = document.querySelector('.menu')
    burger.addEventListener('click', () => {
        burger.classList.toggle('burger-active')
        menuBurger.classList.toggle('menu-effect')
        if (body.style.overflow == 'hidden') {
            body.style.overflow = 'scroll'
        }
        else {
            body.style.overflow = 'hidden'
        }
    })
}());