# 用计数的Big-O的复杂度阶理解渐近表示法与常见复杂度类型

```python
a=5
b=6
c=10
for i in range(n):
   for j in range(n):
      x = i * i
      y = j * j
      z = i * j
for k in range(n):
   w = a*k + 45
   v = b*b
d = 33
```

```python
import time
from random import randrange

def findMin(alist):
    overallmin = alist[0]
    for i in alist:
        issmallest = True
        for j in alist:
            if i > j:
                issmallest = False
        if issmallest:
            overallmin = i
    return overallmin

# 测试基础用例（已注释）
print(findMin([5, 4, 2, 1, 0]))
print(findMin([0, 4, 2, 1, 5]))

# 性能测试
for listSize in range(1000, 10001, 1000):
    # 生成指定大小的随机数列表
    alist = [randrange(100000) for x in range(listSize)]
    
    start = time.time()
    print(findMin(alist))
    end = time.time()
    
    # 打印列表大小和耗时（秒）
    print("size: %d time: %f" % (listSize, end - start))
```

## 参考文献及资料

1. 维基百科
      - [Time complexity](https://en.wikipedia.org/wiki/Time_complexity) | [时间复杂度](https://zh.wikipedia.org/wiki/时间复杂度) 
      - [Big O notation](https://en.wikipedia.org/wiki/Big_O_notation) | [大O符号](https://zh.wikipedia.org/wiki/大O符号) 
	- [Computational complexity theory](https://en.wikipedia.org/wiki/Computational_complexity_theory) | [计算复杂性理论](https://zh.wikipedia.org/wiki/计算复杂性理论) 

2. [Big-O Notation](https://runestone.academy/ns/books/published/pythonds/AlgorithmAnalysis/BigONotation.html)