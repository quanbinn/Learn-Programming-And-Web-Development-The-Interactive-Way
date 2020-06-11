# 用DOM操控div

## 打开实验文件

单击右方的[Conditional_BMI](https://codepen.io/quanbinn/pen/WJvoJN), 浏览器里会打开一个新的页面，里面有下面的两段代码段，如下图所示。

```html
<h3>获取BMI数据的具体步骤：</h3>
<ol>
  <li>请输入你的身高和体重的数据</li>
  <li>按下“计算出你的BMI”, 获得你的BMI数值</li>
  <li>获得你的正常体重的范围</li>
</ol>

<form>
  身高：<input type="number" id="height" name="height" min="0" max="300" step="0.5" placeholder="厘米"><br>
  体重：<input type="number" id="weight" name="weight" min="0" max="1000" step="0.5" placeholder="公斤"><br>
  <input type="submit" value="计算出你的BMI" onclick="handleSubmit()"/>
</form>

<div id="heightInfo"></div> 
<div id="weightInfo"></div> 
<div id="BMIInfo"></div>
<div id="healthyWeight"></div>
```

```javascript
function handleSubmit(){
	var height = document.getElementById("height").value;
  var weight = document.getElementById("weight").value;

  var BMIFloatNum = weight / ((height / 100) * (height / 100));// Calculate your BMI(kg/m2)    
  var BMI = BMIFloatNum.toFixed(1);     // Calculate your BMI round(1)

  var minimumNormalWeightFloatNum =  ((height / 100) * (height / 100)) * 18.5;
  var maximumNormalWeightFloatNum =  ((height / 100) * (height / 100)) * 24.0;  

  var minimumNormalWeight = minimumNormalWeightFloatNum.toFixed(1);
  var maximumNormalWeight = maximumNormalWeightFloatNum.toFixed(1);

  // output your BMI description according to China's official BMI recommendation
  if (BMI < 18.5) {
    alert("你的BMI是"+ BMI + "\n你的体重过轻"); 
    alert("\n你的正常体重应该在" + minimumNormalWeight + " - " + maximumNormalWeight + "公斤的范围内。");
    alert("\n你应该适当吃一些含高脂肪或超高脂肪的食品。" + "\n你应该少吃一些含高胆固醇或超高胆固醇的食品。");    
  } else if (BMI >= 18.5 && BMI < 24.0) {
    alert("你的BMI是"+ BMI + "\n你的体重正常"); 
    alert("\n你的正常体重应该在" + minimumNormalWeight + " - " + maximumNormalWeight + "公斤的范围内。"); 
    alert("\n你应该少吃一些含高胆固醇或超高胆固醇的食品。");
  } else if (BMI >= 24.0 && BMI < 28.0) {
    alert("你的BMI是"+ BMI + "\n你的体重超重"); 
    alert("\n你的正常体重应该在" + minimumNormalWeight + " - " + maximumNormalWeight + "公斤的范围内。"); 
    alert("\n你应该少吃含高脂肪或超高脂肪的食品。" + "\n你应该少吃含高胆固醇或超高胆固醇的食品。");
  } else {
    alert("你的BMI是"+ BMI + "\n你的体重肥胖"); 
    alert("\n你的正常体重应该在" + minimumNormalWeight + " - " + maximumNormalWeight + "公斤的范围内。"); 
    alert("\n你应该少吃含高脂肪或超高脂肪的食品。" + "\n你应该少吃含高胆固醇或超高胆固醇的食品。");
  }

  // render the BMI info filled
  document.getElementById("heightInfo").textContent = "你的身高是 " + height +".";  
  document.getElementById("weightInfo").textContent = "你的体重是 " + weight +".";  
  document.getElementById("BMIInfo").textContent = "你的BMI是 " + BMI +".";  
  document.getElementById("healthyWeight").textContent = "你的正常体重应该在" + minimumNormalWeight + " - " + maximumNormalWeight + "公斤的范围内。";  
}
```

## 参考文献及资料

1. 维基百科
	- [Document Object Model](https://en.wikipedia.org/wiki/Document_Object_Modelt) 