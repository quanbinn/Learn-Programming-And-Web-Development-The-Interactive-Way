function myBMI (weight, height) {    // Two arguments: weight (kg) and height (m)
	var weightVar = weight;            // create variable weightVar from weight
	var heightVar = height;            // create variable heightVar from height

	var BMIFloat = weightVar / (heightVar * heightVar);  // Calculate my BMI(kg/m2) 
	var BMI = BMIFloat.toFixed(1);       // Calculate my BMI round(1)   

	return BMI;
}

console.log("我的BMI是" + myBMI(63.5, 1.74) + "。");
