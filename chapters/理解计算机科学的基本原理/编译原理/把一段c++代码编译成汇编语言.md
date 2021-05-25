# 把一段c++代码编译成汇编语言

单击右方的[在线代码段Url网址](http://www.pythontutor.com/cpp.html#code=int%20main%28%29%20%7B%0A%20%20int%20*x%20%3D%20new%20int%3B%0A%20%20int%20*x_array%20%3D%20new%20int%5B10%5D%3B%0A%0A%20%20x_array%5B1%5D%20%3D%201%3B%0A%20%20x_array%5B3%5D%20%3D%203%3B%0A%20%20x_array%5B5%5D%20%3D%205%3B%0A%0A%20%20delete%20x%3B%0A%20%20delete%5B%5D%20x_array%3B%0A%20%20return%200%3B%0A%7D&curInstr=0&mode=display&origin=opt-frontend.js&py=cpp_g%2B%2B9.3.0&rawInputLstJSON=%5B%5D)，浏览器里会打开一个新的页面，里面有下面的代码段。

```c++
int main() {
  int *x = new int;
  int *x_array = new int[10];

  x_array[1] = 1;
  x_array[3] = 3;
  x_array[5] = 5;

  delete x;
  delete[] x_array;
  return 0;
}
```

## 打开实验文件

- 单击右方的[COMPILER EXPLORER](https://godbolt.org/)，浏览器里会显示C++的编译环境。
- 把下面的这段c++代码段拷贝到页面中部最左边的空白栏中，然后单击“+”下拉选项中的Compiler, 会看到编译后的汇编语言。

```c++
int main() {
  int *x = new int;
  int *x_array = new int[10];

  x_array[1] = 1;
  x_array[3] = 3;
  x_array[5] = 5;

  delete x;
  delete[] x_array;
  return 0;
}
```

```c++
main:
        push    rbp
        mov     rbp, rsp
        sub     rsp, 16
        mov     edi, 4
        call    operator new(unsigned long)
        mov     QWORD PTR [rbp-8], rax
        mov     edi, 40
        call    operator new[](unsigned long)
        mov     QWORD PTR [rbp-16], rax
        mov     rax, QWORD PTR [rbp-16]
        add     rax, 4
        mov     DWORD PTR [rax], 1
        mov     rax, QWORD PTR [rbp-16]
        add     rax, 12
        mov     DWORD PTR [rax], 3
        mov     rax, QWORD PTR [rbp-16]
        add     rax, 20
        mov     DWORD PTR [rax], 5
        mov     rax, QWORD PTR [rbp-8]
        test    rax, rax
        je      .L2
        mov     esi, 4
        mov     rdi, rax
        call    operator delete(void*, unsigned long)
.L2:
        cmp     QWORD PTR [rbp-16], 0
        je      .L3
        mov     rax, QWORD PTR [rbp-16]
        mov     rdi, rax
        call    operator delete[](void*)
.L3:
        mov     eax, 0
        leave
        ret
```

## 参考文献及资料

1. [**COMPILER EXPLORER**](https://godbolt.org/)
2. [**Compile and Execute Assembly Online (Yasm v1.3.0)**](https://www.tutorialspoint.com/compile_yasm_online.php)



