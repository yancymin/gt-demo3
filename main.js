const prList = document.querySelectorAll('.pr')
const svg1 = document.querySelector('#pr-motion-1')
const svg2 = document.querySelector('#pr-motion-2')
const svg3 = document.querySelector('#pr-motion-3')
var tl = new TimelineMax()
var textTl = new TimelineMax()

var duration = 0.2

prList[0].addEventListener('mouseenter', e => {
  var text = document.querySelector('#text')
  var btn = document.querySelector('#svgBtn')
  var success = document.querySelector('#success')

  tl.to(svg1, duration, {
    boxShadow: '15px 20px 14px rgba(71, 84, 119, 0.2)'
  })
  tl.to(svg1, duration - 0.1, {
    bottom: -25,
    ease: Power1.easeInOut,
    transform: 'scale(1.08)'
  })
    .to([svg2, svg3], duration, {
      opacity: 0.7,
      transform: 'scale(0.98)'
    })
    .to(success, duration, {
      opacity: 0,
      transform: 'scale(0.4)',
      delay: 0.3,
      ease: Power1.easeOut
    })
    .to(success, duration, {
      opacity: 1,
      transform: 'scale(1)',
      delay: 0.2,
      ease: Power1.easeOut
    })

  textTl
    .to(text, duration + 0.2, {
      fill: 'none',
      transform: 'translateX(-10px) '
    })
    .to(text, duration + 0.2, {
      delay: 0.2,
      fill: '#99B6E5',
      transform: 'translateX(0) '
    })
    .to(btn, duration, {
      transform: 'scale(0.8)',
      ease: Power1.easeInOut
    })
    .to(btn, duration - 0.2, {
      transform: 'scale(1)',
      ease: Power1.easeInOut
    })
    .to([btn, text, '#textBg'], duration, {
      opacity: 0
    })
})

prList[0].addEventListener('mouseleave', e => {
  tl.to([svg1, svg2, svg3, '#success'], 0.2, {
    clearProps: 'all'
  })

  textTl.to([text, '#svgBtn', '#textBg'], duration, {
    clearProps: 'all'
  })
})

var tl2 = new TimelineMax()

prList[1].addEventListener('mouseenter', e => {
  tl2
    .to(svg2, duration, {
      bottom: -6,
      zIndex: 999,
      boxShadow: '0 20px 14px rgba(71, 84, 119, 0.2)'
    })
    .to([svg1, svg3], duration, {
      opacity: 0.7,
      transform: 'scale(0.98)'
    })
})

prList[1].addEventListener('mouseleave', e => {
  tl2.to([svg1, svg2, svg3], 0.2, {
    clearProps: 'all'
  })
})
