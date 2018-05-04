/* HTML
<form>
  身高：<input type="number" id="height" min="50" max="250" step="0.5" placeholder="厘米"><br>
  体重：<input type="number" id="weight" min="3" max="500" step="0.5" placeholder="公斤"><br>
  <input type="submit" value="计算出你的BMI" onclick="handleSubmit()"/>
</form>

<div id="heightInfo"></div> 
<div id="weightInfo"></div> 
<div id="BMIInfo"></div>
*/

// JavaScript + No-Library (pure JS) 
function handleSubmit(){
	var height = document.getElementById("height").value;
  var weight = document.getElementById("weight").value;
  var BMIFloat = weight / ((height / 100) * (height / 100));   
  var BMI = BMIFloat.toFixed(1);     

  if (BMI < 18.5) {
    alert("你的BMI是"+BMI+"\n你的体重过轻"); } else if (BMI >= 18.5 && BMI < 24.0) {
    alert("你的BMI是"+BMI+"\n你的体重正常"); } else if (BMI >= 24.0 && BMI < 28.0) {
    alert("你的BMI是"+BMI+"\n你的体重超重"); } else { alert("你的BMI是"+BMI+"\n你的体重肥胖"); 
  }
  
  document.getElementById("heightInfo").textContent = "你的身高是 " + height +".";  
  document.getElementById("weightInfo").textContent = "你的体重是 " + weight +".";  
  document.getElementById("BMIInfo").textContent = "你的BMI是 " + BMI +".";  
}

// jsfiddle.net's permanent link:
// https://jsfiddle.net/quanbinn/9eynghk2/