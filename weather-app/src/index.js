import { ICONS } from "./icons"

const cityInput = document.querySelector('#city-input'),
	welcomeText = document.querySelector('.welcome'),
	tempBox = document.querySelector('.temp .info span'),
	weatherDesc = document.querySelector('.weather'),
	cityBox = document.querySelector('.city'),
	dateBox = document.querySelector('.date'),
	countryBox = document.querySelector('.country'),
	snackBar = document.querySelector('.snackbar'),
	feelsLike = document.querySelector('.feels-like span'),
	humidityBox = document.querySelector('.humidity span'),
	windSpeed = document.querySelector('.wind span')

let api

cityInput.addEventListener('keyup', (e) => {
	if (e.key == 'Enter' && cityInput != '') {
		requestApi(cityInput.value)
	}
})

const requestApi = (city) => {
	api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=e0b05db76303becf6844083c5f2c7d40`
	fetchData()
}

const fetchData = () => {
	fetch(api)
		.then((res) => res.json())
		.then((result) => weatherDetails(result))
		.catch(() => {
			console.log('error')
		})
}

const weatherDetails = (result) => {
	if (result.cod == '404') {
		snackBar.classList.add('active')
		snackBar.classList.add('error')

		snackBar.innerText = `${cityInput.value} isn't a valid city name`
		setTimeout(() => {
			snackBar.classList.remove('error')
			snackBar.classList.remove('active')
		}, 2000)
	} else {
		const city = result.name,
			country = result.sys.country
		const { description, id, main } = result.weather[0]
		const { temp, feels_like, humidity } = result.main
		const { speed } = result.wind
 
        let icon

		switch (main) {
			case 'Thunderstorm':
				icon = ICONS.Thunderstorm
				break
			case 'Drizzle':
				icon = ICONS.Drizzle
				break
			case 'Rain':
				icon = ICONS.Rain
				break
			case 'Clear':
				icon = ICONS.Clear
				break
			case 'Clouds':
				icon = ICONS.Clouds
				break
			case 'Snow':
				icon = ICONS.Snow
				break
			case 'Mist':
				icon = ICONS.Mist
				break
			default:
				icon = ICONS.Mist
				break
		}

		tempBox.innerHTML = `${Math.floor(temp)}ºC`
		weatherDesc.innerHTML = `${icon}<div class="info"><p>Weather</p><span>${description}</span></div>`
		cityBox.innerHTML = city
		countryBox.innerHTML = country
		feelsLike.innerHTML = `${Math.floor(feels_like)}ºC`
		humidityBox.innerHTML = humidity
		windSpeed.innerHTML = `${speed} km/h`
	}
}

window.addEventListener('load', () => {
	dateBuilder()
})

function dateBuilder() {
	let now = new Date()
	let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
	let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

	let day = days[now.getDay()]
	let date = now.getDate()
	let month = months[now.getMonth()]
	let year = now.getFullYear()

	if (now.getHours() < 12 && now.getHours() >= 5) {
		welcomeText.innerText = 'Good Morning'
		document.body.classList.add('morning')
	} else if (now.getHours() >= 12 && now.getHours() < 17) {
		welcomeText.innerText = 'Good Afternoon'
		document.body.classList.add('afternoon')
	} else {
		welcomeText.innerText = 'Good Evening'
		document.body.classList.add('evening')
	}

	dateBox.innerText = `${day} ${date} ${month} ${year}`
}
