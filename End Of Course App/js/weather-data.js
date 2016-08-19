/**
 * Created by jefferies on 18/08/2016.
 */
"use strict";
//Contructor function to assign JSON data to global variable
function Weather(cityName, description){
    this.cityName = cityName;
    this.description = description;
    this._temperature = "";
}
//Creates a "temperature" value in the prototype of Weather and assigns it to _temperature
Object.defineProperty(Weather.prototype, "temperature", {
    get: function(){
        return this._temperature;
    },
    // Converts the value stored in _temperature with the attached formula
    set: function(value){
        this._temperature = (value * 1.8 + 32).toFixed(2) + "F.";
    }
});
