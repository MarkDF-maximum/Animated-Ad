/* Text animation code */
const words = ["WANT<br>HEALTHIER<br>PLANTS?", "A LITTLE<br>DROP<br>OF THIS", "GROWS<br>THEM TWICE<br>AS BIG", "MIRACLE-GRO&reg;<br>ALL PURPOSE<br>PLANT FOOD", "PLANTS NEED<br>LOVE AND<br>MIRACLE-GRO&reg;"]

let masterTl = gsap.timeline({repeat: -1}).pause()
let boxTl = gsap.timeline()

const newLocal = "elastic.out"
boxTl.to('.box', {duration:1, width:"17vw", delay: 0.5, ease: "power4.inOut"})
  .to('.box', {duration:1, height:"7vw", ease: newLocal, onComplete: () => masterTl.play() })
  .to('.box', {duration:2, autoAlpha:0.7, yoyo: true, repeat: -1, ease:"rough({ template: none.out, strength:  1, points: 20, taper: 'none', randomize: true, clamp: false})"})
words.forEach(word => {
  let tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay:1})
  tl.to('.text', {duration: 1, text: word})
  masterTl.add(tl)
})





