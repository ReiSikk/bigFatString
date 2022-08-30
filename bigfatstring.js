"use strict";

//With any input: Make a character uppercase, if it follows a space or a hyphen note:

document.querySelector("#outputBtn").addEventListener("click", run);
let selector = "";
let input = "";
let output = "";
let currentChar;
let previousChar;

/// eventlistener for input field
/* input.addEventListener("input", printOutput); */

function run() {
  input = document.querySelector("#input").value;
  selector = document.querySelector("#selector").value;
  choice();
}

function choice() {
  if (selector === "option1") {
    output = input.substring(0, 1).toUpperCase() + input.substring(1, 5).toLowerCase();
    /*    input.toLowerCase();
    output = input.replace(input[0], input[0].toUpperCase()); */

    printOutput();
  } else if (selector === "option2") {
    output = input.substring(0, input.indexOf(" "));
    console.log(output);
    printOutput();
  } else if (selector === "option3") {
    output = input.substring(0, input.indexOf(" ")).length;
    console.log("third option", length);
    printOutput();
  } else if (selector === "option4") {
    output = input.substring(input.indexOf(" "), input.lastIndexOf(" "));
    //find the index of start and end
    console.log("fourth option");
    printOutput();
  } else if (selector === "option5") {
    output = input.endsWith(".png" || ".jpg");
    console.log("fifth option");
    printOutput();
  } else if (selector === "option6") {
    output = output.padEnd(input.length, "*");
    console.log("option 6");
    printOutput();
  } else if (selector === "option7") {
    output = input.replace(input[2], input[2].toUpperCase());
    console.log("seventh option");
    printOutput();
  } else if (selector === "option8") {
    output = input.substring(0, 1).toUpperCase();
    for (let i = 1; i < input.length; i++) {
      previousChar = input[i - 1];
      if (previousChar === " " || previousChar === "-") {
        currentChar = input[i].toUpperCase();
      } else {
        currentChar = input[i];
      }
      output += currentChar;
    }
  }
  console.log("choice func called");
  printOutput();
}

function printOutput() {
  console.log("print out func called");
  document.querySelector("#output").value = output;
}
