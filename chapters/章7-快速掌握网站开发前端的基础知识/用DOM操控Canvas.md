# 用DOM操控Canvas

## 打开实验文件

单击右方的[canvas](https://codepen.io/quanbinn/pen/vrvEmL), 浏览器里会打开一个新的页面，里面有下面的3段代码段，如下图所示。

```html
<canvas id="myCanvas1" width="100" height="100"></canvas>
<canvas id="myCanvas2" width="100" height="100"></canvas>
<canvas id="myCanvas3" width="100" height="100"></canvas>
```

```css
#myCanvas1 {
  border: 1px solid black;
  position: absolute; 
  left: 30px; 
  top: 30px
}

#myCanvas2 {
  border: 1px solid black;
  position: absolute; 
  left: 150px; 
  top: 150px
}

#myCanvas3 {
  border: 1px solid black;
  position: absolute; 
  left: 300px; 
  top: 300px
}
```

```javascript
// 1 - Get the canvas
var canvas1 = document.getElementById('myCanvas1');
// 2 - Get the context
var ctx1=canvas1.getContext('2d');
// 3 - we can draw
var imageObj1 = new Image();
imageObj1.onload = function () {
  ctx1.drawImage(imageObj1, 0, 0, canvas1.width, canvas1.height);
};
imageObj1.src =
  "http://www.spineuniverse.com/sites/default/files/imagecache/gallery-large/wysiwyg_imageupload/3998/2016/02/04/pain15181687_M_0.jpg";

// 1 - Get the canvas
var canvas2 = document.getElementById('myCanvas2');
// 2 - Get the context
var ctx2=canvas2.getContext('2d');
// 3 - we can draw
var imageObj2 = new Image();
imageObj2.onload = function () {
  ctx2.drawImage(imageObj2, 0, 0, canvas2.width, canvas2.height);
};
imageObj2.src =
  "http://www.newhopemedicalcenter.com/wp-content/uploads/2012/06/stomach1.jpg";

// 1 - Get the canvas
var canvas3 = document.getElementById('myCanvas3');
// 2 - Get the context
var ctx3=canvas3.getContext('2d');
// 3 - we can draw
var imageObj3 = new Image();
imageObj3.onload = function () {
  ctx3.drawImage(imageObj3, 0, 0, canvas3.width, canvas3.height);
};
imageObj3.src =  "http://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/low_back_pain_overview_slideshow/493x335_low_back_pain_overview_slideshow.jpg";
```

## 参考文献及资料

1. 维基百科
	- [Canvas element](https://en.wikipedia.org/wiki/Canvas_element) 