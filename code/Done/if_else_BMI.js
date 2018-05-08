var height = 1.74;   // Input your height (m)
var weight = 63.5;   // Input your weight (kg)
   
var BMIFloat = weight / (height * height);  // Calculate your BMI(kg/m2) 
var BMI = BMIFloat.toFixed(1);       // Calculate your BMI round(1)   

var minWeightFloat = height * height * 18.5;  // Calculate your minimum normal weight float number
var minWeight = minWeightFloat.toFixed(1);    // Calculate your minimum normal weight round(1) 

var maxWeightFloat = height * height * 24.0;  // Calculate your maximum normal weight float number
var maxWeight = maxWeightFloat.toFixed(1);    // Calculate your maximum normal weight round(1)

// Output your BMI description according to China's official BMI recommendation
if (BMI < 18.5) {
  console.log("我的BMI是"+ BMI + "。\n我的体重过轻。"); 
  console.log("我的正常体重应该在" + minWeight + " - " + maxWeight + "公斤的范围内。");
} else if (BMI >= 18.5 && BMI < 24.0) {
  console.log("我的BMI是"+ BMI + "。\n我的体重正常。"); 
  console.log("我的正常体重应该在" + minWeight + " - " + maxWeight + "公斤的范围内。"); 
} else if (BMI >= 24.0 && BMI < 28.0) {
  console.log("我的BMI是"+ BMI + "。\n我的体重超重。"); 
  console.log("我的正常体重应该在" + minWeight + " - " + maxWeight + "公斤的范围内。"); 
} else {
  console.log("我的BMI是"+ BMI + "。\n我的体重肥胖。"); 
  console.log("我的正常体重应该在" + minWeight + " - " + maxWeight + "公斤的范围内。"); 
}

// pythontutor's permanent link:
// http://pythontutor.com/visualize.html#code=var%20height%20%3D%201.74%3B%20%20%20//%20Input%20your%20height%20%28m%29%0Avar%20weight%20%3D%2063.5%3B%20%20%20//%20Input%20your%20weight%20%28kg%29%0A%20%20%20%0Avar%20BMIFloat%20%3D%20weight%20/%20%28height%20*%20height%29%3B%20%20//%20Calculate%20your%20BMI%28kg/m2%29%20%0Avar%20BMI%20%3D%20BMIFloat.toFixed%281%29%3B%20%20%20%20%20%20%20//%20Calculate%20your%20BMI%20round%281%29%20%20%20%0A%0Avar%20minWeightFloat%20%3D%20height%20*%20height%20*%2018.5%3B%20%20//%20Calculate%20your%20minimum%20normal%20weight%20float%20number%0Avar%20minWeight%20%3D%20minWeightFloat.toFixed%281%29%3B%20%20%20%20//%20Calculate%20your%20minimum%20normal%20weight%20round%281%29%20%0A%0Avar%20maxWeightFloat%20%3D%20height%20*%20height%20*%2024.0%3B%20%20//%20Calculate%20your%20maximum%20normal%20weight%20float%20number%0Avar%20maxWeight%20%3D%20maxWeightFloat.toFixed%281%29%3B%20%20%20%20//%20Calculate%20your%20maximum%20normal%20weight%20round%281%29%0A%0A//%20Output%20your%20BMI%20description%20according%20to%20China's%20official%20BMI%20recommendation%0Aif%20%28BMI%20%3C%2018.5%29%20%7B%0A%20%20console.log%28%22%E6%88%91%E7%9A%84BMI%E6%98%AF%22%2B%20BMI%20%2B%20%22%E3%80%82%5Cn%E6%88%91%E7%9A%84%E4%BD%93%E9%87%8D%E8%BF%87%E8%BD%BB%E3%80%82%22%29%3B%20%0A%20%20console.log%28%22%E6%88%91%E7%9A%84%E6%AD%A3%E5%B8%B8%E4%BD%93%E9%87%8D%E5%BA%94%E8%AF%A5%E5%9C%A8%22%20%2B%20minWeight%20%2B%20%22%20-%20%22%20%2B%20maxWeight%20%2B%20%22%E5%85%AC%E6%96%A4%E7%9A%84%E8%8C%83%E5%9B%B4%E5%86%85%E3%80%82%22%29%3B%0A%7D%20else%20if%20%28BMI%20%3E%3D%2018.5%20%26%26%20BMI%20%3C%2024.0%29%20%7B%0A%20%20console.log%28%22%E6%88%91%E7%9A%84BMI%E6%98%AF%22%2B%20BMI%20%2B%20%22%E3%80%82%5Cn%E6%88%91%E7%9A%84%E4%BD%93%E9%87%8D%E6%AD%A3%E5%B8%B8%E3%80%82%22%29%3B%20%0A%20%20console.log%28%22%E6%88%91%E7%9A%84%E6%AD%A3%E5%B8%B8%E4%BD%93%E9%87%8D%E5%BA%94%E8%AF%A5%E5%9C%A8%22%20%2B%20minWeight%20%2B%20%22%20-%20%22%20%2B%20maxWeight%20%2B%20%22%E5%85%AC%E6%96%A4%E7%9A%84%E8%8C%83%E5%9B%B4%E5%86%85%E3%80%82%22%29%3B%20%0A%7D%20else%20if%20%28BMI%20%3E%3D%2024.0%20%26%26%20BMI%20%3C%2028.0%29%20%7B%0A%20%20console.log%28%22%E6%88%91%E7%9A%84BMI%E6%98%AF%22%2B%20BMI%20%2B%20%22%E3%80%82%5Cn%E6%88%91%E7%9A%84%E4%BD%93%E9%87%8D%E8%B6%85%E9%87%8D%E3%80%82%22%29%3B%20%0A%20%20console.log%28%22%E6%88%91%E7%9A%84%E6%AD%A3%E5%B8%B8%E4%BD%93%E9%87%8D%E5%BA%94%E8%AF%A5%E5%9C%A8%22%20%2B%20minWeight%20%2B%20%22%20-%20%22%20%2B%20maxWeight%20%2B%20%22%E5%85%AC%E6%96%A4%E7%9A%84%E8%8C%83%E5%9B%B4%E5%86%85%E3%80%82%22%29%3B%20%0A%7D%20else%20%7B%0A%20%20console.log%28%22%E6%88%91%E7%9A%84BMI%E6%98%AF%22%2B%20BMI%20%2B%20%22%E3%80%82%5Cn%E6%88%91%E7%9A%84%E4%BD%93%E9%87%8D%E8%82%A5%E8%83%96%E3%80%82%22%29%3B%20%0A%20%20console.log%28%22%E6%88%91%E7%9A%84%E6%AD%A3%E5%B8%B8%E4%BD%93%E9%87%8D%E5%BA%94%E8%AF%A5%E5%9C%A8%22%20%2B%20minWeight%20%2B%20%22%20-%20%22%20%2B%20maxWeight%20%2B%20%22%E5%85%AC%E6%96%A4%E7%9A%84%E8%8C%83%E5%9B%B4%E5%86%85%E3%80%82%22%29%3B%20%0A%7D&cumulative=false&heapPrimitives=nevernest&mode=edit&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false

// pythontutor's permanent link without annotations(revise some text):
// http://pythontutor.com/visualize.html#code=var%20height%20%3D%201.74%3B%0Avar%20weight%20%3D%2063.5%3B%0A%20%20%20%0Avar%20BMIFloat%20%3D%20weight%20/%20%28height%20*%20height%29%3B%0Avar%20BMI%20%3D%20BMIFloat.toFixed%281%29%3B%20%20%0A%0Avar%20minWeightFloat%20%3D%20height%20*%20height%20*%2018.5%3B%20%0Avar%20minWeight%20%3D%20minWeightFloat.toFixed%281%29%3B%0A%0Avar%20maxWeightFloat%20%3D%20height%20*%20height%20*%2024.0%3B%0Avar%20maxWeight%20%3D%20maxWeightFloat.toFixed%281%29%3B%20%0A%0Aif%20%28BMI%20%3C%2018.5%29%20%7B%0A%20%20console.log%28%22%E6%88%91%E7%9A%84BMI%E6%98%AF%22%2B%20BMI%20%2B%20%22%E3%80%82%5Cn%E6%88%91%E7%9A%84%E4%BD%93%E9%87%8D%E8%BF%87%E8%BD%BB%E3%80%82%22%29%3B%20%0A%20%20console.log%28%22%E6%AD%A3%E5%B8%B8%E4%BD%93%E9%87%8D%3A%22%2BminWeight%2B%22-%22%2BmaxWeight%2B%22%E5%85%AC%E6%96%A4%E7%9A%84%E8%8C%83%E5%9B%B4%E5%86%85%E3%80%82%22%29%3B%0A%7D%20else%20if%20%28BMI%20%3E%3D%2018.5%20%26%26%20BMI%20%3C%2024.0%29%20%7B%0A%20%20console.log%28%22%E6%88%91%E7%9A%84BMI%E6%98%AF%22%2B%20BMI%20%2B%20%22%E3%80%82%5Cn%E6%88%91%E7%9A%84%E4%BD%93%E9%87%8D%E6%AD%A3%E5%B8%B8%E3%80%82%22%29%3B%20%0A%20%20console.log%28%22%E6%AD%A3%E5%B8%B8%E4%BD%93%E9%87%8D%3A%22%2BminWeight%2B%22-%22%2BmaxWeight%2B%22%E5%85%AC%E6%96%A4%E7%9A%84%E8%8C%83%E5%9B%B4%E5%86%85%E3%80%82%22%29%3B%20%0A%7D%20else%20if%20%28BMI%20%3E%3D%2024.0%20%26%26%20BMI%20%3C%2028.0%29%20%7B%0A%20%20console.log%28%22%E6%88%91%E7%9A%84BMI%E6%98%AF%22%2B%20BMI%20%2B%20%22%E3%80%82%5Cn%E6%88%91%E7%9A%84%E4%BD%93%E9%87%8D%E8%B6%85%E9%87%8D%E3%80%82%22%29%3B%20%0A%20%20console.log%28%22%E6%AD%A3%E5%B8%B8%E4%BD%93%E9%87%8D%3A%22%2BminWeight%2B%22-%22%2BmaxWeight%2B%22%E5%85%AC%E6%96%A4%E7%9A%84%E8%8C%83%E5%9B%B4%E5%86%85%E3%80%82%22%29%3B%20%0A%7D%20else%20%7B%0A%20%20console.log%28%22%E6%88%91%E7%9A%84BMI%E6%98%AF%22%2B%20BMI%20%2B%20%22%E3%80%82%5Cn%E6%88%91%E7%9A%84%E4%BD%93%E9%87%8D%E8%82%A5%E8%83%96%E3%80%82%22%29%3B%20%0A%20%20console.log%28%22%E6%AD%A3%E5%B8%B8%E4%BD%93%E9%87%8D%3A%22%2BminWeight%2B%22-%22%2BmaxWeight%2B%22%E5%85%AC%E6%96%A4%E7%9A%84%E8%8C%83%E5%9B%B4%E5%86%85%E3%80%82%22%29%3B%20%0A%7D&cumulative=false&heapPrimitives=nevernest&mode=edit&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false