const menuToggle = document.querySelector('.menu-toggle')
const navBar = document.querySelector('.navigation')

menuToggle.addEventListener('click', function() {
    navBar.classList.toggle('active')
})