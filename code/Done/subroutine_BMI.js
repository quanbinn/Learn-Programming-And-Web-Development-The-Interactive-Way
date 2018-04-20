function myBMI (weight, height) {    // Two arguments: weight (kg) and height (m)
	var weightVar = weight;            // create variable weightVar from weight
	var heightVar = height;            // create variable heightVar from height

	var BMIFloat = weightVar / (heightVar * heightVar);  // Calculate my BMI(kg/m2) 
	var BMI = BMIFloat.toFixed(1);       // Calculate my BMI round(1)   

	return BMI;
}

console.log("我的BMI是" + myBMI(63.5, 1.74) + "。");

// pythontutor's permanent link:
// http://pythontutor.com/visualize.html#code=function%20myBMI%20%28weight,%20height%29%20%7B%20%20%20%20//%20Two%20arguments%3A%20weight%20%28kg%29%20and%20height%20%28m%29%0A%20%20%20%20var%20weightVar%20%3D%20weight%3B%20%20%20%20%20%20%20%20%20%20%20%20//%20create%20variable%20weightVar%20from%20weight%0A%20%20%20%20var%20heightVar%20%3D%20height%3B%20%20%20%20%20%20%20%20%20%20%20%20//%20create%20variable%20heightVar%20from%20height%0A%0A%20%20%20%20var%20BMIFloat%20%3D%20weightVar%20/%20%28heightVar%20*%20heightVar%29%3B%20%20//%20Calculate%20my%20BMI%28kg/m2%29%20%0A%20%20%20%20var%20BMI%20%3D%20BMIFloat.toFixed%281%29%3B%20%20%20%20%20%20%20//%20Calculate%20my%20BMI%20round%281%29%20%20%20%0A%0A%20%20%20%20return%20BMI%3B%0A%7D%0A%0Aconsole.log%28%22%E6%88%91%E7%9A%84BMI%E6%98%AF%22%20%2B%20myBMI%2863.5,%201.74%29%20%2B%20%22%E3%80%82%22%29%3B&cumulative=false&heapPrimitives=nevernest&mode=edit&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false
