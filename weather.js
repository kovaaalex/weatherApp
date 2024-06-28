const apiKey = 'YOUR_API_KEY';
const city = 'London';

fetch(`https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&key=8527ffdd784d4f81ac1f1a53d8f718cb&include=minutely`)
  .then(response => response.json())
  .then(data => {
    let temperatures = '';
    data.data.forEach(day => {
      temperatures += `Date: ${day.datetime}, Temp: ${day.temp}\n${data.data[0].city_name}`;
    });
    alert(temperatures);
  })
  .catch(error => console.error('Error:', error));


