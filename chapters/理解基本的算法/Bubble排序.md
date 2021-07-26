# Bubble排序

## 打开实验文件

单击右方的[在线代码段Url网址](http://www.pythontutor.com/live.html#code=def%20bubbleSort%28alist%29%3A%0A%20%20%20%20for%20passnum%20in%20range%28len%28alist%29-1,0,-1%29%3A%0A%20%20%20%20%20%20%20%20for%20i%20in%20range%28passnum%29%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20alist%5Bi%5D%3Ealist%5Bi%2B1%5D%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20temp%20%3D%20alist%5Bi%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20alist%5Bi%5D%20%3D%20alist%5Bi%2B1%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20alist%5Bi%2B1%5D%20%3D%20temp%0A%0Aalist%20%3D%20%5B54,26,93,17,77,31,44,55,20%5D%0AbubbleSort%28alist%29%0Aprint%28alist%29&cumulative=false&curInstr=86&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false)，浏览器里会打开一个新的页面，里面有下面的代码段。

```python
def bubbleSort(alist):
    for passnum in range(len(alist)-1,0,-1):
        for i in range(passnum):
            if alist[i]>alist[i+1]:
                temp = alist[i]
                alist[i] = alist[i+1]
                alist[i+1] = temp

alist = [54,26,93,17,77,31,44,55,20]
bubbleSort(alist)
print(alist)
```

单击右方的[在线代码段Url网址](http://www.pythontutor.com/live.html#code=function%20bubbleSort%20%28arr%29%20%7B%0A%20%20var%20max%20%3D%20arr.length%20-%201%3B%0A%20%20for%20%28var%20j%20%3D%200%3B%20j%20%3C%20max%3B%20j%2B%2B%29%20%7B%0A%20%20%20%20var%20done%20%3D%20true%3B%0A%20%20%20%20for%20%28var%20i%20%3D%200%3B%20i%20%3C%20max%20-%20j%3B%20i%2B%2B%29%20%7B%0A%20%20%20%20%20%20if%20%28arr%5Bi%5D%20%3E%20arr%5Bi%20%2B%201%5D%29%20%7B%0A%20%20%20%20%20%20%20%20var%20temp%20%3D%20arr%5Bi%5D%3B%0A%20%20%20%20%20%20%20%20arr%5Bi%5D%20%3D%20arr%5Bi%20%2B%201%5D%3B%0A%20%20%20%20%20%20%20%20arr%5Bi%20%2B%201%5D%20%3D%20temp%3B%0A%20%20%20%20%20%20%20%20done%20%3D%20false%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20if%20%28done%29%20%7B%0A%20%20%20%20%20%20break%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20return%20arr%3B%0A%7D%0A%0Avar%20arr%20%3D%20%5B54,26,93,17,77,31,44,55,20%5D%3B%0AbubbleSort%28arr%29%3B%0A&cumulative=false&curInstr=242&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false)，浏览器里会打开一个新的页面，里面有下面的代码段。

```javascript
function bubbleSort (arr) {
  var max = arr.length - 1;
  for (var j = 0; j < max; j++) {
    var done = true;
    for (var i = 0; i < max - j; i++) {
      if (arr[i] > arr[i + 1]) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        done = false;
      }
    }
    if (done) {
      break;
    }
  }
  return arr;
}

var arr = [54,26,93,17,77,31,44,55,20];
bubbleSort(arr);
```

## 开始做实体实验

### 用实体模型表达上面代码段的运行过程1，分别如下图所示。

![](/images/理解基本的算法/Bubble排序/1a1.jpg)
![](/images/理解基本的算法/Bubble排序/1a2.jpg)
![](/images/理解基本的算法/Bubble排序/1a3.jpg)
![](/images/理解基本的算法/Bubble排序/1a4.jpg)
![](/images/理解基本的算法/Bubble排序/1a5.jpg)
![](/images/理解基本的算法/Bubble排序/1a6.jpg)
![](/images/理解基本的算法/Bubble排序/1a7.jpg)
![](/images/理解基本的算法/Bubble排序/1a8.jpg)
![](/images/理解基本的算法/Bubble排序/1a9.jpg)
![](/images/理解基本的算法/Bubble排序/1a10.jpg)
![](/images/理解基本的算法/Bubble排序/1a11.jpg)
![](/images/理解基本的算法/Bubble排序/1a12.jpg)
![](/images/理解基本的算法/Bubble排序/1a13.jpg)
![](/images/理解基本的算法/Bubble排序/1a14.jpg)
![](/images/理解基本的算法/Bubble排序/1a15.jpg)
![](/images/理解基本的算法/Bubble排序/1a16.jpg)
![](/images/理解基本的算法/Bubble排序/1a17.jpg)

### 运行过程2如下图所示。

![](/images/理解基本的算法/Bubble排序/2a1.jpg)
![](/images/理解基本的算法/Bubble排序/2a2.jpg)
![](/images/理解基本的算法/Bubble排序/2a3.jpg)
![](/images/理解基本的算法/Bubble排序/2a4.jpg)
![](/images/理解基本的算法/Bubble排序/2a5.jpg)
![](/images/理解基本的算法/Bubble排序/2a6.jpg)
![](/images/理解基本的算法/Bubble排序/2a7.jpg)
![](/images/理解基本的算法/Bubble排序/2a8.jpg)
![](/images/理解基本的算法/Bubble排序/2a9.jpg)
![](/images/理解基本的算法/Bubble排序/2a10.jpg)
![](/images/理解基本的算法/Bubble排序/2a11.jpg)
![](/images/理解基本的算法/Bubble排序/2a12.jpg)
![](/images/理解基本的算法/Bubble排序/2a13.jpg)
![](/images/理解基本的算法/Bubble排序/2a14.jpg)

### 运行过程3，分别如下图所示。

![](/images/理解基本的算法/Bubble排序/3a1.jpg)
![](/images/理解基本的算法/Bubble排序/3a2.jpg)
![](/images/理解基本的算法/Bubble排序/3a3.jpg)
![](/images/理解基本的算法/Bubble排序/3a4.jpg)
![](/images/理解基本的算法/Bubble排序/3a5.jpg)
![](/images/理解基本的算法/Bubble排序/3a6.jpg)
![](/images/理解基本的算法/Bubble排序/3a7.jpg)
![](/images/理解基本的算法/Bubble排序/3a8.jpg)
![](/images/理解基本的算法/Bubble排序/3a9.jpg)
![](/images/理解基本的算法/Bubble排序/3a10.jpg)
![](/images/理解基本的算法/Bubble排序/3a11.jpg)


### 运行过程4如下图所示。

![](/images/理解基本的算法/Bubble排序/4a1.jpg)
![](/images/理解基本的算法/Bubble排序/4a2.jpg)
![](/images/理解基本的算法/Bubble排序/4a3.jpg)

### 运行过程5如下图所示。

![](/images/理解基本的算法/Bubble排序/5a1.jpg)
![](/images/理解基本的算法/Bubble排序/5a2.jpg)
![](/images/理解基本的算法/Bubble排序/5a3.jpg)

### 运行过程6如下图所示。

![](/images/理解基本的算法/Bubble排序/6a1.jpg)
![](/images/理解基本的算法/Bubble排序/6a2.jpg)
![](/images/理解基本的算法/Bubble排序/6a3.jpg)

### 运行过程7如下图所示。

![](/images/理解基本的算法/Bubble排序/7a1.jpg)
![](/images/理解基本的算法/Bubble排序/7a2.jpg)
![](/images/理解基本的算法/Bubble排序/7a3.jpg)

### 运行过程8如下图所示。

![](/images/理解基本的算法/Bubble排序/8a1.jpg)

## 参考文献及资料

1. 维基百科
	- [Bubble sort](https://en.wikipedia.org/wiki/Bubble_sort) 

2. [The Bubble Sort](https://runestone.academy/runestone/books/published/pythonds/SortSearch/TheBubbleSort.html) 
3. [JavaScript实现冒泡排序](https://blog.csdn.net/fe_dev/article/details/79600448) 

