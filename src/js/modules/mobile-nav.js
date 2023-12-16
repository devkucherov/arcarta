let mobileNav = document.querySelector('.header__menu')
let mobileBtn = document.querySelector('.header__burger')
let body = document.querySelector('.page__body')

mobileBtn.addEventListener('click', function () {
    mobileNav.classList.toggle('open')
    mobileBtn.classList.toggle('open')
    body.classList.toggle('stopscroll')
})