var height = 1.74;   // Input your height (m)
var weight = 63.5;   // Input your weight (kg)
   
var BMIFloat = weight / (height * height);  // Calculate your BMI(kg/m2) 
var BMI = BMIFloat.toFixed(1);       // Calculate your BMI round(1)   

console.log("我的BMI是" + BMI + "。");

// pythontutor's permanent link:
// http://pythontutor.com/visualize.html#code=var%20height%20%3D%201.74%3B%20%20%20//%20Input%20your%20height%20%28m%29%0Avar%20weight%20%3D%2063.5%3B%20%20%20//%20Input%20your%20weight%20%28kg%29%0A%20%20%20%0Avar%20BMIFloat%20%3D%20weight%20/%20%28height%20*%20height%29%3B%20%20//%20Calculate%20your%20BMI%28kg/m2%29%20%0Avar%20BMI%20%3D%20BMIFloat.toFixed%281%29%3B%20%20%20%20%20%20%20//%20Calculate%20your%20BMI%20round%281%29%20%20%20%0A%0Aconsole.log%28%22%E6%88%91%E7%9A%84BMI%E6%98%AF%22%20%2B%20BMI%20%2B%20%22%E3%80%82%22%29%3B&cumulative=false&heapPrimitives=nevernest&mode=edit&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false