// Defining variables
const theValue = document.getElementById("theValue")
let kiloPounds = document.getElementById("kiloPounds")
let litersGallons = document.getElementById("litersGallons")
let meterFeet = document.getElementById("meterFeet")
let convertMeter = 0
let convertFeet = 0
let convertGallon = 0
let convertLiter = 0
let convertKilo = 0
let convertPounds = 0

// Function to convert the input into each unit
function Converter() {
    convertFeet = (theValue.value * 3.281).toFixed(3)
    convertMeter = (theValue.value / 3.281).toFixed(3)
    convertGallon = (theValue.value * 0.264).toFixed(3)
    convertLiter = (theValue.value / 0.264).toFixed(3)
    convertKilo = (theValue.value / 2.204).toFixed(3)
    convertPounds = (theValue.value * 2.204).toFixed(3)
    kiloPounds.textContent = `
    ${theValue.value} kilos = ${convertPounds} pounds | ${theValue.value} pounds = ${convertKilo} kilos
    `
    litersGallons.textContent = `
    ${theValue.value} liters = ${convertGallon} gallons | ${theValue.value} gallons = ${convertLiter} liters
    `
    meterFeet.textContent = `
    ${theValue.value} meters = ${convertFeet} feets | ${theValue.value} feets = ${convertMeter} meters
    `
}