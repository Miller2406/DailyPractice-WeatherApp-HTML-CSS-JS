// Queryselector 
const card = document.querySelector('.card')
const search = document.querySelector('.search');
const cityName = document.querySelector('#city-name');
const weatherName = document.querySelector('.weather-name')
const weatherIcon = document.querySelector('#weather-icon')
const temp = document.querySelector('.temp');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');
const feelsLike = document.querySelector('.feels-like');
const time = document.querySelector('.time');

// time set
let timeOffSet = new Date().getTimezoneOffset()
let getTime = new Date();

// DOM
search.addEventListener('submit', (e) => {
    e.preventDefault();
    var searchValue = search.elements.query.value;
    getWeather(searchValue);
})

// API requesting
// https://openweathermap.org/img/wn/11d@2x.png  icon
//https://api.openweathermap.org/data/2.5/weather?q=London&appid=9d0940fd7a49ffb987be88648e622d40&units=metric
const getWeather = async (searchValue) => {
    try {
        // url request
        const url = 'https://api.openweathermap.org/data/2.5/weather?';
        const appId = 'appid=9d0940fd7a49ffb987be88648e622d40';
        // city request
        const cityUrl = `&q=${searchValue}`;
        const units = '&units=metric';
        const response = await fetch(url + appId + cityUrl + units);
        const data = await response.json();
        // citi name
        cityName.innerHTML = data.name !== undefined ? data.name : 'Try AGAIN!';
        // weather name
        weatherName.innerHTML = data.weather[0].description;
        // icon
        const icon = data.weather[0].icon
        weatherIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
        // temp
        temp.innerHTML = data.main.temp;
        // humidity
        humidity.innerHTML = data.main.humidity;
        // speed
        wind.innerHTML = data.wind.speed;
        // feels
        feelsLike.innerHTML = data.main.feels_like;
        // time calculations with change time by zone
        const getHr = (timeOffSet / 60) + getTime.getHours() + ((data.timezone) / 3600);
        time.innerHTML = `Time : ${getHr}:${getTime.getMinutes()}`

        // input background called
        const dataMain = data.weather[0].main
        // choose the background
        let bg = '';
        if (dataMain == 'Clear') {
            bg = 'https://images.unsplash.com/photo-1601297183305-6df142704ea2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
        else if (dataMain == 'Clouds') {
            bg = 'https://images.unsplash.com/photo-1454335459109-cd8a2c230bc2?q=80&w=1860&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
        else if (dataMain == 'Drizzle') {
            bg = 'https://images.unsplash.com/photo-1620385019253-b051a26048ce?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
        else if (dataMain == 'Rain') {
            bg = 'https://images.unsplash.com/photo-1620385019253-b051a26048ce?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
        else if (dataMain == 'Thunderstorm') {
            bg = 'https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
        else if (dataMain == 'Snow') {
            bg = 'https://images.unsplash.com/photo-1478265409131-1f65c88f965c?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
        else {
            bg = 'https://images.unsplash.com/photo-1543968996-ee822b8176ba?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }

        // change background image
        card.style.backgroundImage = `url('${bg}')`;
    }
    catch (error) {
        alert(`City is not found!!!`)
        console.log('error something here :', error)
    }
}

// first try
getWeather('london')