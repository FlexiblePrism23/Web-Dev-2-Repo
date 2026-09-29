// Conversion math functions

const milesToKilometres = (miles: number): number => miles * 1.609344;

const celsiusToFahrenheit = (celsius: number): number => {
    return (celsius * 9 / 5) + 32;
};

const fahrenheitToCelsius = (fahrenheit: number): number => {
    return (fahrenheit - 32) * 5 / 9;
};

const kilogramsToPounds = (kilograms: number): number => kilograms * 2.20462;
const poundsToKilograms = (pounds: number): number => pounds / 2.20462;

const celsiusInput = document.getElementById("celsius-input") as HTMLInputElement;
const celsiusButton = document.getElementById("celsius-button") as HTMLButtonElement;
const celsiusResult = document.getElementById("celsius-result") as HTMLParagraphElement;
const fahrenheitInput = document.getElementById("fahrenheit-input") as HTMLInputElement;
const fahrenheitButton = document.getElementById("fahrenheit-button") as HTMLButtonElement;
const fahrenheitResult = document.getElementById("fahrenheit-result") as HTMLParagraphElement;

const handleFahrenheitConvert = (): void => {
    const fahrenheit: number = Number(fahrenheitInput.value);
    const celsius: number = fahrenheitToCelsius(fahrenheit);
    fahrenheitResult.textContent = celsius.toFixed(2);
};

const handleCelsiusConvert = (): void => {
    const celsius: number = Number(celsiusInput.value);
    const fahrenheit: number = celsiusToFahrenheit(celsius);
    celsiusResult.textContent = fahrenheit.toFixed(2);
};

celsiusButton.addEventListener("click", handleCelsiusConvert);
fahrenheitButton.addEventListener("click", handleFahrenheitConvert);








// Navbar code

let current = "temperature";

// Getting HTML elements

// Getting navbar buttons
const weightNavButton = document.getElementById("navBarWeightButton") as HTMLButtonElement;
const distanceNavButton = document.getElementById("navBarDistanceButton") as HTMLButtonElement;
const temperatureNavButton = document.getElementById("navBarTemperatureButton") as HTMLButtonElement;

// Card nputs
const firstInput = document.getElementById("celsius-input") as HTMLInputElement;
const secondInput = document.getElementById("fahrenheit-input") as HTMLInputElement;

// Getting convert buttons
const firstConvertButton = document.getElementById("celsius-button") as HTMLButtonElement;
const secondConvertButton = document.getElementById("fahrenheit-button") as HTMLButtonElement;

// Getting results
const firstResult = document.getElementById("celsius-result") as HTMLParagraphElement;
const secondResult = document.getElementById("fahrenheit-result") as HTMLParagraphElement;

// Getting card text
const title = document.getElementById("card-title") as HTMLHeadingElement;
const description = document.getElementById("card-description") as HTMLParagraphElement;
const firstHeading = document.getElementById("first-heading") as HTMLHeadingElement;
const secondHeading = document.getElementById("second-heading") as HTMLHeadingElement;
const firstLabel = document.getElementById("first-label") as HTMLLabelElement;
const secondLabel = document.getElementById("second-label") as HTMLLabelElement;
const firstResultLabel = document.getElementById("first-result-label") as HTMLParagraphElement;
const secondResultLabel = document.getElementById("second-result-label") as HTMLParagraphElement;

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