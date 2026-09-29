"use strict";
/*
Authors: Sebastian, Noah, Munachi
Date: September 28, 2026
Our website converts weight, distance, and temperature.
The program processes the input using metric or imperial conversions.
The converted value or list of values is displayed on our webpage.
*/
// Conversion math functions
const milesToKilometres = (miles) => miles * 1.609344;
const kilometresToMiles = (kilometres) => kilometres / 1.609344;
const celsiusToFahrenheit = (celsius) => { return (celsius * 9 / 5) + 32; };
const fahrenheitToCelsius = (fahrenheit) => { return (fahrenheit - 32) * 5 / 9; };
const kilogramsToPounds = (kilograms) => kilograms * 2.20462;
const poundsToKilograms = (pounds) => pounds / 2.20462;
// Convertor logic
const getConverter = (from, to) => {
    let conversion;
    if (from === "kg" && to === "lb") {
        conversion = kilogramsToPounds;
    }
    else if (from === "lb" && to === "kg") {
        conversion = poundsToKilograms;
    }
    else if (from === "km" && to === "mi") {
        conversion = kilometresToMiles;
    }
    else if (from === "mi" && to === "km") {
        conversion = milesToKilometres;
    }
    else if (from === "c" && to === "f") {
        conversion = celsiusToFahrenheit;
    }
    else if (from === "f" && to === "c") {
        conversion = fahrenheitToCelsius;
    }
    else {
        throw new Error("Invalid conversion");
    }
    // Returns an arrow function that works with one number or an array
    return (value) => {
        if (Array.isArray(value)) {
            return value.map(conversion);
        }
        return conversion(value);
    };
};
// ADDED - turns input into either one number or an array of numbers
const readInput = (input) => {
    const values = input.split(",").map(value => Number(value.trim()));
    if (values.length === 1) {
        return values[0];
    }
    return values;
};
// ADDED - displays either one result or a list of results
const displayResult = (result) => {
    if (Array.isArray(result)) {
        return result.map(value => value.toFixed(2)).join(", ");
    }
    return result.toFixed(2);
};
const celsiusInput = document.getElementById("celsius-input");
const celsiusButton = document.getElementById("celsius-button");
const celsiusResult = document.getElementById("celsius-result");
const fahrenheitInput = document.getElementById("fahrenheit-input");
const fahrenheitButton = document.getElementById("fahrenheit-button");
const fahrenheitResult = document.getElementById("fahrenheit-result");
// CHANGED - now works for temperature, distance, and weight
const handleFahrenheitConvert = () => {
    const input = readInput(fahrenheitInput.value);
    let converter;
    if (currentConverter === "weight") {
        converter = getConverter("lb", "kg");
    }
    else if (currentConverter === "distance") {
        converter = getConverter("mi", "km");
    }
    else {
        converter = getConverter("f", "c");
    }
    const result = converter(input);
    fahrenheitResult.textContent = displayResult(result);
};
// CHANGED - now works for temperature, distance, and weight
const handleCelsiusConvert = () => {
    const input = readInput(celsiusInput.value);
    let converter;
    if (currentConverter === "weight") {
        converter = getConverter("kg", "lb");
    }
    else if (currentConverter === "distance") {
        converter = getConverter("km", "mi");
    }
    else {
        converter = getConverter("c", "f");
    }
    const result = converter(input);
    celsiusResult.textContent = displayResult(result);
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
// Evetn listeners
// Navbar HTML Change -> *Distance listener*
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
// Navbar HTML Change -> *Weight listener*
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
// Navbar HTML Chagne -> *Temperature listener*
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
