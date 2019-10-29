const prList = document.querySelectorAll('.pr')
const svg1 = document.querySelector('#pr-motion-1')
const svg2 = document.querySelector('#pr-motion-2')
const svg3 = document.querySelector('#pr-motion-3')
var dots = document.querySelectorAll('.dot')
var text = document.querySelector('#text')
var btn = document.querySelector('#svgBtn')
var success = document.querySelector('#success')
var tl = new TimelineMax()
var tl2 = new TimelineMax()
var tl3 = new TimelineMax()
var tl33 = new TimelineMax()
var tl4 = new TimelineMax()
var tl5 = new TimelineMax()

var duration = 0.15

prList[0].addEventListener('mouseenter', prList1Enter)
prList[0].addEventListener('mouseleave', prList1Leave)

function prList1Enter() {
  TweenMax.set(svg1, {
    boxShadow: '15px 20px 14px rgba(71, 84, 119, 0.2)'
  })

  TweenMax.set(svg1, {
    bottom: -40,
    ease: Power1.easeInOut,
    transform: 'scale(1.05)'
  })
  TweenMax.set([svg2, svg3], {
    opacity: 0.75,
    transform: 'scale(0.95)',
    filter: 'blur(12px)'
  })

  tl.to(
    text,
    duration + 0.2,
    {
      fill: 'none',
      transform: 'translateX(-10px) '
    },
    '-=0.3'
  )
    .to(
      text,
      duration + 0.2,
      {
        delay: 0.2,
        fill: '#99B6E5',
        transform: 'translateX(0) '
      },
      '-=0.3'
    )
    .to(
      btn,
      duration - 0.1,
      {
        transform: 'scale(0.8)',
        ease: Power1.easeInOut
      },
      '-=0.1'
    )
    .to(btn, duration, {
      transform: 'scale(1)'
    })
    .to(
      [btn, text, '#textBg'],
      duration,
      {
        opacity: 0
      },
      '+=0.3'
    )
    .to(
      success,
      0.1,
      {
        opacity: 0,
        transform: 'scale(0.4)',
        ease: Power3.easeOut
      },
      '-=0.3'
    )
    .to(
      success,
      0.1,
      {
        opacity: 1,
        transform: 'scale(1)',
        ease: Power3.easeOut
      },
      '-=0.1'
    )
    .to([svg2, svg3, '#success', text, '#svgBtn', '#textBg'], duration, {
      delay: 1
    })

  tl.repeat(10)
}
function prList1Leave() {
  TweenMax.set([svg1, svg2, svg3, '#success', text, '#svgBtn', '#textBg'], {
    clearProps: 'all'
  })

  tl.repeat(false)
  tl.clear()
}

prList[1].addEventListener('mouseenter', prList2Enter)
prList[1].addEventListener('mouseleave', prList2Leave)
function prList2Enter() {
  tl33
    .to([svg1, svg3], duration - 0.1, {
      opacity: 0,
      transform: 'scale(0.95)',
      filter: 'blur(4px)',
      ease: Power0.easeIn
    })
    .to([svg1, svg3], duration, {
      opacity: 0.6,
      transform: 'scale(0.95)',
      zIndex: 0,
      ease: Power0.easeIn
    })
    .to(
      svg2,
      duration,
      {
        bottom: -6,
        zIndex: 4,
        boxShadow: '0 20px 14px rgba(71, 84, 119, 0.2)',
        ease: Power1.easeIn
      },
      '-=0.4'
    )

  tl3
    .to('#defaultBtn', duration, {
      delay: 0.3,
      opacity: 1,
      transform: 'scale(0.96)',
      ease: Power3.easeOut
    })
    .to('#defaultBtn', duration - 0.1, {
      opacity: 0,
      ease: Power3.easeOut,
      transform: 'scale(1)',
      clearProps: 'all'
    })
    .to('#success2', duration - 0.1, {
      opacity: 1,
      transform: 'scale(0.96)'
    })
    .to('#success2', duration + 0.3, {
      opacity: 1,
      transform: 'scale(1)',
      clearProps: 'all'
    })

  tl3.timeScale(0.5)
  tl3.repeat(10)
}

function prList2Leave() {
  TweenMax.set([svg1, svg2, svg3, '#success2'], {
    clearProps: 'all'
  })
  TweenMax.set('#success2', {
    opacity: 0
  })

  tl3.repeat(false)
}

prList[2].addEventListener('mouseenter', prList3Enter)
prList[2].addEventListener('mouseleave', prList3Leave)

function prList3Enter() {
  tl4
    .to([svg1, svg2], duration - 0.1, {
      opacity: 0.9,
      transform: 'scale(0.95)',
      filter: 'blur(4px)'
    })
    .to(svg3, duration - 0.05, {
      bottom: '13%',
      zIndex: 999,
      boxShadow: '-20px 10px 14px rgba(71, 84, 119, 0.2)'
    })

  document.getElementById('scaner').classList.add('scanerTransf')
  document.getElementById('pass').classList.add('passMotion')

  for (var i = 0; i <= dots.length; i++) {
    var j = Math.floor(Math.random() * i)
    dots[j].classList.add('dots')
  }
}

function prList3Leave() {
  TweenMax.set([svg1, svg2, svg3], {
    clearProps: 'all'
  })
  document.getElementById('scaner').classList.remove('scanerTransf')
  document.getElementById('pass').classList.remove('passMotion')

  dots.forEach(element => {
      element.classList.remove('dots')
  });
}

prList[3].addEventListener('mouseenter', prList4Enter)
prList[3].addEventListener('mouseleave', prList4Leave)
function prList4Enter() {
  TweenMax.set(svg1, {
    transformOrigin: 'right center',
    transform: 'scale(0.8) translateX(70px) translateY(70px)'
  })
  TweenMax.set(svg2, {
    transformOrigin: 'center center',
    transform: 'scale(0.8) translateY(40px)'
  })
  TweenMax.set(svg3, {
    transformOrigin: 'left center',
    transform: 'scale(0.75) translateX(-110px) translateY(70px)'
  })

  document.getElementById('wave').classList.add('waveShow')
}

function prList4Leave() {
  TweenMax.set([svg1, svg2, svg3], {
    clearProps: 'all'
  })
  document.getElementById('wave').classList.remove('waveShow')
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
// })
// svg3.addEventListener('mouseenter', () => {
//   prList3Enter()
//   prList[2].classList.add('cardsHover')
// })
// svg3.addEventListener('mouseleave', () => {
//   prList3Leave()
//   prList[2].classList.remove('cardsHover')
// })
