const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
  button.addEventListener('click', function (e) {
    const x = e.clientX
    const y = e.clientY

    const buttonTop = e.target.offsetTop
    const buttonLeft = e.target.offsetLeft

    const xInside = x - buttonLeft
    const yInside = y - buttonTop

    const circle = document.createElement('span')
    circle.classList.add('circle')
    circle.style.top = yInside + 'px'
    circle.style.left = xInside + 'px'

    this.appendChild(circle)

    setTimeout(() => circle.remove(), 500)
  })
})
    
// const smallCups = document.querySelectorAll('.cup-small')
// const liters = document.getElementById('liters')
// const percentage = document.getElementById('percentage')
// const remained = document.getElementById('remained')

// updateBigCup()

// smallCups.forEach((cup, idx) => { 
//     cup.addEventListener('click', () => highlightCups(idx)) 
// })

// function highlightCups(idx) { 
//   if(idx === 7 && smallCups[idx].classList.contains('full')) idx--;
//   if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
//     idx-- 
//   } 
  
//   smallCups.forEach((cup, idx2) => { 
//     if(idx2 <= idx) { 
//       cup.classList.add('full') 
//     } else { 
//       cup.classList.remove('full') 
//     } 
//   })

//   updateBigCup()
// }

// function updateBigCup() { 
//   const fullCups = document.querySelectorAll('.cup-small.full').length 
//   const totalCups = smallCups.length

//   if(fullCups === 0) { 
//     percentage.style.visibility = 'hidden' 
//     percentage.style.height = 0 
//   } else { 
//     percentage.style.visibility = 'visible' 
//     percentage.style.height = `${fullCups / totalCups * 330}px`
//     percentage.innerText = `${fullCups /totalCups * 100}%`
//   }

//   if(fullCups === totalCups) { 
//     remained.style.visibility = 'hidden' 
//     remained.style.height = 0 
//   } else { 
//     remained.style.visibility = 'visible' 
//     liters.innerText = `${2 - (250 * fullCups / 1000)}L`
//   }
// }