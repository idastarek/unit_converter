// assigning variables to the elements
const input = document.getElementById("number-to-convert");
const convertBtn = document.getElementById("convert-btn");
let numberToConvert;
const lengthContainer = document.getElementById("length");
const volumeContainer = document.getElementById("volume");
const massContainer = document.getElementById("mass");

// adding event listener to the button
convertBtn.addEventListener("click", function() {
    inputToNumber();
    const lengthResult = performConversion("length");
    const volumeResult = performConversion("volume");
    const massResult = performConversion("mass");
    
    displayResults(lengthContainer, lengthResult, "Length", "meter", "feet");
    displayResults(volumeContainer, volumeResult, "Volume", "liters", "gallons");
    displayResults(massContainer, massResult, "Mass", "kilograms", "pounds");
})

// function to convert the input value to a number
function inputToNumber() {
    numberToConvert = Number(input.value)
    return numberToConvert;
}

// function to perform the conversion
function performConversion(type) {
    let convertedNum1, convertedNum2, unit1, unit2;
    if (type === "length") {
        convertedNum1 = numberToConvert * 3.281;
        convertedNum2 = numberToConvert / 3.281;
        unit1 = "meters";
        unit2 = "feet";

    } else if (type === "volume") {
       convertedNum1 = numberToConvert * 0.264;
       convertedNum2 = numberToConvert / 0.264;
       unit1 = "liters";
       unit2 = "gallons";

    } else {
       convertedNum1 = numberToConvert * 2.204;
       convertedNum2 = numberToConvert / 2.204;
       unit1 = "kilograms";
       unit2 = "pounds";
    }
    return `${numberToConvert} ${unit1} = ${convertedNum1.toFixed(2)} ${unit2} | ${numberToConvert} ${unit2} = ${convertedNum2.toFixed(2)} ${unit1}`;
}

// function to display the results
function displayResults(container, result, type, unit1, unit2) {
    container.innerHTML = `
            <h2>${type} (${unit1}/${unit2})</h2>
            <p>${result}</p>
            `
}

