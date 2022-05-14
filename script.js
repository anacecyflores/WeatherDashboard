//    creating multiple p elements to display all the values separately
var userInput = document.getElementById("inputValue");
var search = document.getElementById("searchBtn");
search.addEventListener("click", function () {
  // console.log(userInput.value);
  currentWeatherAPI(userInput.value);
});
function onecallAPI(latitude, longitude) {
  console.log("inside Onecall", latitude, longitude);
  var uvApi =
    "https://api.openweathermap.org/data/2.5/onecall?lat=" +
    latitude +
    "&lon=" +
    longitude +
    "&appid=5800a31e16468ce7978a067a48244cb0&units=imperial&exclude=minutely,hourly,alerts";

  fetch(uvApi)
    .then(function (response) {
      return response.json();
    })
    .then(function (uviData) {
      console.log(uviData);
      var uvIndexEl = document.querySelector(".uvIndex");
      var uvSpan = document.createElement("span");
      uvSpan.setAttribute("id", "uvColor");
      uvSpan.innerHTML = uviData.current.uvi;
      uvIndexEl.textContent = "UV Index: ";
      uvIndexEl.appendChild(uvSpan);
      uvNumber = uviData.current.uvi;

      if (uvNumber <= 3) {
        $("#uvColor").css("background-color", "#78c74a").attr("class", "badge");
      } else if (uvNumber <= 5) {
        $("#uvColor").css("background-color", "#FEC901").attr("class", "badge");
      } else if (uvNumber <= 7) {
        $("#uvColor").css("background-color", "#e36530").attr("class", "badge");
      } else if (uvNumber <= 10) {
        $("#uvColor").css("background-color", "#cc3129").attr("class", "badge");
      } else {
        $("#uvColor").css("background-color", "#a76ebb").attr("class", "badge");
      }
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
      tempEl.textContent = "Temperature: " + data.main.temp + " ℉";
      var humidityEl = document.querySelector(".humidity");
      humidityEl.textContent = data.main.humidity;
      console.log("Coord inside then", data.coord.lon, data.coord.lat);
      onecallAPI(data.coord.lat, data.coord.lon);
      // console.log("name", data.name);
      // console.log("temp", data.main.temp);
      // console.log("humidity", data.main.humidity);
      var windEl = document.querySelector(".windSpeed");
      windEl.textContent = data.wind.speed;
      var weatherIcon = data.weather[0].icon;
      // console.log("Weather Icon here", weatherIcon);
      var icon = document.createElement("img");
      // console.log(icon);
      icon.setAttribute(
        "src",
        `https://openweathermap.org/img/wn/${weatherIcon}.png`
      );
      cityNameEl.appendChild(icon);
      // weatherForecast();
      // forecastApi();
    });
}
function weatherForecast(forecast) {
  var forecastApi =
    "https://api.openweathermap.org/data/2.5/forecastl?lat=" +
    latitude +
    "&lon=" +
    longitude +
    "&appid=5800a31e16468ce7978a067a48244cb0&units=imperial&exclude=minutely,hourly,alerts";
  fetch(weatherForecast).then(function (latitude, longitude) {
    console.log("location", location);
    return location.json();
  });
}
