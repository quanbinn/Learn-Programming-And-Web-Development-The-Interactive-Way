# 用DOM操控Form中的input

## 打开实验文件

单击右方的[Manipulate_Input_of_Form](https://codepen.io/quanbinn/pen/jOWWjwe), 浏览器里会打开一个新的页面，里面有下面的两段代码段，如下图所示。

```html
<form>
  身高：<input type="number" id="height" name="height" placeholder="厘米"><br>
  体重：<input type="number" id="weight" name="weight" placeholder="公斤"><br>
  <input type="button" value="计算出你的BMI" onclick="handleSubmit()"/><br>
  BMI：<input type="text" id="BMIInfo" name="BMIInfo" placeholder=""><br>
</form>
```

```javascript
function handleSubmit(){
var height = document.getElementById("height").value;
  var weight = document.getElementById("weight").value;

  var BMIFloatNum = weight / ((height / 100) * (height / 100));// Calculate your BMI(kg/m2)    
  var BMI = BMIFloatNum.toFixed(1);     // Calculate your BMI round(1)

  document.getElementById("BMIInfo").value = BMI;  
}
```

## 参考文献及资料

1. 维基百科
	- [Document Object Model](https://en.wikipedia.org/wiki/Document_Object_Modelt) 

2. [Calculate Your Body Mass Index from U.S. Department of Health & Human Services](https://www.nhlbi.nih.gov/health/educational/lose_wt/BMI/bmicalc.htm) 

