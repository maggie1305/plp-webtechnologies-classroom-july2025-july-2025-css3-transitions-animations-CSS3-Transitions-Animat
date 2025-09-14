// Part 2: Functions with parameters, scope, return values

// A function that calculates area of a square
function calcSquareArea(side) {
  return side * side; // returns value
}

// Example of scope
let globalVar = "I'm global!";

function demoScope() {
  let localVar = "I'm local!";
  console.log(globalVar); // accessible
  console.log(localVar);  // accessible here
}
demoScope();
// console.log(localVar); // would throw error (scope demo)

// Part 3: Triggering CSS animation with JS
const animateBtn = document.getElementById("animateBtn");
const jsBox = document.getElementById("jsBox");

animateBtn.addEventListener("click", () => {
  // Toggle class to trigger animation
  jsBox.classList.toggle("animate");

  // Use function with parameter + return
  let side = 4;
  let area = calcSquareArea(side);
  console.log(`Area of square with side ${side} = ${area}`);
});
