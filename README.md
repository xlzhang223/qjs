<h1>An Object Lifetime Tool On QuickJS</h1>

<h2>编译项目</h2>
`make`

<h2>运行脚本</h2>

通过qjs允许一个js脚本： `./qjs xlz.js`

<h2>Debug</h2>

输出bytecode：
代码中修改此处的宏定义，可以输出想看的bytecode，如：
```
/* dump the bytecode of the compiled functions: combination of bits
   1: dump pass 3 final byte code
   2: dump pass 2 code
   4: dump pass 1 code
   8: dump stdlib functions
  16: dump bytecode in hex
  32: dump line number table
 */
#define DUMP_BYTECODE  (3)
//输出最终解释执行的bytecode，此外还有很多debug的define可以利用帮助后续开发。
```

输出该项目增加的检测行为（暂时不全？后续完善）：
`#define DEV`

输出配置检测的heap大小：

假设检测10000000字节：`./qjs xlz.js mmap_size 10000000`


如何适当修改gc的间隔阈值帮助实验：


<h2>Licensing</h2>

QuickJS is released under
the <a href="https://opensource.org/licenses/MIT">MIT license</a>.
<p>
Unless otherwise specified, the QuickJS sources are copyright Fabrice
Bellard and Charlie Gordon.

<hr>
Fabrice Bellard - <a href="https://bellard.org">https://bellard.org/</a>
