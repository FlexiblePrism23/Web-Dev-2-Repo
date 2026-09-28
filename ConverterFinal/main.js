"use strict";
const milesToKilometres = (miles) => miles * 1.609344;
const celsiusToFahrenheit = (celsius) => {
    return (celsius * 9 / 5) + 32;
};
const fahrenheitToCelsius = (fahrenheit) => {
    return (fahrenheit - 32) * 5 / 9;
};
const kilogramsToPounds = (kilograms) => kilograms * 2.20462;
const poundsToKilograms = (pounds) => pounds / 2.20462;
const weightInput = document.getElementById("weight-input");
const weightText = document.getElementById("weight-text");
const weightResultText = document.getElementById("weight-result-text");
const weightButton = document.getElementById("weight-button");
const weightResult = document.getElementById("weight-result");
const weightInputLabel = document.getElementById("weight-input-label");
const weightConversion = document.getElementById("weight-conversion-button");
let kgToLb = true;
const switchWeightUnit = () => {
    kgToLb = !kgToLb;
    weightText.textContent = kgToLb ? 'Kilograms → Pounds' : 'Pounds → Kilograms';
    weightInputLabel.textContent = kgToLb ? 'Kilograms' : 'Pounds';
    weightResultText.textContent = kgToLb ? 'Pounds' : 'Kilograms';
    weightResult.textContent = '0';
};
const litresToGallons = (litres) => litres * 0.264172;
const handleWeightConvert = () => {
    const inputWeight = Number(weightInput.value);
    const result = kgToLb ? kilogramsToPounds(inputWeight) : poundsToKilograms(inputWeight);
    weightResult.textContent = result.toFixed(2);
};
weightButton.addEventListener("click", handleWeightConvert);
weightConversion.addEventListener("click", switchWeightUnit);
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
