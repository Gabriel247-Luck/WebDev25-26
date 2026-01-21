/* Challenge 2: Complete the area and perimeter functions below for the rectangle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 1.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
function recArea(){
      let len= parseFloat(document.getElementById("Len").value);
      let wid = parseFloat(document.getElementById("Wid").value);
      let output = document.getElementById("output");
      let Area = len * wid;
      output.innerHTML = Area ;
}  

function recPerimeter() {
      let len = parseFloat(document.getElementById("Len").value);
      let wid = parseFloat(document.getElementById("Wid").value);
      let output = document.getElementById("output");
      let perimeter = 2 * (len + wid);
      output.innerHTML = "Perimeter: " + perimeter;

}


/* Challenge 4: Complete the area and circumference functions below for the circle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 3.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
let pi = 3.1415926;

function cirArea(){
       let radius = parseFloat(document.getElementById("Rad").value);
       let output = document.getElementById("circleOutput");
       let circumference = 2 * pi * radius;
       output.innerHTML = "Circumference: " + circumference.toFixed(2);

}

function cirPerimeter(){
      let radius = parseFloat(document.getElementById("Rad").value);
      let output = document.getElementById("circleOutput");
      let circumference = 2 * pi * radius;
      output.innerHTML = "Circumference: " + circumference.toFixed(2);

}

/* Challenge Bonus: Complete the area and perimeter functions below for the triangle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
function triArea(){

}

function triPerimeter(){

}