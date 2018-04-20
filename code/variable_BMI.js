var height = 1.74;   // Input your height (m)
var weight = 63.5;   // Input your weight (kg)
   
var BMIFloat = weight / (height * height);  // Calculate your BMI(kg/m2) 
var BMI = BMIFloat.toFixed(1);       // Calculate your BMI round(1)   

console.log("我的BMI是" + BMI + "。");