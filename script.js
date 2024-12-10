// assigning variables to the elements
const input = document.getElementById("number-to-convert");
const convertBtn = document.getElementById("convert-btn");
let numberToConvert;
const lengthContainer = document.getElementById("length");
const volumeContainer = document.getElementById("volume");
const massContainer = document.getElementById("mass");


const metersFeet = {
    name: "Length",
    container: lengthContainer,
    conversion: 3.281,
    unit1: "meters",
    unit2: "feet"
}

const litersGallons = {
    name: "Volume",
    container: volumeContainer,
    conversion: 0.264,
    unit1: "liters",
    unit2: "gallons"
}

const kilogramsPounds = {
    name: "Mass",
    container: massContainer,
    conversion: 2.204,
    unit1: "kilograms",
    unit2:  "pounds"
}

// adding event listener to the button
convertBtn.addEventListener("click", function() {
    inputToNumber();

    const lengthResult = performConversion(metersFeet);
    const volumeResult = performConversion(litersGallons);
    const massResult = performConversion(kilogramsPounds);
    
    displayResults(metersFeet, lengthResult);
    displayResults(litersGallons, volumeResult);
    displayResults(kilogramsPounds, massResult);
})

// function to convert the input value to a number
function inputToNumber() {
    numberToConvert = Number(input.value)
    return numberToConvert;
}

// function to perform the conversion
function performConversion(type) {
    let result1 = `${numberToConvert} ${type.unit1} = ` + (numberToConvert*type.conversion).toFixed(2) + ` ${type.unit2}`;
    let result2 = `${numberToConvert} ${type.unit2} = ` + (numberToConvert/type.conversion).toFixed(2) + ` ${type.unit1}`;
    let result = `${result1} | ${result2}`;
    
    return result
}

// function to display the results
function displayResults(type, result) {
    type.container.innerHTML = `
                <h2>${type.name} (${type.unit1}/${type.unit2})</h2>
                <p>${result}</p> 
    `
}


