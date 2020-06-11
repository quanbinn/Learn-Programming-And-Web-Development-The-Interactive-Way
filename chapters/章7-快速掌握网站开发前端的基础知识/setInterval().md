# setInterval()

## 打开实验文件

单击右方的[setInterval()](https://codepen.io/quanbinn/pen/mdVVNVj), 浏览器里会打开一个新的页面，里面有下面的3段代码段，如下图所示。

```html
<ul id="list">
	<li>item 1</li>
	<li>item 2</li>
	<li>item 3</li>
	<li>item 4</li>
	<li>item 5</li>
</ul>
```

```css
.active {
	text-decoration: underline;
}
```

```javascript
let list = document.getElementById('list'),
		items = list.querySelectorAll('li'),
		itemsLength = items.length,
		time = 1000, // 1000ms = 1s
		activeClass = "active",
		i = 0;

setInterval(() => {
	if (items[4].classList.contains(activeClass)) {
		i = 0;
	}
	items.forEach(el => {
		el.classList.remove(activeClass)
	})
	items[i].classList.add(activeClass);
	i++;
}, time)
```

## 参考文献及资料

1. 维基百科
	- [Blink element](https://en.wikipedia.org/wiki/Blink_element) 

2. [Window setInterval() Method](https://www.w3schools.com/jsref/met_win_setinterval.asp) 