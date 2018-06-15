# 实验4: for循环

## 打开实验文件

单击右方的[在线代码段Url网址](http://pythontutor.com/visualize.html#code=var%20weight%20%3D%2063.5%3B%20%0A%0Afor%20%28%20var%20monthBeforeHP%3D0%3B%20monthBeforeHP%3C6%3B%20monthBeforeHP%2B%2B%29%7B%0A%20%20%20weight%20%3D%20weight%20-%201%3B%0A%20%20%20console.log%28%22%E6%88%91%E8%BF%99%E4%B8%AA%E6%9C%88%E7%9A%84%E4%BD%93%E9%87%8D%E9%99%8D%E4%BA%861%E5%85%AC%E6%96%A4%EF%BC%8C%E7%8E%B0%E5%9C%A8%E6%98%AF%22%2Bweight%2B%22%E5%85%AC%E6%96%A4%E3%80%82%22%29%3B%0A%7D%0A%0Afor%20%28%20var%20month%20%3D%201%3B%20month%20%3C%207%3B%20month%20%3D%20month%20%2B%201%29%7B%0A%20%20%20weight%20%3D%20weight%20%2B%200.25%3B%0A%20%20%20console.log%28%22%E6%88%91%E8%BF%99%E4%B8%AA%E6%9C%88%E7%9A%84%E4%BD%93%E9%87%8D%E5%8D%87%E4%BA%860.25%E5%85%AC%E6%96%A4%EF%BC%8C%E7%8E%B0%E5%9C%A8%E6%98%AF%22%2Bweight%2B%22%E5%85%AC%E6%96%A4%E3%80%82%22%29%3B%0A%7D&cumulative=false&heapPrimitives=nevernest&mode=edit&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false)，浏览器里会打开一个新的页面，里面有一段代码段，如下图所示。

![](/images/章1-快速掌握编程的基础知识/for循环/0.bmp)

其中一共有11行Javascript的代码：

- 第1行 创建变量weight，将其赋值为63.5（即:63.5公斤）；
- 第3-6行 创建一个for循环：
	- 第3行 循环开始前的执行语句：创建变量monthBeforeHP并将其赋值为0；判定运行循环的条件语句：变量monthBeforeHP的数值要小于6；循环被执行后要立即执行的语句：将变量monthBeforeHP赋值为现有的数值 + 1；
		- 第4行 将变量weight赋值为现有的数值 - 1；
		- 第5行 控制台输出："我这个月的体重降了1公斤，现在是"变量weight的值"公斤。"；
	- 第6行 for循环的结束符号“}”；
- 第8-11行 创建一个for循环：
	- 第8行 循环开始前的执行语句：创建变量month并将其赋值为1；判定运行循环的条件语句：变量month的数值要小于7；循环被执行后要立即执行的语句：将变量month赋值为现有的数值 + 1；
		- 第9行 将变量weight赋值为现有的数值 + 0.25；
		- 第10行 控制台输出："我这个月的体重升了0.25公斤，现在是"变量weight的值"公斤。"；
	- 第11行 for循环的结束符号“}”；

## 开始做

### 1.单击代码段右下方的“Live Programming Mode”。

![](/images/章1-快速掌握编程的基础知识/for循环/1a.bmp)

#### 你会看到：在浏览器里打开了一个新的实时调试代码的页面，右上方是代码段运行后的输出结果：“My BIM is 21.0.”，如下图所示。

![](/images/章1-快速掌握编程的基础知识/for循环/1b.bmp)

### 2.单击页面左下方的"<< First", 然后单击右方的“Forward”，你会看到一系列的执行结果，如下图所示。

![](/images/章1-快速掌握编程的基础知识/for循环/2b1.bmp)
![](/images/章1-快速掌握编程的基础知识/for循环/2b2.bmp)
![](/images/章1-快速掌握编程的基础知识/for循环/2b3.bmp)
![](/images/章1-快速掌握编程的基础知识/for循环/2b4.bmp)
![](/images/章1-快速掌握编程的基础知识/for循环/2b5.bmp)
![](/images/章1-快速掌握编程的基础知识/for循环/2b6.bmp)

### 3.把代码段第1行最右侧的数字修改为“80.5”（体重：80.5公斤），如下图所示。

![](/images/章1-快速掌握编程的基础知识/for循环/3a.bmp)

#### 你会看到：输出了一系列的执行结果，如下图所示。

![](/images/章1-快速掌握编程的基础知识/for循环/3b.bmp)

### 4.把代码段第1行最右侧的数字修改为“50.3”（体重：50.3公斤），如下图所示。

![](/images/章1-快速掌握编程的基础知识/for循环/4a.bmp)

#### 你会看到：输出了一系列的执行结果，如下图所示。

![](/images/章1-快速掌握编程的基础知识/for循环/4b.bmp)

### 5.把代码段第3行中的“monthBeforeHP=0”修改为“monthBeforeHP=-3”,如下图所示。

![](/images/章1-快速掌握编程的基础知识/for循环/5a.bmp)

#### 你会看到：输出了一系列的执行结果，如下图所示。

![](/images/章1-快速掌握编程的基础知识/for循环/5b.bmp)

### 6.把代码段第3行中的“monthBeforeHP=-3”修改为“monthBeforeHP=2”,如下图所示。

![](/images/章1-快速掌握编程的基础知识/for循环/6a.bmp)

#### 你会看到：输出了一系列的执行结果，如下图所示。

![](/images/章1-快速掌握编程的基础知识/for循环/6b.bmp)

### 7.把代码段第3行中的“monthBeforeHP<6”修改为“monthBeforeHP<5”,如下图所示。

![](/images/章1-快速掌握编程的基础知识/for循环/7a.bmp)

#### 你会看到：输出了一系列的执行结果，如下图所示。

![](/images/章1-快速掌握编程的基础知识/for循环/7b.bmp)

### 8.把代码段第8行中的“month = month + 1”修改为“month = month + 3”,如下图所示。

![](/images/章1-快速掌握编程的基础知识/for循环/8a.bmp)

#### 你会看到：输出了一系列的执行结果，如下图所示。

![](/images/章1-快速掌握编程的基础知识/for循环/8b.bmp)

### 9.把代码段第4行中的“weight = weight - 1;”修改为“weight = weight - 1.5;”,如下图所示。

![](/images/章1-快速掌握编程的基础知识/for循环/9a.bmp)

#### 你会看到：输出了一系列的执行结果，如下图所示。

![](/images/章1-快速掌握编程的基础知识/for循环/9b.bmp)

### 10.把代码段第9行中的“weight = weight + 0.25;”修改为“weight = weight + 1.2;”,如下图所示。

![](/images/章1-快速掌握编程的基础知识/for循环/10a.bmp)

#### 你会看到：输出了一系列的执行结果，如下图所示。

![](/images/章1-快速掌握编程的基础知识/for循环/10b.bmp)

### 11.把代码段第5行“console.log("我这个月的体重降了1公斤，现在是"+weight+"公斤。");”修改为“console.log("我这个月的体重降了1.5公斤，现在是"+weight+"公斤。");”,如下图所示。

![](/images/章1-快速掌握编程的基础知识/for循环/11a.bmp)

#### 你会看到：输出了一系列的执行结果，如下图所示。

![](/images/章1-快速掌握编程的基础知识/for循环/11b.bmp)

### 12.把代码段第10行“console.log("我这个月的体重升了0.2公斤，现在是"+weight+"公斤。");”修改为“console.log("我这个月的体重升了1.2公斤，现在是"+weight+"公斤。");");”,如下图所示。

![](/images/章1-快速掌握编程的基础知识/for循环/12a.bmp)

#### 你会看到：输出了一系列的执行结果，如下图所示。

![](/images/章1-快速掌握编程的基础知识/for循环/12b.bmp)

### 13.把代码段第3行“monthBeforeHP++”修改为“vmonthBeforeHP+”,如下图所示。

![](/images/章1-快速掌握编程的基础知识/for循环/13a.bmp)

#### 你会看到：程序出现了错误提示：“SyntaxError: Unexpected token )”,如下图所示。

![](/images/章1-快速掌握编程的基础知识/for循环/13b.bmp)

### 14.把代码段第3行“monthBeforeHP=2;”修改为“monthBeforeHP=2”,如下图所示。

![](/images/章1-快速掌握编程的基础知识/for循环/14a.bmp)

#### 你会看到：程序出现了错误提示：“SyntaxError: Unexpected identifier”,如下图所示。

![](/images/章1-快速掌握编程的基础知识/for循环/14b.bmp)

### 15.把代码段第3行“for ( var monthBeforeHP=2”修改为“for  var monthBeforeHP=2”,如下图所示。

![](/images/章1-快速掌握编程的基础知识/for循环/15a.bmp)

#### 你会看到：程序出现了错误提示：“SyntaxError: Unexpected token var”,如下图所示。

![](/images/章1-快速掌握编程的基础知识/for循环/15b.bmp)



