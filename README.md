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

<h2>部署到Android</h2>  

### Step1. 下载交叉编译工具
Android NDK下载地址：https://developer.android.google.cn/ndk/downloads?hl=zh-cn  

下载对应平台的工具，之后解压到 `${android_ndk_dir}` ，无需编译。
### Step2. 修改QuickJS中的Makefile文件
附件修改的是原版QuickJS的Makefile文件，修改的地方已经使用 #haohao 标注供参考。具体修改方案
如下：
* CROSS_PREFIX
  ```CROSS_PREFIX=${android_ndk_dir}/toolchains/llvm/prebuilt/linux-x86_64/bin/```
* CC  
  ```CC=$(CROSS_PREFIX)aarch64-linux-android29-clang```
* AR  
  `AR=$(CROSS_PREFIX)llvm-ar`
* LIBS  
  `LIBS+=-ldl -lc`  
Android NDK中不提供 libpthread 库，相关功能使用 libc 库代替。
### Step3. 编译
```make```

<h2>Licensing</h2>

QuickJS is released under
the <a href="https://opensource.org/licenses/MIT">MIT license</a>.
<p>
Unless otherwise specified, the QuickJS sources are copyright Fabrice
Bellard and Charlie Gordon.

<hr>
Fabrice Bellard - <a href="https://bellard.org">https://bellard.org/</a>
