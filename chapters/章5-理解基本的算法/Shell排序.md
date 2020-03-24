# 实验: Shell排序

## 打开实验文件

单击右方的[在线代码段Url网址](http://www.pythontutor.com/visualize.html#code=def%20shellSort%28citylist%29%3A%0A%20%20%20%20sublistcount%20%3D%20len%28citylist%29//2%0A%20%20%20%20while%20sublistcount%20%3E%200%3A%0A%0A%20%20%20%20%20%20for%20startposition%20in%20range%28sublistcount%29%3A%0A%20%20%20%20%20%20%20%20gapInsertionSort%28citylist,startposition,sublistcount%29%0A%0A%20%20%20%20%20%20print%28%22After%20increments%20of%20size%22,sublistcount,%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22The%20list%20is%22,citylist%29%0A%0A%20%20%20%20%20%20sublistcount%20%3D%20sublistcount%20//%202%0A%0Adef%20gapInsertionSort%28citylist,start,gap%29%3A%0A%20%20%20%20for%20i%20in%20range%28start%2Bgap,len%28citylist%29,gap%29%3A%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20currentdata%20%3D%20citylist%5Bi%5D%20%20%20%0A%20%20%20%20%20%20%20%20currentvalue%20%3D%20citylist%5Bi%5D%5B'distance'%5D%0A%20%20%20%20%20%20%20%20position%20%3D%20i%0A%0A%20%20%20%20%20%20%20%20while%20position%3E%3Dgap%20and%20citylist%5Bposition-gap%5D%5B'distance'%5D%3Ecurrentvalue%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20citylist%5Bposition%5D%3Dcitylist%5Bposition-gap%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20position%20%3D%20position-gap%0A%0A%20%20%20%20%20%20%20%20citylist%5Bposition%5D%3Dcurrentdata%0A%0Acitylist%20%3D%20%5B%0A%7B'id'%3A3,'toplace'%3A'city4','distance'%3A17%7D,%0A%7B'id'%3A8,'toplace'%3A'city9','distance'%3A20%7D,%0A%7B'id'%3A1,'toplace'%3A'city2','distance'%3A26%7D,%0A%7B'id'%3A5,'toplace'%3A'city6','distance'%3A31%7D,%0A%7B'id'%3A6,'toplace'%3A'city7','distance'%3A44%7D,%0A%7B'id'%3A0,'toplace'%3A'city1','distance'%3A54%7D,%0A%7B'id'%3A7,'toplace'%3A'city8','distance'%3A55%7D,%0A%7B'id'%3A4,'toplace'%3A'city5','distance'%3A77%7D,%0A%7B'id'%3A2,'toplace'%3A'city3','distance'%3A93%7D%0A%5D%0AshellSort%28citylist%29%0Aprint%28citylist%29&cumulative=false&curInstr=187&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=py3anaconda&rawInputLstJSON=%5B%5D&textReferences=false)，浏览器里会打开一个新的页面，里面有下面的代码段。

```python
def shellSort(citylist):
    sublistcount = len(citylist)//2
    while sublistcount > 0:

      for startposition in range(sublistcount):
        gapInsertionSort(citylist,startposition,sublistcount)

      print("After increments of size",sublistcount,
                                   "The list is",citylist)

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

## 开始做实体实验

### 用实体模型表达上面代码段的运行过程1，分别如下图所示。

![](/images/章5-理解基本的算法/Shell排序/00.jpg)
![](/images/章5-理解基本的算法/Shell排序/0.jpg)
![](/images/章5-理解基本的算法/Shell排序/1a1.jpg)

### 运行过程2如下图所示。

![](/images/章5-理解基本的算法/Shell排序/2a1.jpg)

### 运行过程3，分别如下图所示。

![](/images/章5-理解基本的算法/Shell排序/3a1.jpg)
![](/images/章5-理解基本的算法/Shell排序/3a2.jpg)
![](/images/章5-理解基本的算法/Shell排序/3a3.jpg)
![](/images/章5-理解基本的算法/Shell排序/3a4.jpg)

### 运行过程4如下图所示。

![](/images/章5-理解基本的算法/Shell排序/4a1.jpg)

### 运行过程5如下图所示。

![](/images/章5-理解基本的算法/Shell排序/5a1.jpg)

### 运行过程6如下图所示。

![](/images/章5-理解基本的算法/Shell排序/6a1.jpg)

### 运行过程7如下图所示。

![](/images/章5-理解基本的算法/Shell排序/7a1.jpg)

### 运行过程8如下图所示。

![](/images/章5-理解基本的算法/Shell排序/8a1.jpg)

