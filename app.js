
// We need to select all 3 inputs and and the submit button
const amount = document.getElementById("bill").value;
const quality = document.getElementById('quility').value;
let people = document.getElementById('people').value;
const button = document.querySelector('.sub');
const text = document.querySelector('.textt');

// Make sure input isnt empty
/*  if (amount === "" || quality == 0) {
    alert("Please enter values");
  }
  if (people === "" || people <= 1) {
    people = 1;
  }*/
// Make function to calculate the bill + tip - people


function calcTip (){
 let total = (amount * quality) / people;
 total = Math.round(total * 100) / 100;
 total = total.toFixed(2);
 text.textContent = total;
}


// Event listeners for button
button.addEventListener('click', calcTip);