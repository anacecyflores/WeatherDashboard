//    creating multiple p elements to display all the values separately
var userInput = document.getElementById("inputValue");
var search = document.getElementById("searchBtn");
search.addEventListener("click", function () {
  // console.log(userInput.value);
  currentWeatherAPI(userInput.value);
});
function onecallAPI(latitude, longitude) {
  // console.log("inside Onecall", latitude, longitude);
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

  $();
  ('.empty();  "".fiveDay;');
  fetch(weatherApi)
    .then(function (response) {
      // console.log("response", response);
      return response.json();
    })
    .then(function (data) {
      // console.log("data", data);
      var cityNameEl = document.querySelector(".cityName");
      cityNameEl.textContent = data.name;

      var tempEl = document.querySelector(".temperature");
      tempEl.textContent = "Temperature:  " + data.main.temp + " ℉";

      var humidityEl = document.querySelector(".humidity");
      humidityEl.textContent = "Humidity:  " + data.main.humidity + "%";
      console.log("Coord inside then", data.coord.lon, data.coord.lat);
      onecallAPI(data.coord.lat, data.coord.lon);
      // weatherForecast(data.coord.lat, data.coord.lon);

      var windEl = document.querySelector(".windSpeed");
      windEl.textContent = "Wind : " + data.wind.speed + " mph";
      var weatherIcon = data.weather[0].icon;
      // console.log("Weather Icon here", weatherIcon);
      var icon = document.createElement("img");
      // console.log(icon);
      icon.setAttribute(
        "src",
        `https://openweathermap.org/img/wn/${weatherIcon}.png`
      );
      cityNameEl.appendChild(icon);
      fiveCast(location);
    });
}
// Fix double click
function fiveCast(location) {
  var apiKey = "5800a31e16468ce7978a067a48244cb0";
  //5 DAY
  $.ajax({
    type: "GET",
    url: `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=imperial&APPID=${apiKey}`,
    id: "city",
  }).then(function (data) {
    console.log(data);

    for (i = 7; i < 42; i += 7) {
      var forecastCard = $('<div class = "information">');
      var forecastTitle = $('<p class = "cityName">');
      var forecastTemp = $('<p class = "temperature">');
      var forecastWind = $('<p class = "windSpeed">');
      var forecastHumidity = $('<p class = "humidity">');

      timeStamp = data.list[i].dt *= 1000;
      var date = new Date(timeStamp);
      console.log(date);

      var currentTime = moment(date).format("MM/DD/YYYY");

      iconData = `<img src="https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}.png"/>`;
      forecastTitle.html(`${currentTime} ${iconData}`);
      forecastTemp.text(`Temperature: ${data.list[i].main.temp}`);
      forecastWind.text(`Wind: ${data.list[i].wind.speed}`);
      forecastHumidity.text(`Humidity: ${data.list[i].main.humidity}`);

      $(`.fiveDay`).append(forecastCard);
      forecastCard.append(forecastTitle);
      forecastCard.append(forecastTemp);
      forecastCard.append(forecastWind);
      forecastCard.append(forecastHumidity);
    }
  });
}
// append(forecastTitle);
// forecastCard.append(forecastTemp);
// forecastCard.append(forecastWind);
// forecastCard.append(forecastHumidity);
