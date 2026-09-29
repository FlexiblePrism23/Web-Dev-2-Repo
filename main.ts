/*
Authors: Sebastian Brown, Noah Stelmack, Munachi Amadlike
Date: September 28, 2026
Our website converts between units of weight, distance, and temperature.
The user can input a single number like '2' or a list of numbers like '2, 7, 10' into our convertor.
The program processes the input using metric or imperial conversions.
Each number is converted using conversion functions.
The converted value or list of values is displayed on our webpage as a list.
*/


// Conversion math functions
const milesToKilometres = (miles: number): number => miles * 1.609344;
const kilometresToMiles = (kilometres: number): number => kilometres / 1.609344;
const celsiusToFahrenheit = (celsius: number): number => {return (celsius * 9 / 5) + 32;};
const fahrenheitToCelsius = (fahrenheit: number): number => {return (fahrenheit - 32) * 5 / 9;};
const kilogramsToPounds = (kilograms: number): number => kilograms * 2.20462;
const poundsToKilograms = (pounds: number): number => pounds / 2.20462;

// Convertor logic
const getConverter = (from: string, to: string) => {

    let conversion: (value: number) => number;

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
    else {
        conversion = fahrenheitToCelsius;
    }

    // Returns an arrow function that works with one number or array
    return (value: number | number[]): number | number[] => {

        if (Array.isArray(value)) {

            const convertedValues: number[] = [];

            for (let number of value) {
                convertedValues.push(conversion(number));
            }

            return convertedValues;
        }
        
        return conversion(value);
    };
};


// Reads input so we can work with either number or array of numbers
const readInput = (input: string): number | number[] => {
    const textValues = input.split(",");
    const values: number[] = [];
    for (let value of textValues) {
        values.push(Number(value.trim()));
    }

    if (values.length === 1) {
        return values[0];
    }
    return values;
};


// Displays either a result or a list of results
const displayResult = (result: number | number[]): string => {

    if (Array.isArray(result)) {

        const displayValues: string[] = [];

        for (let value of result) {
            displayValues.push(value.toFixed(2));
        }

        return displayValues.join(", ");
    }

    return result.toFixed(2);
};


const celsiusInput = document.getElementById("celsius-input") as HTMLInputElement;
const celsiusButton = document.getElementById("celsius-button") as HTMLButtonElement;
const celsiusResult = document.getElementById("celsius-result") as HTMLParagraphElement;
const fahrenheitInput = document.getElementById("fahrenheit-input") as HTMLInputElement;
const fahrenheitButton = document.getElementById("fahrenheit-button") as HTMLButtonElement;
const fahrenheitResult = document.getElementById("fahrenheit-result") as HTMLParagraphElement;

// Converts to fahrenheit
const handleFahrenheitConvert = (): void => {
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


// Converts to celsius
const handleCelsiusConvert = (): void => {

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