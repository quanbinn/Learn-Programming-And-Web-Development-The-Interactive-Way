# 实验: Insertion排序

## 打开实验文件

单击右方的[在线代码段Url网址](http://www.pythontutor.com/visualize.html#code=def%20insertionSort%28citylist%29%3A%0A%20%20%20for%20index%20in%20range%281,len%28citylist%29%29%3A%0A%0A%20%20%20%20%20currentdata%20%3D%20citylist%5Bindex%5D%20%20%20%0A%20%20%20%20%20currentvalue%20%3D%20citylist%5Bindex%5D%5B'distance'%5D%0A%20%20%20%20%20position%20%3D%20index%0A%20%0A%20%20%20%20%20while%20position%3E0%20and%20citylist%5Bposition-1%5D%5B'distance'%5D%3Ecurrentvalue%3A%0A%20%20%20%20%20%20%20%20%20citylist%5Bposition%5D%3Dcitylist%5Bposition-1%5D%0A%20%20%20%20%20%20%20%20%20position%20%3D%20position-1%0A%0A%20%20%20%20%20citylist%5Bposition%5D%20%3D%20currentdata%0A%20%20%20%20%20print%28citylist%29%0A%0Acitylist%20%3D%20%5B%7B'id'%3A0,'toplace'%3A'city1','distance'%3A54%7D,%0A%7B'id'%3A1,'toplace'%3A'city2','distance'%3A26%7D,%0A%7B'id'%3A2,'toplace'%3A'city3','distance'%3A93%7D,%0A%7B'id'%3A3,'toplace'%3A'city4','distance'%3A17%7D,%0A%7B'id'%3A4,'toplace'%3A'city5','distance'%3A77%7D,%0A%7B'id'%3A5,'toplace'%3A'city6','distance'%3A31%7D,%0A%7B'id'%3A6,'toplace'%3A'city7','distance'%3A44%7D,%0A%7B'id'%3A7,'toplace'%3A'city8','distance'%3A55%7D,%0A%7B'id'%3A8,'toplace'%3A'city9','distance'%3A20%7D%5D%0AinsertionSort%28citylist%29%0Aprint%28citylist%29&cumulative=false&heapPrimitives=nevernest&mode=edit&origin=opt-frontend.js&py=py3anaconda&rawInputLstJSON=%5B%5D&textReferences=false)，浏览器里会打开一个新的页面，里面有下面的代码段。

```python
def insertionSort(citylist):
   for index in range(1,len(citylist)):

     currentdata = citylist[index]   
     currentvalue = citylist[index]['distance']
     position = index
 
     while position>0 and citylist[position-1]['distance']>currentvalue:
         citylist[position]=citylist[position-1]
         position = position-1

     citylist[position] = currentdata
     print(citylist)

citylist = [{'id':0,'toplace':'city1','distance':54},
{'id':1,'toplace':'city2','distance':26},
{'id':2,'toplace':'city3','distance':93},
{'id':3,'toplace':'city4','distance':17},
{'id':4,'toplace':'city5','distance':77},
{'id':5,'toplace':'city6','distance':31},
{'id':6,'toplace':'city7','distance':44},
{'id':7,'toplace':'city8','distance':55},
{'id':8,'toplace':'city9','distance':20}]
insertionSort(citylist)
print(citylist)
```

## 开始做实体实验

### 用实体模型表达上面代码段的运行过程1，分别如下图所示。

![](/images/章5-理解基本的算法/Insertion排序/00.jpg)
![](/images/章5-理解基本的算法/Insertion排序/0.jpg)
![](/images/章5-理解基本的算法/Insertion排序/1a1.jpg)

### 运行过程2如下图所示。

![](/images/章5-理解基本的算法/Insertion排序/2a1.jpg)

### 运行过程3，分别如下图所示。

![](/images/章5-理解基本的算法/Insertion排序/3a1.jpg)
![](/images/章5-理解基本的算法/Insertion排序/3a2.jpg)
![](/images/章5-理解基本的算法/Insertion排序/3a3.jpg)
![](/images/章5-理解基本的算法/Insertion排序/3a4.jpg)

### 运行过程4如下图所示。

![](/images/章5-理解基本的算法/Insertion排序/4a1.jpg)

### 运行过程5如下图所示。

![](/images/章5-理解基本的算法/Insertion排序/5a1.jpg)

### 运行过程6如下图所示。

![](/images/章5-理解基本的算法/Insertion排序/6a1.jpg)

### 运行过程7如下图所示。

![](/images/章5-理解基本的算法/Insertion排序/7a1.jpg)

### 运行过程8如下图所示。

![](/images/章5-理解基本的算法/Insertion排序/8a1.jpg)

## 参考文献及资料

1. 维基百科
	- [Insertion sort](https://en.wikipedia.org/wiki/Insertion_sort) 

2. [The Insertion Sort](https://runestone.academy/runestone/books/published/pythonds/SortSearch/TheInsertionSort.html) 

