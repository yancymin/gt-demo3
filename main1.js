const prList = document.querySelectorAll('.pr')
const svg1 = document.querySelector('#pr-motion-1')
const svg2 = document.querySelector('#pr-motion-2')
const svg3 = document.querySelector('#pr-motion-3')
var text = document.querySelector('#text')
var textBg = document.querySelector('#textBg')
var btn = document.querySelector('#svgBtn')
var success = document.querySelector('#success')

prList[0].addEventListener('mouseenter', prMotion1Enter)
prList[0].addEventListener('mouseleave', prMotion1Leave)

function prMotion1Enter() {
  svg1.classList.add('prMotion1')
  text.classList.add('prMotion1-text')
  textBg.classList.add('prMotion1-textBg')
  btn.classList.add('prMotion1-btn')

  setInterval(() => {
    success.classList.add('prMotion1-success')
  }, 1000)
  setInterval(() => {
    success.classList.remove('prMotion1-success')
  }, 1300)
}

function prMotion1Leave() {
  svg1.classList.remove('prMotion1')
  text.classList.remove('prMotion1-text')
  textBg.classList.remove('prMotion1-textBg')
  btn.classList.remove('prMotion1-btn')
  success.classList.remove('prMotion1-success')
}
