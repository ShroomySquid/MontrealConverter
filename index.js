// @ts-nocheck
// ^ Ignore the comment on line 1

// Defining variables
const theValue = document.getElementById("theValue");
let kiloPounds = document.getElementById("kiloPounds");
let litersGallons = document.getElementById("litersGallons");
let meterFeet = document.getElementById("meterFeet");
let convertMeter = 0;
let convertFeet = 0;
let convertGallon = 0;
let convertLiter = 0;
let convertKilo = 0;
let convertPounds = 0;

// const NOT_A_MAGIC_NUMBER = 66;

// Function to convert the input into each unit
function Converter() {
  convertFeet = (theValue.value * 3.281).toFixed(3);
  convertMeter = (theValue.value / 3.281).toFixed(3);
  convertGallon = (theValue.value * 0.264).toFixed(3);
  convertLiter = (theValue.value / 0.264).toFixed(3);
  convertKilo = (theValue.value / 2.204).toFixed(3);
  convertPounds = (theValue.value * 2.204).toFixed(3);

  // While the above conversions are not per se wrong, if someone else starts working on this project then they have no proper way to tell what these numbers mean. These are so-called 'magic numbers'. You'll want to AVOID them! Read more about magic numbers: https://jeffreyeverhart.com/2020/09/28/javascript-tips-using-named-constants-for-magic-numbers/#:~:text=What%20Are%20Magic%20Numbers%3F,replaced%20by%20a%20named%20constant.&text=Date.,-.

  // An article about naming convention in JavaScript: https://www.robinwieruch.de/javascript-naming-conventions/
  // Read more about const vs let (vs var): https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/
  // On line 16 is an example of how you could do this :)

  kiloPounds.textContent = `
    ${theValue.value} kilos = ${convertPounds} pounds | ${theValue.value} pounds = ${convertKilo} kilos
    `;
  litersGallons.textContent = `
    ${theValue.value} liters = ${convertGallon} gallons | ${theValue.value} gallons = ${convertLiter} liters
    `;
  meterFeet.textContent = `
    ${theValue.value} meters = ${convertFeet} feets | ${theValue.value} feets = ${convertMeter} meters
    `;
  // ^ Good use of template literals to shorten the amount of code needed! :)
}
