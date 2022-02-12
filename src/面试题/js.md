## JS 数据类型有哪些？
boolean, string, number, object, symbol, undefined, null, bigInt 一共八种。
为什么需要 bigInt?
用来表示 js 表示不了的数字，只支持整数，不支持小树。
因为 js 中的所有数字，实际存储的都是一个 双精度的浮点数，最高的1位存储符号，其次11是指数，剩下的52位存储的是有效数字，所以 js 能表示的数字范围是 正负 2 的52次方。

## 原型链是什么？说一说原型链。
举个例子：

有一个对象 x = {}, 它有一个隐藏属性，叫 __proto__, 这个隐藏属性，指向 Object.prototype，可以得出：
    
    x.__proto__ === Object.prototype

这是原型的概念。

现在有另外一个 数组 Y = [], 它也有一个隐藏属性 __proto__, 这个隐藏属性，指向 Array.prototype, 可以得出：

    Y.__proto__ === Array.prototype

然后Array 也有一个隐藏属性，指向 Object.prototype 所以可以得出：

    Array.__proto__ === Object.prototype

所以，最终可以得出：

    Y.__proto__ === Array.prototype === Object.prototype

这就是原型链。

## 如何创建原型链。

直接修改对象的隐藏属性指向，比如：

    声明一个函数 function F () {}
    Y = Object.create(F)
    Y.__proto__ === F.prototype

那么就会形成这样一个原型链：

    Y.__proto__ === F.prototype === Object.prototype

这样就创建了一个新的链条，新的原型链。

## 原型链解决了什么问题？

    在没有 Class 的情况下，实现了继承。

## 原型链缺点
    与 class 相比，写起来比较复杂，并且不像 java 那样有私有属性。
    在 父对象上声明 __ 开头这样的属性值，子对象也是能够访问的，只是默认约定不访问 __ 开头的属性。 

