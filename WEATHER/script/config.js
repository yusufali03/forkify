// const countryWeatherInfo = async function (country) {
//   return (API_URL = `http://api.weatherapi.com/v1/current.json?key=91a3164fcb414f28a53163242230909&q=${country}&aqi=no `);
// };
// const apiKey = "91a3164fcb414f28a53163242230909"; // Replace with your API key
// const city = "Angren"; // Replace with the name of the city you want to get weather data for

// const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

// fetch(apiUrl)
//   .then(response => response.json())
//   .then(data => {
//     const temperature = data.current.temp_c;
//     const weatherDescription = data.current.condition.text;
//     console.log(
//       `The temperature in ${city} is ${temperature} degrees Celsius. The weather is ${weatherDescription}.`
//     );
//   })
//   .catch(error => console.log(error));
const api = function (country) {
  const API_example = fetch(
    `http://api.weatherapi.com/v1/current.json?key=91a3164fcb414f28a53163242230909&q=${country}&aqi=no`
  )
    .then(res => res.json())
    .then(data => console.log(data));
};
