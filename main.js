"use strict";
// Conversion math functions
const milesToKilometres = (miles) => miles * 1.609344;
const celsiusToFahrenheit = (celsius) => {
    return (celsius * 9 / 5) + 32;
};
const fahrenheitToCelsius = (fahrenheit) => {
    return (fahrenheit - 32) * 5 / 9;
};
const kilogramsToPounds = (kilograms) => kilograms * 2.20462;
const poundsToKilograms = (pounds) => pounds / 2.20462;
const celsiusInput = document.getElementById("celsius-input");
const celsiusButton = document.getElementById("celsius-button");
const celsiusResult = document.getElementById("celsius-result");
const fahrenheitInput = document.getElementById("fahrenheit-input");
const fahrenheitButton = document.getElementById("fahrenheit-button");
const fahrenheitResult = document.getElementById("fahrenheit-result");
const handleFahrenheitConvert = () => {
    const fahrenheit = Number(fahrenheitInput.value);
    const celsius = fahrenheitToCelsius(fahrenheit);
    fahrenheitResult.textContent = celsius.toFixed(2);
};
const handleCelsiusConvert = () => {
    const celsius = Number(celsiusInput.value);
    const fahrenheit = celsiusToFahrenheit(celsius);
    celsiusResult.textContent = fahrenheit.toFixed(2);
};
celsiusButton.addEventListener("click", handleCelsiusConvert);
fahrenheitButton.addEventListener("click", handleFahrenheitConvert);
// Navbar code
let current = "temperature";
// Getting HTML elements
// Getting navbar buttons
const weightNavButton = document.getElementById("navBarWeightButton");
const distanceNavButton = document.getElementById("navBarDistanceButton");
const temperatureNavButton = document.getElementById("navBarTemperatureButton");
// Card nputs
const firstInput = document.getElementById("celsius-input");
const secondInput = document.getElementById("fahrenheit-input");
// Getting convert buttons
const firstConvertButton = document.getElementById("celsius-button");
const secondConvertButton = document.getElementById("fahrenheit-button");
// Getting results
const firstResult = document.getElementById("celsius-result");
const secondResult = document.getElementById("fahrenheit-result");
// Getting card text
const title = document.getElementById("card-title");
const description = document.getElementById("card-description");
const firstHeading = document.getElementById("first-heading");
const secondHeading = document.getElementById("second-heading");
const firstLabel = document.getElementById("first-label");
const secondLabel = document.getElementById("second-label");
const firstResultLabel = document.getElementById("first-result-label");
const secondResultLabel = document.getElementById("second-result-label");
let currentConverter = "temperature";
// Even listeners
// Navbar Distance listener
distanceNavButton.addEventListener("click", () => {
    currentConverter = "distance";
    title.textContent = "Distance";
    description.textContent = "Convert between kilometres and miles";
    firstHeading.textContent = "Kilometres → Miles";
    secondHeading.textContent = "Miles → Kilometres";
    firstLabel.textContent = "Kilometres";
    secondLabel.textContent = "Miles";
    firstResultLabel.textContent = "Miles";
    secondResultLabel.textContent = "Kilometres";
    firstInput.value = "1";
    secondInput.value = "1";
    firstResult.textContent = "0.62";
    secondResult.textContent = "1.61";
    firstConvertButton.className = "w-full mt-4 rounded-lg bg-green-500 px-4 py-2 font-semibold text-white hover:bg-green-600";
    secondConvertButton.className = "w-full mt-4 rounded-lg bg-green-500 px-4 py-2 font-semibold text-white hover:bg-green-600";
    firstResult.className = "text-2xl font-bold text-green-500 mt-1";
    secondResult.className = "text-2xl font-bold text-green-500 mt-1";
});
// Navbar Weight listener
weightNavButton.addEventListener("click", () => {
    currentConverter = "weight";
    title.textContent = "Weight";
    description.textContent = "Convert between pounds and kilograms";
    firstHeading.textContent = "Kilograms → Pounds";
    secondHeading.textContent = "Pounds → Kilograms";
    firstLabel.textContent = "Kilograms";
    secondLabel.textContent = "Pounds";
    firstResultLabel.textContent = "Pounds";
    secondResultLabel.textContent = "Kilograms";
    firstInput.value = "1";
    secondInput.value = "1";
    firstResult.textContent = "2.20";
    secondResult.textContent = "0.45";
    firstConvertButton.className = "w-full mt-4 rounded-lg bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600";
    secondConvertButton.className = "w-full mt-4 rounded-lg bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600";
    firstResult.className = "text-2xl font-bold text-blue-500 mt-1";
    secondResult.className = "text-2xl font-bold text-blue-500 mt-1";
});
// Navbar Temperature listener
temperatureNavButton.addEventListener("click", () => {
    currentConverter = "temperature";
    title.textContent = "Temperature";
    description.textContent = "Convert between Celsius and Fahrenheit";
    firstHeading.textContent = "Celsius → Fahrenheit";
    secondHeading.textContent = "Fahrenheit → Celsius";
    firstLabel.textContent = "Celsius";
    secondLabel.textContent = "Fahrenheit";
    firstResultLabel.textContent = "Fahrenheit";
    secondResultLabel.textContent = "Celsius";
    firstInput.value = "0";
    secondInput.value = "32";
    firstResult.textContent = "32.00";
    secondResult.textContent = "0.00";
    firstConvertButton.className = "w-full mt-4 rounded-lg bg-violet-600 px-4 py-2 font-semibold text-white hover:bg-violet-700";
    secondConvertButton.className = "w-full mt-4 rounded-lg bg-violet-600 px-4 py-2 font-semibold text-white hover:bg-violet-700";
    firstResult.className = "text-2xl font-bold text-violet-600 mt-1";
    secondResult.className = "text-2xl font-bold text-violet-600 mt-1";
});
