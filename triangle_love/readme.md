三角恋 
三者？第一者： 构造函数 Constructor
      第二者： prototype 原型
      第三者： 实例 instance 

JS 没有类，只有对象，都是通过原型来拿到的

通过构造函数Person 生成了person 这个实例  可用 instanceof 返回true
同时 我们在Person 的原型 Person.prototype 定义了getName 方法  （构造函数相当于火车头 原型相当于火车的尾巴）

构造函数 运行的， new Person() this-> 新的实例，空对象 Person {} .name
实例怎么拿到原型对象的方法或属性？
 1. 任何对象都有__proto__私有属性，这个对象的出处是哪？实例和类之间没有血缘关系，__proto__
 2. 构造函数有prototype属性
 3. 原型对象上有 constructor 属性指向构造函数

js 面向对象是基于原型的

恋（原型链）