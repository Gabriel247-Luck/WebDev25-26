// Challenge 2:  Create the function for the Average program.  Refer to the resource link in the HTML for assistance.
function calculateAverage() {
  let g1 = parseFloat(document.getElementById("grade1").value);
  let g2 = parseFloat(document.getElementById("grade2").value);
  let g3 = parseFloat(document.getElementById("grade3").value);
  let output = document.getElementById("output1");
  let average = (g1 + g2 + g3) / 3;
  output.innerHTML = `The average of all 3 grades is ${average}`;
}


// Challenge 4:  Create the function for the Slope program.  Refer to the resource link in the HTML for assistance.
function calculateSlope() {
  let x1 = parseFloat(document.getElementById("x1").value);
  let y1 = parseFloat(document.getElementById("y1").value);
  let x2 = parseFloat(document.getElementById("x2").value);
  let y2 = parseFloat(document.getElementById("y2").value);
  let output = document.getElementById("output2");
  let slope = (y2 - y1) / (x2 - x1);
  output.innerHTML = `Slope between points (${x1}, ${y1}) and (${x2}, ${y2}) is ${slope}`;
}



// Challenge 6:  Create the function for the BMI program.  Refer to the resource link in the HTML for assistance.
function calculateBMI() {
  let weight = parseFloat(document.getElementById("weight").value);
  let height = parseFloat(document.getElementById("height").value);
  let output = document.getElementById("output3");
  let bmi = 703 * weight / (height * height);
  output.innerHTML = `The BMI is ${bmi}`;
}