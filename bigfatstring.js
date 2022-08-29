"use strict";

//When you click the button, it processes whatever is in the inputbox, and writes the result in the output box

//If input is a first name: Make the first character in a name uppercase, and the rest lowercase

//If input is a full name: Find the first name

//If input is a full name: Find the length of the first name

//If input is a full name: Find the middle name start and end position, and the middle name itself in a full name string

//If input is a filename: Check if a filename is .png or .jpg

//If input is a password: Hide a password with the correct number of *s

//With any input: Make the third character uppercase

//With any input: Make a character uppercase, if it follows a space or a hyphen note:

document.querySelector("#outputBtn").addEventListener("click", run);
const selector = document.querySelector("#selector").value;
let input = "";
let output = "";

/// eventlistener for input field
/* input.addEventListener("input", printOutput); */

function run() {
  input = document.querySelector("#input").textContent;
  choice();
  console.log("run Func Called");
}

function choice() {
  if (selector === "option1") {
    input.toLowerCase;
    output = input.substring(0, 1).toUpperCase() + input.substring(1, 5).toLowerCase;
    console.log(output);
  } else if (selector === "option2") {
    output = input.substring(0, input.indexOf(" "));
    console.log(output);
  } else if (selector === "option3") {
    output = length(input.substring(0, input.indexOf(" ")));
    console.log("third option", length);
  } else if (selector === "option4") {
    output = input.substring(input.firstindexOf(" "), input.lastIndexOf(" "));
    console.log("fourth option");
  } else if (selector === "option5") {
    output = input.endsWith(".png" || ".jpg");
    console.log("fifth option");
  } else if (selector === "option6") {
    output = input.padEnd(input.length, "*");
    console.log("option 6");
  } else if (slector === "option7") {
    output = input[2].toUpperCase;
    console.log("seventh option");
  } else if (selector === "option8") {
    //locate the first space or hyphen + 1 and then you get the index of the character for the toUpperCase
  }
  console.log("choice func called");
  printOutput();
}

function printOutput() {
  console.log("print out func called");
  /*  output.textContent = e.target.value; */
  document.querySelector("#output").textContent = output;
  console.log(`input value is ${output}`);
}
