const prList = document.querySelectorAll('.pr')
const svg1 = document.querySelector('#pr-motion-1')
const svg2 = document.querySelector('#pr-motion-2')
const svg3 = document.querySelector('#pr-motion-3')
var dots = document.querySelectorAll('.dot')
var text = document.querySelector('#text')
var btn = document.querySelector('#svgBtn')
var success = document.querySelector('#success')
var gif = document.querySelector('#sensebot')
var tl = new TimelineMax()
var tl4 = new TimelineMax()
var tl5 = new TimelineMax()

var duration = 0.15
var hidden = function(svgA, svgB) {
  TweenMax.set([svgA, svgB], {
    opacity: 0.5,
    scale: 0.93,
    filter: 'blur(6px)'
  })
}

prList[0].addEventListener('mouseenter', prList1Enter)
prList[0].addEventListener('mouseleave', prList1Leave)

function prList1Enter() {
  hidden(svg2, svg3)

  TweenMax.set(svg1, {
    boxShadow: '15px 20px 14px rgba(71, 84, 119, 0.2)'
  })

  TweenMax.set(svg1, {
    bottom: -40,
    ease: Power1.easeInOut,
    transform: 'scale(1.05)'
  })

  tl.to('#svgBtn', duration, {
    scale: 0.85,
    delay: 1,
    ease: Power1.easeOut,
    transformOrigin: 'center'
  })
    .to('#svgBtn', duration, {
      scale: 1
    })
    .to(['#svgBtn', text, '#textBg'], duration, {
      opacity: 0
    })
    .to(success, 0, {
      opacity: 0,
      transform: 'scale(0.4)',
      ease: Power3.easeOut
    })
    .to('#avatar', duration + 0.2, {
      opacity: 1
    })
    .to(
      success,
      0.1,
      {
        opacity: 1,
        transform: 'scale(1)',
        ease: Power3.easeOut
      },
      '-=0.3'
    )
    .to(
      '#svg1SuccessPath',
      duration + 0.2,
      {
        strokeDashoffset: 0,
        ease: Power2.easeOut
      },
      '+=0.08'
    )
    .to('#svg1SuccessPath', 0, {
      clearProps: 'all'
    },'+==0.2')
    .to(
      [svg2, svg3, '#success', text, '#svgBtn', '#textBg'],
      duration,
      {
        delay: 0.5
      }
    )

  tl.repeat(20)
}
function prList1Leave() {
  TweenMax.set(
    [svg1, svg2, svg3, '#success', text, '#svgBtn', '#textBg', '#avatar'],
    {
      clearProps: 'all'
    }
  )

  tl.repeat(false)
  tl.clear()
}

prList[1].addEventListener('mouseenter', prList2Enter)
prList[1].addEventListener('mouseleave', prList2Leave)
function prList2Enter() {
  hidden(svg1, svg3)

  TweenMax.set(svg2, {
    bottom: -6,
    zIndex: 4,
    boxShadow: '0 20px 14px rgba(71, 84, 119, 0.2)',
    ease: Power1.easeIn
  })

  gif.src = 'sensebot.gif'
}

function prList2Leave() {
  gif.src = 'static-pic.png'

  TweenMax.set([svg1, svg2, svg3], {
    clearProps: 'all'
  })
}

prList[2].addEventListener('mouseenter', prList3Enter)
prList[2].addEventListener('mouseleave', prList3Leave)

TweenMax.set('#scaner', {
  transformOrigin: 'center',
  y: -20
})

function prList3Enter() {
  hidden(svg1, svg2)

  TweenMax.set(svg3, {
    bottom: '13%',
    zIndex: 999,
    boxShadow: '-20px 10px 14px rgba(71, 84, 119, 0.2)'
  })

  tl4.restart()
  tl4.repeat(100)

  tl4
    .to('#scaner', duration + 1.6, {
      y: 240
    })
    .to(
      '#passBg',
      duration,
      {
        fill: '#AAEEEA',
        stroke: '#27C2B9'
      },
      '-=1'
    )
    .to(
      '#pass',
      duration,
      {
        stroke: '#27C2B9'
      },
      '-=1'
    )
    .to('#pass', 0, {
      clearProps: 'all'
    })

  for (var i = 0; i <= dots.length; i++) {
    var j = Math.floor(Math.random() * i)
    dots[j].classList.add('dots')
  }
}

function prList3Leave() {
  tl4.clear()
  //   tl4.repeat(false)

  TweenMax.set([svg1, svg2, svg3, '#scaner', '#pass', '#passBg'], {
    clearProps: 'all'
  })

  TweenMax.set('#scaner', {
    transformOrigin: 'center',
    y: -20
  })

  dots.forEach(element => {
    element.classList.remove('dots')
  })
}

prList[3].addEventListener('mouseenter', prList4Enter)
prList[3].addEventListener('mouseleave', prList4Leave)

TweenMax.set('#bug', {
  scale: 0.8,
  opacity: 0
})
function prList4Enter() {
  TweenMax.set(svg1, {
    transformOrigin: 'right center',
    transform: 'scale(0.8) translateX(70px) translateY(30px)'
  })
  TweenMax.set(svg2, {
    transformOrigin: 'center center',
    transform: 'scale(0.82) translateY(40px)'
  })
  TweenMax.set(svg3, {
    transformOrigin: 'left center',
    transform: 'scale(0.75) translateX(-110px) translateY(30px)'
  })

  tl5.to('#bug', duration + 0.2, {
    scale: 0.88,
    opacity: 1,
    ease: Power1.easeIn
  })

  var svgs = document.querySelectorAll('.bugPath')

  svgs[0].classList.add('bugMotion-1')
  svgs[3].classList.add('bugMotion-2')
  svgs[4].classList.add('bugMotion-3')
  svgs[1].classList.add('bugMotion-4')
  svgs[2].classList.add('bugMotion-5')
  document.getElementById('wave').classList.add('waveShow')
}

function prList4Leave() {
  TweenMax.set([svg1, svg2, svg3, '#bug'], {
    clearProps: 'all'
  })

  TweenMax.set('#bug', {
    scale: 0.8,
    opacity: 0
  })

  document.getElementById('wave').classList.remove('waveShow')
  document.getElementById('bug').classList.remove('bugMotion')
}

// svg1.addEventListener('mouseenter', () => {
//   prList1Enter()
//   prList[0].classList.add('cardsHover')
// })
// svg1.addEventListener('mouseleave', () => {
//   prList1Leave()
//   prList[0].classList.remove('cardsHover')
// })
// svg2.addEventListener('mouseenter', () => {
//   prList2Enter()
//   prList[1].classList.add('cardsHover')
// })
// svg2.addEventListener('mouseleave', () => {
//   prList2Leave()
//   prList[1].classList.remove('cardsHover')
// }).
// svg3.addEventListener('mouseenter', () => {
//   prList3Enter()
//   prList[2].classList.add('cardsHover')
// })
// svg3.addEventListener('mouseleave', () => {
//   prList3Leave()
//   prList[2].classList.remove('cardsHover')
// })
