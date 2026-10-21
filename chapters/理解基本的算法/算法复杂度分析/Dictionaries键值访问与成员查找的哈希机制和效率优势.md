# Dictionaries键值访问与成员查找的哈希机制和效率优势

```python
import timeit
import random

for i in range(10000,1000001,20000):
    t = timeit.Timer("random.randrange(%d) in x"%i,
                     "from __main__ import random,x")
    x = list(range(i))
    lst_time = t.timeit(number=1000)
    x = {j:None for j in range(i)}
    d_time = t.timeit(number=1000)
    print("%d,%10.3f,%10.3f" % (i, lst_time, d_time))
```

## 参考文献及资料

1. 维基百科
	- [Associative array](https://en.wikipedia.org/wiki/Associative_array) | [关联数组](https://zh.wikipedia.org/wiki/关联数组) 

2. [Dictionaries](https://runestone.academy/ns/books/published/pythonds/AlgorithmAnalysis/Dictionaries.html) 
