# setInterval()

## 打开实验文件

单击右方的[setInterval()](https://codepen.io/quanbinn/pen/mdVVNVj), 浏览器里会打开一个新的页面，里面有下面的3段代码段，如下图所示。

```html
<button onclick="start()">Start animation</button>
<button onclick="stop()">Stop animation</button>
<p>
  <div id="animatedDIV">Animated DIV :-)</div>
</p>
```

```css
 #animatedDIV {
   position:absolute;
   background-color:red;
   color:white;
   height:100px;
 }
```

```javascript
var elm = document.getElementById("animatedDIV");
var requestId;
var x = 0;
 
function render(time) {
   elm.style.left = x++ + "px";
 }
 
function start() {
   requestId = setInterval(render, 10);
}

function stop() {
   if (requestId) {
      clearInterval(requestId);
   }
}
```

## 参考文献及资料

1. 维基百科
	- [Blink element](https://en.wikipedia.org/wiki/Blink_element) 

2. [Using the setInterval() JavaScript function](https://courses.edx.org/courses/course-v1:W3Cx+W3C-HTML5+2015T3/courseware/38740245fa50474a94071e2845ecd8b9/c355200d650c46da80dcccfce5ac3cff/?activate_block_id=block-v1%3AW3Cx%2BW3C-HTML5%2B2015T3%2Btype%40sequential%2Bblock%40c355200d650c46da80dcccfce5ac3cff)

3. [Window setInterval() Method](https://www.w3schools.com/jsref/met_win_setinterval.asp) 