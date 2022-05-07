var userInput = document.getElementById("inputValue");
var search = document.getElementById("searchBtn");
search.addEventListener("click", function () {
  console.log(userInput.value);
  currentWeatherAPI(userInput.value);
});
function currentWeatherAPI(location) {
  const weatherApi =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    location +
    "&appid=5800a31e16468ce7978a067a48244cb0&units=imperial";
  fetch(weatherApi)
    .then(function (response) {
      console.log("response", response);
      return response.json();
    })
    .then(function (data) {
      console.log("data", data);
    });
}

// const weatherApi =
//   "https://api.openweathermap.org/data/2.5/weather?q=london&appid=5800a31e16468ce7978a067a48244cb0&units=imperial";
// fetch(weatherApi)
//   .then(function (response) {
//     console.log("response", response);
//     return response.json();
//   })
//   .then(function (data) {
//     console.log("data", data);
//   });
