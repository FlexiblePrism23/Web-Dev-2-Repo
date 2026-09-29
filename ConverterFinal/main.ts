const milesToKilometres = (miles: number): number => miles * 1.609344;
const celsiusToFahrenheit = (celsius: number): number => {return (celsius * 9 / 5) + 32;
};
const fahrenheitToCelsius = (fahrenheit: number): number => {return (fahrenheit - 32) * 5 / 9;
};
const kilogramsToPounds = (kilograms: number): number => kilograms * 2.20462;
const poundsToKilograms = (pounds: number): number => pounds / 2.20462;

const weightInput = document.getElementById("weight-input") as HTMLInputElement;
const weightText = document.getElementById("weight-text") as HTMLInputElement;
const weightResultText = document.getElementById("weight-result-text") as HTMLParagraphElement;
const weightButton = document.getElementById("weight-button") as HTMLButtonElement;
const weightResult = document.getElementById("weight-result") as HTMLParagraphElement;
const weightInputLabel = document.getElementById("weight-input-label") as HTMLLabelElement;
const weightConversion = document.getElementById("weight-conversion-button") as HTMLButtonElement;

let kgToLb: boolean = true;

const switchWeightUnit = (): void => {
    kgToLb = !kgToLb;
    weightText.textContent = kgToLb ? 'Kilograms → Pounds' : 'Pounds → Kilograms';
    weightInputLabel.textContent = kgToLb ? 'Kilograms' : 'Pounds';
    weightResultText.textContent = kgToLb ? 'Pounds' : 'Kilograms';
    weightResult.textContent = '0';
}

const litresToGallons = (litres: number): number => litres * 0.264172;

const handleWeightConvert = (): void => {
const inputWeight: number = Number(weightInput.value);
const result: number = kgToLb ? kilogramsToPounds(inputWeight) : poundsToKilograms(inputWeight);
weightResult.textContent = result.toFixed(2);
};

weightButton.addEventListener("click", handleWeightConvert);
weightConversion.addEventListener("click", switchWeightUnit);

const milesInput = document.getElementById("miles-input") as HTMLInputElement;
const milesButton = document.getElementById("miles-button") as HTMLButtonElement;
const milesResult = document.getElementById("miles-result") as HTMLParagraphElement;
const handleMilesConvert = (): void => {
const miles: number = Number(milesInput.value);
const kilometres: number = milesToKilometres(miles);
milesResult.textContent = kilometres.toFixed(2);
};
milesButton.addEventListener("click", handleMilesConvert)





const celsiusInput = document.getElementById("celsius-input") as HTMLInputElement;
const celsiusButton = document.getElementById("celsius-button") as HTMLButtonElement;
const celsiusResult = document.getElementById("celsius-result") as HTMLParagraphElement;
const handleCelsiusConvert = (): void => {
const celsius: number = Number(celsiusInput.value);
const fahrenheit: number = celsiusToFahrenheit(celsius);
celsiusResult.textContent = fahrenheit.toFixed(2);
};
celsiusButton.addEventListener("click", handleCelsiusConvert);




const fahrenheitInput = document.getElementById("fahrenheit-input") as HTMLInputElement;
const fahrenheitButton = document.getElementById("fahrenheit-button") as HTMLButtonElement;
const fahrenheitResult = document.getElementById("fahrenheit-result") as HTMLParagraphElement;
const handleFahrenheitConvert = (): void => {
const fahrenheit: number = Number(fahrenheitInput.value);
const celsius: number = fahrenheitToCelsius(fahrenheit);
fahrenheitResult.textContent = celsius.toFixed(2);
};
fahrenheitButton.addEventListener("click", handleFahrenheitConvert);




