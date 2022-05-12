var userInput = document.getElementById("inputValue");
var search = document.getElementById("searchBtn");
search.addEventListener("click", function () {
  // console.log(userInput.value);
  currentWeatherAPI(userInput.value);
});
function onecallAPI(lattitude, longitude) {
  console.log("inside Onecall", lattitude, longitude);
  var uvApi =
    "https://api.openweathermap.org/data/2.5/onecall?lat=" +
    lattitude +
    "&lon=" +
    longitude +
    "&appid=5800a31e16468ce7978a067a48244cb0&units=imperial&exclude=minutely,hourly,alerts";

  fetch(uvApi)
    .then(function (response) {
      return response.json();
    })
    .then(function (uviData) {
      console.log(uviData);
    });
}
function currentWeatherAPI(location) {
  const weatherApi =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    location +
    "&appid=5800a31e16468ce7978a067a48244cb0&units=imperial";
  fetch(weatherApi)
    .then(function (response) {
      // console.log("response", response);
      return response.json();
    })
    .then(function (data) {
      console.log("data", data);
      var cityNameEl = document.querySelector(".cityName");
      cityNameEl.textContent = data.name;
      var tempEl = document.querySelector(".temperature");
      tempEl.textContent = data.main.temp + " ℉";
      var humidityEl = document.querySelector(".humidity");
      humidityEl.textContent = data.main.humidity;
      console.log("Coord inside then", data.coord.lon, data.coord.lat);
      onecallAPI(data.coord.lat, data.coord.lon);
      // Var uvIndex
      // console.log("name", data.name);
      // console.log("temp", data.main.temp);
      // console.log("humidity", data.main.humidity);
    });
}
