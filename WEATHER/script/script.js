// "use strict";
import { countryWeatherInfo } from "./renderWeatherInfo.js";
const parentElement = document.querySelector(".container1");

const btnSubmit = document.querySelector(".btn");
const con1 = document.querySelector(".container1");
const con = document.querySelector(".container");
const btnBack = document.querySelector(".btn_back");

const eventListeners = async function () {
  btnSubmit.addEventListener("click", function () {
    con1.classList.remove("hidden");
    con.classList.add("hidden");
  });
  btnBack.addEventListener("click", function () {
    con.classList.remove("hidden");
    con1.classList.add("hidden");
  });
};
eventListeners();

const countryWeatherInfo = async function (country) {
  const API = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=91a3164fcb414f28a53163242230909&q=${country}&aqi=no`
  )
    .then(res => {
      res.json();
    })
    .then(data => {
      console.log(data);
      /* const data = {
        temperature: data.current.temp_c,
        weatherDescription: data.current.condition.text,
        icon: data.current.condition.icon,
        realFeel: data.current.feelslike_c,
        cloud: data.current.cloud,
        wind: data.current.wind_kph,
        humidity: data.current.humidity,
        pressure: data.current.pressure_in,
        windDegree: data.current.wind_degree,
      }; */
    });

  countryWeatherInfo("uzbekistan");
};

// const weatherInfo = function () {
//   const render = `<button title="link" type="button" class="btn_back">
//     <i class="fa-solid fa-arrow-left fa-2xl arrow"></i>
//     </button>
//     <div>Current Weather</div>
//     <div class="time_got-weather">10:30</div>
//     </header>
//     <section>
//     <div class="first_part-info-con">
//     <div class="info_left green">
//       <div class="info">
//         <i class="fa-solid fa-sun fa-2xl sun">${data.icon}</i>
//         <span>${data.temperature}</span>
//       </div>
//       <h3>${data.weatherDescription}</h3>
//     </div>
//     <div class="info_right yellow">
//       <div>Real Feel: ${data.realFeel}</div>
//       <div>Cloud:${data.cloud}</div>
//     </div>
//     </div>
//     <div class="second-part-info-con">
//     <div class="info_left blue">
//       <p>Wind: ${data.wind}</p>
//       <p>Humidity: ${data.humidity}</p>
//     </div>
//     <div class="info_right red">
//       <p>Pressure: ${data.pressure}</p>
//       <p>Wind degree: ${data.windDegree}</p>
//     </div>
//     </div>
//     </section>`;

//   parentElement.insertAdjacentHTML("afterbegin", render);
// };

// weatherInfo();
