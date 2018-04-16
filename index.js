const leaf = document.querySelector('#marijuana-leaf')
const pipe = document.querySelector('#marijuana-pipe')
const smoke = document.querySelectorAll('#marijuana-smoke path')

new TimelineMax({ repeat: -1, repeatDelay: 1 })
  .to(leaf, 1, {
  x: 125,
  y: 50,
  scale: .25,
  transformOrigin: 'center'
})
  .to(pipe, 1, { opacity: 1})
  .to(smoke, 1, { 
  opacity: 1, 
  scale: .6, 
  transformOrigin: 'center'
})
  .staggerTo(smoke, 3, {
  y: -200,
  scale: 1,
  opacity: 0
}, 1)
  .to(pipe, 1, { opacity: 0})
  .to(leaf, 1, {
  x: 0,
  y: 0,
  scale: 1,
  transformOrigin: 'center'
})
