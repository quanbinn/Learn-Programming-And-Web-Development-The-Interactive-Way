# 使用浏览器的debugging工具看到javascript运行时的多个scope

## 打开实验文件

单击右方的[在线代码段Url网址](http://www.pythontutor.com/live.html#code=function%20a%28%29%20%7B%0A%20%20%20%20%20%20%20%20function%20b%28%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20let%20bb%20%3D%20234%0A%20%20%20%20%20%20%20%20%20%20%20%20aa%20%3D%200%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20let%20aa%20%3D%20123%3B%0A%0A%20%20%20%20b%28%29%3B%0A%0A%20%20%20%20console.log%28a%29%3B%0A%7D%0A%0Alet%20glob%20%3D%20100%3B%20%0A%0Adebugger%0A%0Aa%28%29%3B&cumulative=false&curInstr=10&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false)，浏览器里会打开一个新的页面，里面有一段代码段，如下图所示。

```javascript
function a() {
        function b() {
            let bb = 234
            aa = 0;
        }
    let aa = 123;

    b();

    console.log(a);
}

let glob = 100; 

debugger

a();
```

## 参考文献及资料

1. [**JavaScript 作用域（Scope）详解**](https://www.cnblogs.com/forever-Ys/p/10091422.html)
