const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bgs_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
  header.innerHTML = '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfawQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />'
  title.innerHTML ='Lorem ipsum dolor sit amet'
  excerpt.innerHTML='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt totam.'
  profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />'
  name.innerHTML = 'John Doe'
  date.innerHTML = 'Jan 19, 2021'

  animated_bgs.forEach(bg => bg.classList.remove('animated-bg')
  )
  animated_bgs_texts.forEach(bg => bg.classList.remove('animated-bg-text'))
}

// const canvas = document.getElementById('canvas');
// const increaseBtn = document.getElementById('increase');
// const decreaseBtn = document.getElementById('decrease');
// const sizeEL = document.getElementById('size');
// const colorEl = document.getElementById('color');
// const clearEl = document.getElementById('clear');

// const ctx = canvas.getContext('2d');

// let size = 10
// let isPressed = false
// let color = 'black'
// let x
// let y

// canvas.addEventListener('mousedown', (e) => { 
//   isPressed = true
    
//   x = e.offsetX 
//   y = e.offsetY
// })

// canvas.addEventListener('mouseup', (e) => { 
//   isPressed = false

//   x = undefined 
//   y = undefined
// })

// canvas.addEventListener('mousemove', (e) => {
//   if(isPressed) {
//     const x2 = e.offsetX
//     const y2 = e.offsetY

//     drawCircle(x2, y2)
//     drawLine(x, y, x2, y2)

//     x = x2
//     y = y2
//   }
// })

// function drawCircle(x, y) {
//   ctx.beginPath();
//   ctx.arc(x, y, size, 0, Math.PI * 2)
//   ctx.fillStyle = color
//   ctx.fill()
// }

// function drawLine(x1, y1, x2, y2) {
//   ctx.beginPath()
//   ctx.moveTo(x1, y1)
//   ctx.lineTo(x2, y2)
//   ctx.strokeStyle = color
//   ctx.lineWidth = size * 2
//   ctx.stroke()
// }

// function updateSizeOnScreen() { 
//   sizeEL.innerText = size
// }

// increaseBtn.addEventListener('click', () => {
//   size += 5
  
//   if(size > 50) { 
//     size = 50 
//   }

//  updateSizeOnScreen()
// })

// decreaseBtn.addEventListener('click', () => { 
//   size -= 5
  
//   if(size < 5) { 
//     size = 5 
//   }

//   updateSizeOnScreen()
// })

// colorEl.addEventListener('change', (e) => color = e.target.value)

// clearEl.addEventListener('click', () => ctx.clearRect(0,0, canvas.width, canvas.height))

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