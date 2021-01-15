// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let size = 20
let color = 'black'
let x
let y

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2)
  ctx.fillStyle = color
  ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.strokeStyle = color
  ctx.lineWidth =size
  ctx.stroke()
}

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