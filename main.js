const prList = document.querySelectorAll('.pr')
const svg1 = document.querySelector('#pr-motion-1')
const svg2 = document.querySelector('#pr-motion-2')
const svg3 = document.querySelector('#pr-motion-3')
var text = document.querySelector('#text')
var btn = document.querySelector('#svgBtn')
var success = document.querySelector('#success')
var tl = new TimelineMax()
var tl2 = new TimelineMax()

var duration = 0.15

prList[0].addEventListener('mouseenter', e => {
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
})

prList[0].addEventListener('mouseleave', e => {
  TweenMax.set([svg1, svg2, svg3, '#success', text, '#svgBtn', '#textBg'], {
    clearProps: 'all'
  })

  tl.repeat(false)
  tl.clear()
})

var tl3 = new TimelineMax()
var tl33 = new TimelineMax()

prList[1].addEventListener('mouseenter', e => {
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
})

prList[1].addEventListener('mouseleave', e => {
  TweenMax.set([svg1, svg2, svg3, '#success2'], {
    clearProps: 'all'
  })
  TweenMax.set('#success2', {
    opacity: 0
  })

  tl3.repeat(false)
})

var tl4 = new TimelineMax()

prList[2].addEventListener('mouseenter', e => {
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

  var dots = document.getElementsByClassName('dot')
  var num = Math.floor(Math.random() * (dots.length - 1))

  for (num; num <= dots.length; num++) {
    dots[num].classList.add('dots')
  }
})

prList[2].addEventListener('mouseleave', e => {
  TweenMax.set([svg1, svg2, svg3], {
    clearProps: 'all'
  })
  document.getElementById('scaner').classList.remove('scanerTransf')
  document.getElementById('pass').classList.remove('passMotion')

  var dots = document.getElementsByClassName('dot')
  for (var i = 0; i <= dots.length; i++) {
    dots[i].classList.remove('dots')
  }
})

var tl5 = new TimelineMax()

prList[3].addEventListener('mouseenter', e => {
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
  //   tl5.to([svg1, svg2, svg3], duration, {
  //     transform: 'scale(0.6)'
  //   })

  document.getElementById('wave').classList.add('waveShow')
})

prList[3].addEventListener('mouseleave', e => {
  TweenMax.set([svg1, svg2, svg3], {
    clearProps: 'all'
  })
  document.getElementById('wave').classList.remove('waveShow')
})
