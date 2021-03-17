# 创建DOM树的数据节点

## 打开实验文件

单击右方的[在线代码段](https://www.w3school.com.cn/tiy/t.asp?f=dom_elementcreate), 浏览器里会打开一个页面，如下图所示。

```html
<!DOCTYPE html>
<html>
<body>

<div id="div1">
<p id="p1">This is a paragraph.</p>
<p id="p2">This is another paragraph.</p>
</div>

<script>
var para=document.createElement("p");
var node=document.createTextNode("This is new.");
para.appendChild(node);

var element=document.getElementById("div1");
element.appendChild(para);
</script>

</body>
</html>
```

单击右方的[在线代码段](https://www.w3school.com.cn/tiy/t.asp?f=dom_elementcreate2), 浏览器里会打开一个页面，如下图所示。

```html
<!DOCTYPE html>
<html>
<body>

<div id="div1">
<p id="p1">This is a paragraph.</p>
<p id="p2">This is another paragraph.</p>
</div>

<script>
var para=document.createElement("p");
var node=document.createTextNode("This is new.");
para.appendChild(node);

var element=document.getElementById("div1");
var child=document.getElementById("p1");
element.insertBefore(para,child);
</script>

</body>
</html>
```
## 参考文献及资料

1. [HTML DOM - 元素 **from w3c**](https://www.w3school.com.cn/htmldom/dom_elements.asp) 