const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5e6bff04ee0ce08c9544b7433ef0038a&page=1'
// const IMG_PATH = 'https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=5e6bff04ee0ce08c9544b7433ef0038a&query="'
const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

//Get initial Movies
getMovies(API_URL)

async function getMovies(url) {
  const res = await fetch(url)
  const data = await res.json()

  showMovies(data.results)
}

function showMovies(movies) {
  main.innerHTML = ''

  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie

    const movieEl = document.createElement('div')
    movieEl.classList.add('movie')

    movieEl.innerHTML = `
      <img src="${IMG_PATH + poster_path}" alt="${title}">
      <div class="movie-info">
    <h3>${title}</h3>
    <span class="${getClassByRate(vote_average)}">${vote_average}</span>
      </div>
      <div class="overview">
    <h3>Overview</h3>
    ${overview}
    </div>
    `
    main.appendChild(movieEl)
  })
}

function getClassByRate(vote) {
  if(vote >= 8) {
    return 'green'
  } else if (vote >= 5) {
    return 'orange'
  } else {
    return 'red'
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const searchTerm = search.value

  if(searchTerm && searchTerm !== '') {
    getMovies(SEARCH_API + searchTerm)

    search.value = ''
  } else {
    window.location.reload()
  }
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