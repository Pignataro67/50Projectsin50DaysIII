const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

toggle.addEventListener('click', (e) => {
  const html = document.querySelector('html')
  if (html.classList.contains('dark')) {
    html.classList.remove('dark')
    e.target.innerHTML = 'Dark mode'
  } else {
    html.classList.add('dark')
    e.target.innerHTML = 'Light mode'
  }
})

function setTime() {
  const time = new Date();
  const month = time.getMonth()
  const day = time.getDay()
  const date = time.getDate()
  const hours = time.getHours()
  const hoursForClock = hours >= 13 ? hours % 12 : hours;
  const minutes = time.getMinutes()
  const seconds = time.getSeconds()
  const ampm = hours >= 12 ? 'PM' : 'AM'

  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`
  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`
  
  timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`
  dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTime()

setInterval(setTime, 1000)

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