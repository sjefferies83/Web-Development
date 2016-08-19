/**
 * Created by jefferies on 18/08/2016.
 */
"use strict";

// adds event listen to listen for searchButton button to be clicked
searchButton.addEventListener("click", searchWeather);

// Runs when searchButton is clicked
function searchWeather(){
    //Displays hidden "Loading" message until content loaded
    loadingText.style.display = "block";
    //Hides weatherBox element
    weatherBox.style.display = "none";
    //Assigns cityName the value of the searched city
    var cityName = searchCity.value;
    //Checks if cityName is set
    if(cityName.trim().length == 0){
        return alert("Please enter a city name");
    }
    //Starts the httpRequest
    var http = new XMLHttpRequest();
    var apiKey = "2936bc4e3eb47f0252323d7365b5f69d";
    var url = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=metric&appid=" + apiKey;
    var method = "GET";
    //Opens the request
    http.open(method, url);
    http.onreadystatechange = function(){
      if(http.readyState === XMLHttpRequest.DONE && http.status === 200){
          var data = JSON.parse(http.responseText);
          var weatherData = new Weather(cityName, data.weather[0].description.toUpperCase());
          weatherData.temperature = data.main.temp;
          updateWeather(weatherData);
      }else if(http.readyState === XMLHttpRequest.DONE){
          alert("Something went wrong!");
      }
    };
    //Sends the request
    http.send();
}

//Updates variables with receieved data
function updateWeather(weatherData){
    weatherCity.textContent = weatherData.cityName;
    weatherDescription.textContent = weatherData.description;
    weatherTemperature.textContent = weatherData.temperature;
    //Hides the loading message and displays the weatherBox div
    loadingText.style.display = "none";
    weatherBox.style.display = "block";
}