# NoSQL数据库中的JSON

## 打开实验文件

单击右方的[生成一个JSON数据](https://codepen.io/quanbinn/pen/RwrZdVg), 浏览器里会打开一个新的页面，里面有下面的两段代码段，如下图所示。

```html
<form>
  姓：<input type="text" id="lastName"><br>
  名：<input type="text" id="firstName"><br>

  出生年：<input type="number" id="birthyear"><br>
  身份证号码：<input type="number" id="idOfChina"><br>
  身高：<input type="number" id="height" placeholder="厘米"><br>
  体重：<input type="number" id="weight" placeholder="公斤"><br>

  住址：<br>
  街道门牌号：<input type="text" id="streetAddress"><br>
  城市：      <input type="text" id="city"><br>
  省/直辖市： <input type="text" id="province"><br>
  邮编：     <input type="text" id="postalCode"><br>

  联系电话：<br>
  类型：     <input type="text" id="phoneType"><br>
  号码：     <input type="number" id="phoneNumber"><br>

  子女1：<br>
  姓：<input type="text" id="lastNameOfChild_1"><br>
  名：<input type="text" id="firstNameOfChild_1"><br>
  出生年：<input type="number" id="birthyearOfChild_1"><br>
  身份证号码：<input type="number" id="idOfChinaOfChild_1"><br>

  子女2：<br>
  姓：<input type="text" id="lastNameOfChild_2"><br>
  名：<input type="text" id="firstNameOfChild_2"><br>
  出生年：<input type="number" id="birthyearOfChild_2"><br>
  身份证号码：<input type="number" id="idOfChinaOfChild_2"><br>

  人类贡献：<br>
  贡献1: <input type="text" id="contrib_1"><br>
  贡献2: <input type="text" id="contrib_2"><br>
  贡献3: <input type="text" id="contrib_3"><br>
      <input type="button" value="提交你的信息进入数据库" onclick="handleButton()"/>
</form>
```

```javascript
function handleButton(){
  let agent={};
  agent["lastName"] = document.getElementById("lastName").value;
  agent["firstName"] = document.getElementById("firstName").value;

  agent["birthyear"] = document.getElementById("birthyear").value;
  agent["idOfChina"] = document.getElementById("idOfChina").value;
  agent["height"] = document.getElementById("height").value;
  agent["weight"] = document.getElementById("weight").value;

  address = {};
  address["streetAddress"] =document.getElementById("streetAddress").value;
  address["city"] =document.getElementById("city").value;
  address["province"] =document.getElementById("province").value;
  address["postalCode"] =document.getElementById("postalCode").value;
  agent["address"] = address;

  phoneInfo = {};
  phoneInfo["phoneType"] = document.getElementById("phoneType").value;
  phoneInfo["phoneNumber"] = document.getElementById("phoneNumber").value;
  agent["phoneInfo"] = phoneInfo;  

  childern = [];

  childern_1 = {};
  childern_1["lastName"] = document.getElementById("lastNameOfChild_1").value;
  childern_1["firstName"] = document.getElementById("firstNameOfChild_1").value;
  childern_1["birthyear"] = document.getElementById("birthyearOfChild_1").value;
  childern_1["idOfChina"] = document.getElementById("idOfChinaOfChild_1").value;
  childern.push(childern_1);

  childern_2 = {};
  childern_2["lastName"] = document.getElementById("lastNameOfChild_2").value;
  childern_2["firstName"] = document.getElementById("firstNameOfChild_2").value;
  childern_2["birthyear"] = document.getElementById("birthyearOfChild_2").value;
  childern_2["idOfChina"] = document.getElementById("idOfChinaOfChild_2").value;
  childern.push(childern_2);

  agent["childern"] = childern;  

  contribs = [];
  contribs.push(document.getElementById("contrib_1").value);
  contribs.push(document.getElementById("contrib_2").value); 
  contribs.push(document.getElementById("contrib_3").value);  
  agent["contribs"] = contribs;

  console.log(agent);
  alert(agent["lastName"]);
  alert(agent["firstName"]);
  alert(agent["contribs"]);
  
  alert(agent["childern"][0]["birthyear"]);  
  alert(agent["childern"][1]["birthyear"]); 
}
```

## 参考文献及资料

1. 维基百科
	- [JSON](https://en.wikipedia.org/wiki/JSON) 
	- [BSON](https://en.wikipedia.org/wiki/BSON) 
	- [NoSQL](https://en.wikipedia.org/wiki/NoSQL) 

2. [JSON](https://www.json.org/json-en.html) 

3. [BSON](http://bsonspec.org/) 


