//still learning javascript :)

const html = document.querySelector('html')
const check = document.querySelector('#checkbox')
const carousel = document.querySelector('.carousel')

check.addEventListener('change', function () {
    html.classList.toggle('dark')
})