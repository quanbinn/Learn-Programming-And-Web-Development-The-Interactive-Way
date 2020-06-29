# 从client上传1个文件

## 打开实验文件

单击右方的[从client上传1个文件](https://codepen.io/quanbinn/pen/yLezaQa), 浏览器里会打开一个新的页面，里面有下面的两段代码段，如下图所示。

```html
<input type="file" onchange="showFile(this)">
```

```javascript
function showFile(input) {
  let file = input.files[0];

  alert(`File name: ${file.name}`); // e.g my.png
  alert(`Last modified: ${file.lastModified}`); // e.g 1552830408824
}
```

## 参考文献及资料

1. 维基百科
	- [Computer file](https://en.wikipedia.org/wiki/Computer_file) 
	- [file URI scheme](https://en.wikipedia.org/wiki/File_URI_scheme) 

2. [The Modern JavaScript Tutorial](https://javascript.info/) 
	- [ArrayBuffer, binary arrays](https://javascript.info/arraybuffer-binary-arrays) 
	- [TextDecoder and TextEncoder](https://javascript.info/text-decoder) 
	- [Blob](https://javascript.info/blob) 
	- [File and FileReader](https://javascript.info/file) 
