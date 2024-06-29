const apiKey = "apiKey"
const city = "Петриков"
fetch(`https://api.weatherbit.io/v2.0/forecast/hourly?city=Petrikov&key=8527ffdd784d4f81ac1f1a53d8f718cb&hours=48`)
.then(response => response.json())
.then(data => {
  let temperatures = ""
  data.data.forEach(day => {
    document.querySelector('.weather__container h3').innerHTML = `${day.city_name}, ${day.country_code}`
    temperatures += `Date: ${day.datetime}, Temp: ${day.temp}\n${data.data[0].city_name}`;
  })
  alert(temperatures)
})
.catch(alert(error))


