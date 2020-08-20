# RSA加密和解密

## 打开实验文件

单击右方的[在线RSA加密和解密的原理](https://codepen.io/quanbinn/pen/WNwxzyq), 浏览器里会打开一个新的页面，里面有下面的代码段，如下图所示。

```javascript
alert("以1个例子讲解公钥和密钥对生成的步骤如下：");
alert("step 1: 服务器随机选择两个不相等的质数。");
alert("例如生成了：p = 61, q = 53");

alert("step 2: 服务器计算两个质数p和q的乘积n。");
alert("例如 n= p * q = 61*53 = 3222");

alert("step 3: 服务器计算出乘积n的欧拉函数φ(n)。");
alert("例如φ(n) = (p-1)(q-1)=(61-1)(53-1)=60*52=3120");

alert("step 4: 服务器随机选择一个整数e，条件是1< e < φ(n)，且e与φ(n) 互质。");
alert("例如：随机选择了17。");

alert("step 5: 服务器计算出e对于φ(n)的模反元素d。");
alert("即就是指有一个整数d，可以使得ed被φ(n)除的余数为1。即：ed ≡ 1 (mod φ(n))");
alert("推导过程如下： ed - 1 = kφ(n) -> ex + φ(n)y = 1 ");
alert("已知 e=17, φ(n)=3120 -> 17x + 3120y = 1 ");
alert("服务器算出一组整数解为(x,y)=(2753,-15)，即 d=2753");

alert("step 6: 服务器封装成1个公钥和1个私钥。");
alert("公钥:(n,e) ->(3233,17)");
alert("私钥:(n,d) ->(3233,2753)");

alert("step 6: 服务器封装成1个公钥和1个私钥。");
alert("公钥:(n,e) ->(3233,17)");
alert("私钥:(n,d) ->(3233,2753)");

alert("以1个例子讲解用公钥加密的步骤如下：（使用上面服务器生成的公钥）");
alert("step 1: client计算出向server发送信息m的整数值（Capital letter A的ASCII code为65）即：m=65。");
alert("step 2: client计算出m用公钥加密后的值。 “加密”公式为：m的e次方 ≡ c (mod n)");
alert("client的公钥是 (3233, 17)，因为client的m=65，那么可以算出下面的等式：65的17次方 ≡ 2790 (mod 3233)");
alert("step 3: client把整除的余数c=2790发送给服务器");

alert("以1个例子讲解用私钥解密的步骤如下：（使用上面服务器生成的密钥）");
alert("step 1: server收到client发来的信息2790后，用自己的私钥(3233, 2753) 进行解密");
alert("step 2: 计算公式为c的d次方 ≡ m (mod n)，即：2790的2753次方 ≡ 65 (mod 3233),得出余数m=65,即加密前的原文就是65");

```

## 参考文献及资料

1. 维基百科
	- [RSA (cryptosystem)](https://en.wikipedia.org/wiki/RSA_(cryptosystem)) 
	- [Diffie–Hellman key exchange](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange) 
	- [**ASN.1**](https://en.wikipedia.org/wiki/ASN.1) 
	- [Prime number](https://en.wikipedia.org/wiki/Prime_number) 
	- [*ASCII*](https://en.wikipedia.org/wiki/ASCII) 
	- [*Unicode*](https://en.wikipedia.org/wiki/Unicode) 
	- [*UTF-8*](https://en.wikipedia.org/wiki/UTF-8) 

2. [**RSA算法原理（一）**](https://www.ruanyifeng.com/blog/2013/06/rsa_algorithm_part_one.html) 
3. [**RSA算法原理（二）**](https://www.ruanyifeng.com/blog/2013/07/rsa_algorithm_part_two.html) 

4. [在线体验RSA加密/解密](https://oktools.net/rsa) 

5. [UTF-8编码转换工具](http://tools.jb51.net/transcoding/convutf) 
