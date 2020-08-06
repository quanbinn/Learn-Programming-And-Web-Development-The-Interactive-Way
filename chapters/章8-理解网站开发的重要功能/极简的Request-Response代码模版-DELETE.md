# 极简的Request-Response代码模版-DELETE

## 打开实验文件

单击右方的[Req-Res-Template-DELETE](https://codepen.io/quanbinn/pen/qBZWwrj), 浏览器里会打开一个新的页面，里面有下面的两段代码段，如下图所示。

```html
Request Method: <select id= "req1Method">
              <option value="GET">GET</option>
              <option value="POST">POST</option>	
              <option value="PUT">PUT</option>
              <option value="DELETE">DELETE</option>
           </select><br>
Request Url：
          <input type="text" id="scheme1" placeholder="scheme">://
          <input type="text" id="hostname&port1" placeholder="hostname&port">
          <input type="text" id="path1" placeholder="path">
          <input type="text" id="query1" placeholder="query">
          <input type="text" id="fragment1" placeholder="fragment"><br>
<input type="submit" value="提交Request_1" onclick="handleRequest1Submit()"/><br>
<hr>
<div id="response1"></div>
<hr>
Request Method: <select id= "req2Method">
              <option value="GET">GET</option>
              <option value="POST">POST</option>	
              <option value="PUT">PUT</option>
              <option value="DELETE">DELETE</option>
           </select><br>
Request Url：
          <input type="text" id="scheme2" placeholder="scheme">://
          <input type="text" id="hostname&port2" placeholder="hostname&port">
          <input type="text" id="path2" placeholder="path">
          <input type="text" id="query2" placeholder="query">
          <input type="text" id="fragment2" placeholder="fragment"><br>
<input type="submit" value="提交Request_2" onclick="handleRequest2Submit()"/><br>
<hr>
<div id="response2"></div>
```

```javascript
function handleRequest1Submit(){
  let req1Method = document.getElementById("req1Method").value;
  let scheme1 = document.getElementById("scheme1").value;  
  let hostnamePort1 = document.getElementById("hostname&port1").value;  
  let path1 = document.getElementById("path1").value;  
  let query1 = document.getElementById("query1").value;  
  let fragment1 = document.getElementById("fragment1").value;  
  let req1Url = scheme1 +"://"+hostnamePort1+path1+query1+fragment1;
  alert("Request 1的方法是" + req1Method);
  alert("提交的Request_1的Url是" + req1Url);
  
  document.getElementById("response1").innerHTML = "<h3>获取BMI数据的具体步骤：</h3><ol><li>请输入你的身高和体重的数据</li><li>按下“计算出你的BMI”, 获得你的BMI数值</li><li>获得你的正常体重的范围</li></ol><h3>获取BMI数据的具体步骤：</h3><ol><li>请输入你的身高和体重的数据</li><li>按下“计算出你的BMI”, 获得你的BMI数值</li><li>获得你的正常体重的范围</li></ol>"; 
}

function handleRequest2Submit(){
  let req2Method = document.getElementById("req2Method").value;
  let scheme2 = document.getElementById("scheme2").value;  
  let hostnamePort2 = document.getElementById("hostname&port2").value; 
  let path2 = document.getElementById("path2").value;  
  let query2 = document.getElementById("query2").value;  
  let fragment2 = document.getElementById("fragment2").value;  
  let req2Url = scheme2 +"://"+hostnamePort2+path2+query2+fragment2;
  alert("Request 2的方法是" + req2Method);
  alert("提交的Request_2的Url是" + req2Url);
  
  document.getElementById("response2").innerHTML = "<h3>获取BMI数据的具体步骤：</h3><ol><li>请输入你的身高和体重的数据</li><li>按下“计算出你的BMI”, 获得你的BMI数值</li><li>获得你的正常体重的范围</li></ol><h3>获取BMI数据的具体步骤：</h3><ol><li>请输入你的身高和体重的数据</li><li>按下“计算出你的BMI”, 获得你的BMI数值</li><li>获得你的正常体重的范围</li></ol><h3>获取BMI数据的具体步骤：</h3><ol><li>请输入你的身高和体重的数据</li><li>按下“计算出你的BMI”, 获得你的BMI数值</li><li>获得你的正常体重的范围</li></ol>"; 
}
```

## 参考文献及资料

1. 维基百科
	- [Request message](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_message) 
	- [Response message](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Response_message)
	- [Request methods](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods)  

2. [RFC 7231：DELETE](https://tools.ietf.org/html/rfc7231#page-29)   
