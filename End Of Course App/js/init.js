/**
 * Created by jefferies on 18/08/2016.
 */
"use strict";

//assigns the "Show Weather" button to a variable
var searchButton = document.querySelector("button");

//assigns the "City" input field to a variable
var searchCity = document.querySelector("#city");

//assigns the "Loading" div to a variable
var loadingText = document.querySelector("#load");

//assigns the "Weather" div to a variable
var weatherBox = document.querySelector("#weather");

//assigns the "Weather City" heading to a variable
var weatherCity = weatherBox.firstElementChild;

//assigns the "Weather Description" div to a variable
var weatherDescription = document.querySelector("#weatherDescription");

//assigns the "Weather Temperature" div to a variable
var weatherTemperature = weatherBox.lastElementChild;
