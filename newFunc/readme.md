## new 是 js 的关键字
   - new运算符：创建一个用户定义的对象类型的实例
   1. 构造函数上有 prototype 属性，值为对象
   2. 类 就可以由构造函数 + prototype 原型对象

   3. typeof 类型 instanceof 判断某个类型是否为实例

   - new 结果是一个新的对象，对象上需要具有构造函数里的属性
   2. 对象要有原型对象，指向构造函数的原型对象

   3. new Object 就是一个空对象 ：{ }
   4. new Array 就是一个空数组： []

    1. 空对象来了 new Object( )
    2. 如何将构造函数里的属性交给空对象呢？
       constructo 本身就是为他人服务的
       实力服务？ 还是为任何对象服务，都可以的
     ----------  函数内部的this 是由函数运行时的方式决定的 ----------
     new 一个 Otaku() 
     Otaku().call(obj,......); 普通函数
     call，apply 可以指定函数运行时 this，手动指向 obj

     3. constructor 构造函数 拥有 prototype 属性，在上面添加属性和方法，可以被实例引用到。
        对象上有__proto__属性 这个对象的原型对象是谁？对象也可以拿到原型对象上的属性或方法

        JS 的面向对象是基于原型的


     什么是对象？属性和方法的集合 
     构造函数 可以给些属性，其他的通过原型对象来拿到  obj.__proto__  Obj.__proto__ = Otaku.prototype
     如果不赋值就是 Object顶端


#### 普通函数和构造函数的区别
- 构造函数也是一个普通函数，创建方式和普通函数一样，但构造函数习惯上对 首字母大写
- 构造函数跟普通函数的区别在于： 调用的方式不一样
- 普通函数调用方式 直接；Person();
- 构造函数的调用方式：需要使用new 关键字来调用 new Person()
- 构造函数的执行流程  
  1. 立刻在堆内存中创建一个新对象
  2. 将新建的对象设置为函数中的 this
  3. 逐个执行函数中的代码
  4. 将新建的对象作为返回值
 - 普通函数例子： 因为没有返回值，所以为 undefined
 - 构造函数例子：构造函数会马上创建一个新对象，并将该新对象作为返回值返回
 - 用instanceof 可以检查一个对象是否是一个类的实例，是则返回true；
 所有对象都是Object 对象的后代，所以任何对象和Object 做instanceof都会返回true