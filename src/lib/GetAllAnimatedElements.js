function ScrollAnimations({el, animation='slideIn', duration='1s', cycle='ease-in'}){
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = `${animation} ${duration} ${cycle}`
      }
    })
  })
  observer.observe(el)
}

const els = document.querySelectorAll('[animation]')
els.forEach(i =>{
  ScrollAnimations({
    el: i, 
    animation: i.getAttribute('animation'), 
    cycle: i.getAttribute('cycle'),
    duration: i.getAttribute('duration')
  })
})