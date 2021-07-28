const API_KEY = '4fe36a32e69c20df98b52fec37171cd4';

const fetchData = position => {
	const { latitude, longitude } = position.coords;
	fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`)
		.then(response => response.json())
		.then(data => setWeatherData (data))
		
}

const setWeatherData = data => {
	console.log(data);
	const weatherData = {
		location: data.name,
		description: data.weather[0].main,
		humidity: data.main.humdity,
		pressure: data.main.pressure,
		temperature: data.main.temp,
		date: getDate(),
	}
	
	Object.keys(weatherData).forEach( key => {
		document.getElementById(key).textContent = weatherData[key];
	});
}
 const getDate = () => {
    let date = new Date();
    return `${date.getDate()}-${ ('0' + (date.getMonth() + 1)).slice(-2)}-${date.getFullYear()}`;

 }
const onLoad = () => {
	navigator.geolocation.getCurrentPosition(fetchData);
}
