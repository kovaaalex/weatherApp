const apiKey = "8527ffdd784d4f81ac1f1a53d8f718cb"
let city = "Петриков"
function fromCurrentTime(currentWeather){
  const regex = /T(.*)/s
  const match = currentWeather.timestamp_local.match(regex)[1].slice(0, 5)
  const weatherContainer = document.querySelector('.weather__hourly__container')
  weatherContainer.innerHTML += 
  `<div class='hour__weather'>
    <h5>${match}</h5>
    ${currentWeather.weather.icon}
  </div>`
}
function showWeather(){
  fetch(`https://api.weatherbit.io/v2.0/forecast/hourly?city=${city}&key=8527ffdd784d4f81ac1f1a53d8f718cb&hours=48`)
  .then(response => response.json())
  .then(data => {
    let temperatures = ""
    data.data.forEach(day => {
      document.querySelector('.forecast__container h3').innerHTML = `${data.city_name}, ${data.country_code}`
      temperatures += `Date: ${day.datetime}, Temp: ${day.temp}\n${data.data[0].city_name}`
      fromCurrentTime(day)
    })
  })
  .catch(alert(error))
}
showWeather()


