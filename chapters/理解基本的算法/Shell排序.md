# Shell排序

## 打开实验文件

### 单击右方的[在线代码段Url网址](http://www.pythontutor.com/visualize.html#code=def%20shellSort%28citylist%29%3A%0A%20%20%20%20sublistcount%20%3D%20len%28citylist%29//2%0A%20%20%20%20while%20sublistcount%20%3E%200%3A%0A%0A%20%20%20%20%20%20for%20startposition%20in%20range%28sublistcount%29%3A%0A%20%20%20%20%20%20%20%20gapInsertionSort%28citylist,startposition,sublistcount%29%0A%0A%20%20%20%20%20%20print%28%22%E5%9C%A8%E9%80%92%E5%A2%9E%E6%95%B0%E5%80%BC%E4%B8%BA%22,sublistcount,%22%EF%BC%8C%E8%BF%90%E7%AE%97%E5%90%8E%E7%9A%84%E6%95%B0%E6%8D%AE%E5%88%97%E8%A1%A8%E9%A1%BA%E5%BA%8F%E5%8F%98%E6%88%90%E4%BA%86%EF%BC%9A%22,citylist%29%0A%0A%20%20%20%20%20%20sublistcount%20%3D%20sublistcount%20//%202%0A%0Adef%20gapInsertionSort%28citylist,start,gap%29%3A%0A%20%20%20%20for%20i%20in%20range%28start%2Bgap,len%28citylist%29,gap%29%3A%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20currentdata%20%3D%20citylist%5Bi%5D%20%20%20%0A%20%20%20%20%20%20%20%20currentvalue%20%3D%20citylist%5Bi%5D%5B'distance'%5D%0A%20%20%20%20%20%20%20%20position%20%3D%20i%0A%0A%20%20%20%20%20%20%20%20while%20position%3E%3Dgap%20and%20citylist%5Bposition-gap%5D%5B'distance'%5D%3Ecurrentvalue%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20citylist%5Bposition%5D%3Dcitylist%5Bposition-gap%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20position%20%3D%20position-gap%0A%0A%20%20%20%20%20%20%20%20citylist%5Bposition%5D%3Dcurrentdata%0A%0Acitylist%20%3D%20%5B%0A%7B'id'%3A3,'toplace'%3A'city4','distance'%3A17%7D,%0A%7B'id'%3A8,'toplace'%3A'city9','distance'%3A20%7D,%0A%7B'id'%3A1,'toplace'%3A'city2','distance'%3A26%7D,%0A%7B'id'%3A5,'toplace'%3A'city6','distance'%3A31%7D,%0A%7B'id'%3A6,'toplace'%3A'city7','distance'%3A44%7D,%0A%7B'id'%3A0,'toplace'%3A'city1','distance'%3A54%7D,%0A%7B'id'%3A7,'toplace'%3A'city8','distance'%3A55%7D,%0A%7B'id'%3A4,'toplace'%3A'city5','distance'%3A77%7D,%0A%7B'id'%3A2,'toplace'%3A'city3','distance'%3A93%7D%0A%5D%0AshellSort%28citylist%29%0Aprint%28citylist%29&cumulative=false&heapPrimitives=nevernest&mode=edit&origin=opt-frontend.js&py=py3anaconda&rawInputLstJSON=%5B%5D&textReferences=false)，浏览器里会打开一个新的页面，里面有下面的代码段。

```python
def shellSort(citylist):
    sublistcount = len(citylist)//2
    while sublistcount > 0:

      for startposition in range(sublistcount):
        gapInsertionSort(citylist,startposition,sublistcount)

      print("在递增数值为",sublistcount,"，运算后的数据列表顺序变成了：",citylist)

      sublistcount = sublistcount // 2

def gapInsertionSort(citylist,start,gap):
    for i in range(start+gap,len(citylist),gap):
        
        currentdata = citylist[i]   
        currentvalue = citylist[i]['distance']
        position = i

        while position>=gap and citylist[position-gap]['distance']>currentvalue:
            citylist[position]=citylist[position-gap]
            position = position-gap

        citylist[position]=currentdata

citylist = [
{'id':3,'toplace':'city4','distance':17},
{'id':8,'toplace':'city9','distance':20},
{'id':1,'toplace':'city2','distance':26},
{'id':5,'toplace':'city6','distance':31},
{'id':6,'toplace':'city7','distance':44},
{'id':0,'toplace':'city1','distance':54},
{'id':7,'toplace':'city8','distance':55},
{'id':4,'toplace':'city5','distance':77},
{'id':2,'toplace':'city3','distance':93}
]
shellSort(citylist)
print(citylist)
```

### 注明：只有数字的数据请单击右方的[在线代码段Url网址](http://www.pythontutor.com/visualize.html#code=def%20shellSort%28alist%29%3A%0A%20%20%20%20sublistcount%20%3D%20len%28alist%29//2%0A%20%20%20%20while%20sublistcount%20%3E%200%3A%0A%20%20%20%20%20%20for%20startposition%20in%20range%28sublistcount%29%3A%0A%20%20%20%20%20%20%20%20gapInsertionSort%28alist,startposition,sublistcount%29%0A%20%20%20%20%20%20print%28%22%E5%9C%A8%E9%80%92%E5%A2%9E%E6%95%B0%E5%80%BC%E4%B8%BA%22,sublistcount,%22%EF%BC%8C%E8%BF%90%E7%AE%97%E5%90%8E%E7%9A%84%E6%95%B0%E6%8D%AE%E5%88%97%E8%A1%A8%E9%A1%BA%E5%BA%8F%E5%8F%98%E6%88%90%E4%BA%86%EF%BC%9A%22,alist%29%0A%20%20%20%20%20%20sublistcount%20%3D%20sublistcount%20//%202%0A%0Adef%20gapInsertionSort%28alist,start,gap%29%3A%0A%20%20%20%20for%20i%20in%20range%28start%2Bgap,len%28alist%29,gap%29%3A%0A%20%20%20%20%20%20%20%20currentvalue%20%3D%20alist%5Bi%5D%0A%20%20%20%20%20%20%20%20position%20%3D%20i%0A%20%20%20%20%20%20%20%20while%20position%3E%3Dgap%20and%20alist%5Bposition-gap%5D%3Ecurrentvalue%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20alist%5Bposition%5D%3Dalist%5Bposition-gap%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20position%20%3D%20position-gap%0A%20%20%20%20%20%20%20%20alist%5Bposition%5D%3Dcurrentvalue%0Aalist%20%3D%20%5B54,26,93,17,77,31,44,55,20%5D%0AshellSort%28alist%29%0Aprint%28alist%29&cumulative=false&heapPrimitives=nevernest&mode=edit&origin=opt-frontend.js&py=py3anaconda&rawInputLstJSON=%5B%5D&textReferences=false)，浏览器里会打开一个新的页面，里面有下面的代码段。

```python
def shellSort(alist):
    sublistcount = len(alist)//2
    while sublistcount > 0:
      for startposition in range(sublistcount):
        gapInsertionSort(alist,startposition,sublistcount)
      print("在递增数值为",sublistcount,"，运算后的数据列表顺序变成了：",alist)
      sublistcount = sublistcount // 2

def gapInsertionSort(alist,start,gap):
    for i in range(start+gap,len(alist),gap):
        currentvalue = alist[i]
        position = i
        while position>=gap and alist[position-gap]>currentvalue:
            alist[position]=alist[position-gap]
            position = position-gap
        alist[position]=currentvalue
alist = [54,26,93,17,77,31,44,55,20]
shellSort(alist)
print(alist)
```

## 开始做实体实验

### 用实体模型表达上面代码段的运行过程1，分别如下图所示。

![](/images/理解基本的算法/Shell排序/1a1.jpg)
![](/images/理解基本的算法/Shell排序/1a2.jpg)
![](/images/理解基本的算法/Shell排序/1a3.jpg)
![](/images/理解基本的算法/Shell排序/1a4.jpg)
![](/images/理解基本的算法/Shell排序/1a5.jpg)
![](/images/理解基本的算法/Shell排序/1a6.jpg)
![](/images/理解基本的算法/Shell排序/1a7.jpg)
![](/images/理解基本的算法/Shell排序/1a8.jpg)
![](/images/理解基本的算法/Shell排序/1a9.jpg)
![](/images/理解基本的算法/Shell排序/1a10.jpg)

### 运行过程2，分别如下图所示。

![](/images/理解基本的算法/Shell排序/2a1.jpg)
![](/images/理解基本的算法/Shell排序/2a2.jpg)
![](/images/理解基本的算法/Shell排序/2a3.jpg)

### 运行过程3，分别如下图所示。

![](/images/理解基本的算法/Shell排序/3a1.jpg)
![](/images/理解基本的算法/Shell排序/3a2.jpg)
![](/images/理解基本的算法/Shell排序/3a3.jpg)
![](/images/理解基本的算法/Shell排序/3a4.jpg)
![](/images/理解基本的算法/Shell排序/3a5.jpg)

## 参考文献及资料

1. 维基百科
	- [Shellsort](https://en.wikipedia.org/wiki/Shellsort) 

2. [The Shell Sort](https://runestone.academy/runestone/books/published/pythonds/SortSearch/TheShellSort.html) 
