/* Challenge 2: Create a function to ,
       1) Calculate and display the BMI.  Look up the formula which you should have done in Challenge 1
       2) Display BMI status as per the chart in index.html
       3) Display the corresponding image based on the BMI status.
*/
/* 
Guideline:
1) Create the function
2) Get the information from the UI
3) Perform the necessary calculation.
4) Make the appropriate decisions.  Store the appropriate BMI status.  Store the appropriate filename for the image.
5) Display the output

Use past examples, classwork and practicals to assist you in completing this practical.
*/

function BMI() {
  let weight = parseFloat(document.getElementById("Wt").value);
  let height = parseFloat(document.getElementById("Ht").value);
  let output = document.getElementById("output");
  let filename="";
  let message="";
  let BMI = 703 * weight / (height**2);

  if (BMI < 18.5){
       message= "Underweight";
       filename= "underweight.png";

  }else if (BMI >= 18.5 &&  BMI < 25){
       message= "Healthy weight";
       filename= "healthyweight.png";

  }else if (BMI >= 25.0 && BMI < 30){
     message= "Overweight";
     filename= "overweight.png";

  }else if (BMI >= 30){
     message= "Obese";
     filename= "obeseweight.png";
  }

  output.innerHTML= `<img src="${filename}"><br>You are ${message}`;

}
