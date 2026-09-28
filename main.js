"use strict";
const kilogramsToPounds = (kilograms) => kilograms * 2.20462;
const milesToKilometres = (miles) => miles * 1.609344;
const celsiusToFahrenheit = (celsius) => {
    return (celsius * 9 / 5) + 32;
};
const fahrenheitToCelsius = (fahrenheit) => {
    return (fahrenheit - 32) * 5 / 9;
};
const kgInput = document.getElementById("kg-input");
const kgButton = document.getElementById("kg-button");
const kgResult = document.getElementById("kg-result");
const handleKgConvert = () => {
    const kilograms = Number(kgInput.value);
    const pounds = kilogramsToPounds(kilograms);
    kgResult.textContent = pounds.toFixed(2);
};
kgButton.addEventListener("click", handleKgConvert);
const milesInput = document.getElementById("miles-input");
const milesButton = document.getElementById("miles-button");
const milesResult = document.getElementById("miles-result");
const handleMilesConvert = () => {
    const miles = Number(milesInput.value);
    const kilometres = milesToKilometres(miles);
    milesResult.textContent = kilometres.toFixed(2);
};
milesButton.addEventListener("click", handleMilesConvert);
const celsiusInput = document.getElementById("celsius-input");
const celsiusButton = document.getElementById("celsius-button");
const celsiusResult = document.getElementById("celsius-result");
const handleCelsiusConvert = () => {
    const celsius = Number(celsiusInput.value);
    const fahrenheit = celsiusToFahrenheit(celsius);
    celsiusResult.textContent = fahrenheit.toFixed(2);
};
celsiusButton.addEventListener("click", handleCelsiusConvert);
const fahrenheitInput = document.getElementById("fahrenheit-input");
const fahrenheitButton = document.getElementById("fahrenheit-button");
const fahrenheitResult = document.getElementById("fahrenheit-result");
const handleFahrenheitConvert = () => {
    const fahrenheit = Number(fahrenheitInput.value);
    const celsius = fahrenheitToCelsius(fahrenheit);
    fahrenheitResult.textContent = celsius.toFixed(2);
};
fahrenheitButton.addEventListener("click", handleFahrenheitConvert);
