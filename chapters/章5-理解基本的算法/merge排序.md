# 实验: merge排序

## 打开实验文件

单击右方的[在线代码段Url网址](http://www.pythontutor.com/visualize.html#code=def%20mergeSort%28citylist%29%3A%0A%20%20%20%20print%28%22Splitting%20%22,citylist%29%0A%20%20%20%20if%20len%28citylist%29%3E1%3A%0A%20%20%20%20%20%20%20%20mid%20%3D%20len%28citylist%29//2%0A%20%20%20%20%20%20%20%20lefthalf%20%3D%20citylist%5B%3Amid%5D%0A%20%20%20%20%20%20%20%20righthalf%20%3D%20citylist%5Bmid%3A%5D%0A%0A%20%20%20%20%20%20%20%20mergeSort%28lefthalf%29%0A%20%20%20%20%20%20%20%20mergeSort%28righthalf%29%0A%0A%20%20%20%20%20%20%20%20i%3D0%0A%20%20%20%20%20%20%20%20j%3D0%0A%20%20%20%20%20%20%20%20k%3D0%0A%20%20%20%20%20%20%20%20while%20i%20%3C%20len%28lefthalf%29%20and%20j%20%3C%20len%28righthalf%29%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20lefthalf%5Bi%5D%5B'distance'%5D%20%3C%3D%20righthalf%5Bj%5D%5B'distance'%5D%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20citylist%5Bk%5D%5B'distance'%5D%3Dlefthalf%5Bi%5D%5B'distance'%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20i%3Di%2B1%0A%20%20%20%20%20%20%20%20%20%20%20%20else%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20citylist%5Bk%5D%3Drighthalf%5Bj%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20j%3Dj%2B1%0A%20%20%20%20%20%20%20%20%20%20%20%20k%3Dk%2B1%0A%0A%20%20%20%20%20%20%20%20while%20i%20%3C%20len%28lefthalf%29%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20citylist%5Bk%5D%3Dlefthalf%5Bi%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20i%3Di%2B1%0A%20%20%20%20%20%20%20%20%20%20%20%20k%3Dk%2B1%0A%0A%20%20%20%20%20%20%20%20while%20j%20%3C%20len%28righthalf%29%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20citylist%5Bk%5D%3Drighthalf%5Bj%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20j%3Dj%2B1%0A%20%20%20%20%20%20%20%20%20%20%20%20k%3Dk%2B1%0A%20%20%20%20print%28%22Merging%20%22,citylist%29%0A%0Acitylist%20%3D%20%5B%0A%7B'id'%3A3,'toplace'%3A'city4','distance'%3A17%7D,%0A%7B'id'%3A8,'toplace'%3A'city9','distance'%3A20%7D,%0A%7B'id'%3A1,'toplace'%3A'city2','distance'%3A26%7D,%0A%7B'id'%3A5,'toplace'%3A'city6','distance'%3A31%7D,%0A%7B'id'%3A6,'toplace'%3A'city7','distance'%3A44%7D,%0A%7B'id'%3A0,'toplace'%3A'city1','distance'%3A54%7D,%0A%7B'id'%3A7,'toplace'%3A'city8','distance'%3A55%7D,%0A%7B'id'%3A4,'toplace'%3A'city5','distance'%3A77%7D,%0A%7B'id'%3A2,'toplace'%3A'city3','distance'%3A93%7D%0A%5D%0AmergeSort%28citylist%29%0Aprint%28citylist%29&cumulative=false&curInstr=314&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=py3anaconda&rawInputLstJSON=%5B%5D&textReferences=false)，浏览器里会打开一个新的页面，里面有下面的代码段。

```python
def mergeSort(citylist):
    print("Splitting ",citylist)
    if len(citylist)>1:
        mid = len(citylist)//2
        lefthalf = citylist[:mid]
        righthalf = citylist[mid:]

        mergeSort(lefthalf)
        mergeSort(righthalf)

        i=0
        j=0
        k=0
        while i < len(lefthalf) and j < len(righthalf):
            if lefthalf[i]['distance'] <= righthalf[j]['distance']:
                citylist[k]['distance']=lefthalf[i]['distance']
                i=i+1
            else:
                citylist[k]=righthalf[j]
                j=j+1
            k=k+1

        while i < len(lefthalf):
            citylist[k]=lefthalf[i]
            i=i+1
            k=k+1

        while j < len(righthalf):
            citylist[k]=righthalf[j]
            j=j+1
            k=k+1
    print("Merging ",citylist)

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
mergeSort(citylist)
print(citylist)
```
