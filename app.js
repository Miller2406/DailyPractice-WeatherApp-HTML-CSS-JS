// Queryselector 
const search = document.querySelector('.search');
const temp = document.querySelector('.temp')
const humidity = document.querySelector('.humidity')
const wind = document.querySelector('.wind')
const rain = document.querySelector('.rain')
const uvi = document.querySelector('.uvi')

// DOM
search.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(search.elements.query.value)
})

// API requesting

