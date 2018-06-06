var weightVar, heightVar, BMIFloat, BMI;     // 4 variables are defined

function myBMI (weightArgu, heightArgu) {    // Two arguments: weight (kg) and height (m)
    weightVar = weightArgu;            // create variable weightVar from weight
    heightVar = heightArgu;            // create variable heightVar from height

    BMIFloat = weightVar / (heightVar * heightVar);  // Calculate my BMI(kg/m2) 
    BMI = BMIFloat.toFixed(1);       // Calculate my BMI round(1)   

    return BMI;
}

console.log("My BMI is " + myBMI(63.5, 1.74) + ".");

// pythontutor's permanent link:
// http://pythontutor.com/live.html#code=var%20weightVar,%20heightVar,%20BMIFloat,%20BMI%3B%20%20%20%20%20//%204%20variables%20are%20defined%0A%0Afunction%20myBMI%20%28weightArgu,%20heightArgu%29%20%7B%20%20%20%20//%20Two%20arguments%3A%20weight%20%28kg%29%20and%20height%20%28m%29%0A%20%20%20%20weightVar%20%3D%20weightArgu%3B%20%20%20%20%20%20%20%20%20%20%20%20//%20create%20variable%20weightVar%20from%20weight%0A%20%20%20%20heightVar%20%3D%20heightArgu%3B%20%20%20%20%20%20%20%20%20%20%20%20//%20create%20variable%20heightVar%20from%20height%0A%0A%20%20%20%20BMIFloat%20%3D%20weightVar%20/%20%28heightVar%20*%20heightVar%29%3B%20%20//%20Calculate%20my%20BMI%28kg/m2%29%20%0A%20%20%20%20BMI%20%3D%20BMIFloat.toFixed%281%29%3B%20%20%20%20%20%20%20//%20Calculate%20my%20BMI%20round%281%29%20%20%20%0A%0A%20%20%20%20return%20BMI%3B%0A%7D%0A%0Aconsole.log%28%22My%20BMI%20is%20%22%20%2B%20myBMI%2863.5,%201.74%29%20%2B%20%22.%22%29%3B&cumulative=false&curInstr=9&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false

// pythontutor's permanent link without annotations:
// http://pythontutor.com/visualize.html#code=var%20weightVar,%20heightVar,%20BMIFloat,%20BMI%3B%20%20%20%20%0A%0Afunction%20myBMI%20%28weightArgu,%20heightArgu%29%20%7B%20%20%20%0A%20%20%20%20weightVar%20%3D%20weightArgu%3B%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20heightVar%20%3D%20heightArgu%3B%20%20%20%20%20%20%20%20%0A%0A%20%20%20%20BMIFloat%20%3D%20weightVar%20/%20%28heightVar%20*%20heightVar%29%3B%20%0A%20%20%20%20BMI%20%3D%20BMIFloat.toFixed%281%29%3B%20%20%20%20%0A%0A%20%20%20%20return%20BMI%3B%0A%7D%0A%0Aconsole.log%28%22My%20BMI%20is%20%22%20%2B%20myBMI%2863.5,%201.74%29%20%2B%20%22.%22%29%3B&cumulative=false&heapPrimitives=nevernest&mode=edit&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false