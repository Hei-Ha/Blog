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

## this 指向问题

如果是给定题目，问输出，则参考这篇文章，借用转换代码的方法，找出最后一次执行的方法，确定 this 是什么，即可得到输出内容。

参考《你不知道的 javascript 》中，this 指向的那一章。
1、创建临时对象
2、绑定 临时对象原型 （赋值新对象的共有属性）
3、指定 this
4、执行构造方法 （赋值新对象的私有属性）
5、返回临时对象

## new 做了什么


## 立即执行函数
 立即执行函数，就是声明一个匿名函数，然后立即执行它。

    如何写一个立即执行函数：
```javascript
(function() {
    console.log('hello')
}())
```
匿名函数的作用： 在 ES6 之前，声明一个匿名函数。
优点：兼容性好。
缺点，语法不好看。
如何解决缺点：使用 ES6 的 let 

## 什么是 js 的闭包。
闭包是一种语法特性。

    闭包 = 函数 + 自由变量

```javascript
{
    let a = 1
    function test() { // 这个函数访问了它外部的自由变量（不是全局变量），这个函数，和这个自由变量，就形成了一个闭包。
        a = a + 1
    }

    // 这里的自由变量不能是全局变量，因为如果是全局变量，在哪里都能访问，所以没办法区分是闭包提供的访问外部变量的能力，还是全局变量提供的能力。
}
```

一般将上面的代码防在非全局环境里面，即这样写：
```javascript
var test = function () {
    let a = 2
    const res = () => {
        a = a + 1
    }
    return res
}
// 这里的 a 和函数 res 形成了闭包
```

闭包有什么作用：
1、避免污染全局环境。
2、提供对局部变量的间接访问。
3、维持变量，避免被垃圾回收。

优点：简单、好用。
缺点，闭包使用不当，会导致内存泄漏。
解决办法：少用闭包，慎用闭包。


手写代码题：
## 如何实现一个类 
```javascript
ES5 
function Dog1 (name) {
    this.name = name
    this.eyes = 2
}

Dog.prototype.say = function () {
    console.log("汪")
}
Dog.prototype.run = function() {
    conslle.log('跑')
}

const dog1 = new Dog1('第一个')

ES6
class Dog2 {
    constructor(name) {
        this.name = name
        this.eyes = 2
    }
    
    say() {
        console.log('汪')
    }
    run () {
        console.log('跑')
    }
}

const dog2 = new Dog2('第二个')
```

## 如何实现继承
不用 Class
```javascript


function Animal(legs) {
    this.legsNumber = legs
}

// Dog 继承 Animal 
function Dog(name) { 
    Animal.call(this, 2) // Dog 继承 Animal 的属性
    this.name = name
}

let emptyAnimal = function() {} // 生命一个空的函数，用来替换 Animal
emptyAnimal.prototype = Animal.prototype // 将 Animal 函数体中的代码替换掉，因为在 Animal.call(this. 2) 中已经执行过了。 
Dog.prototype = new emptyAnimal() // 将 emptyAnimal 的共有属性，赋值给 Dog，即形成原型链

Dog.prototype.say = function () {
    console.log(this.name)
}
```
使用 Class
```javascript
class Animal {
    constructor(legs) {
        this.legsNumber = legs
    }
    
    run() {
        console.log('run')
    }
}

class Dog extends Animal {
    constructor(name) {
        super(2)
        this.name = name
    }
    say() {
        console.log('say')
    }
}
```

## 手写 防抖、节流
防抖：

    使用场景：比如，当需要根据窗口大小调整页面内容的时候，如果用户不断的放大缩小页面，会导致不停的计算。
            使用防抖函数，只有当用户停止调整页面窗口的时候，再去计算。
```javascript
function goBack() {
    console.log('回到泉水')
}

const timer = null
function B() {
    if (timer) { // 如果回城被打断或者再次按回城键，则需要再次调用回城方法，从 0 开始回城
        clearTimeout(timer)
    }
    timer = setTimeout(() => {
        goBack()
        timer = null
    }, 3000)
}

// 防抖升级版：
const debounce = (fn, time) => {
    const timer = null
    return () => {
        if (timer) {
            clearTimeout(timer)
        } else {
            timer = setTimeout(() => {
                fn()
                timer = null
            }, time)
        }
    }
}

// 使用：
const Back = debounce(B, 3000)
```
节流：技能 CD

    使用场景：页面上某个按钮，3秒内只能点击一次。类似这样的功能的时候，需要用到节流。

```javascript
function shanXian() {
    console.log('向指定方向闪现一段距离')
}
const isCD = false
const timer = null
function D() {
    if (isCD) { return }
    shanXian()
    isCD = true
    timer = setTimeout(() => {
        isCD = false
        timer = null
    }, 3000)
}

// 节流升级版：
// 能够将任意函数改为截流函数：
const throttle = (fn, time) => {
    const isCD = false
    const timer = null
    return () => {
        if (isCD) { return }
        fn()
        isCD = true
        timer = setTimeout(() => {
            isCD = false
            timer = null
        }, time)
    }
}
```

## 手写发布订阅
```javascript

const eventBus = {
    map: {},
    // 订阅事件
    on: (name, fn) => {
        eventBus.map[name] = eventBus.map[name] || []
        eventBus.map[name].push(fn)
    },
    emit: (name, params) => {
        if (!eventBus.map[name]) { return }
        eventBus.map((item) => {
            item(params)
        })
    },
    off: (name, fn) => {
        if (!eventBus.map[name]) { return }
        const index = eventBus.map[name].indexOf(fn)
        if (index < 0) { return }
        eventBus.map[name].splice(index, 1)
    }
}

```
## 手写 AJax 
核心代码：
```javascript
var XMLRequest = new XMLHTTPRequest()
XMLRequest.open('GET', '/xxx?', true) // 第三个参数：是否为异步
// 如果是 post 请求，必须要加上请求头。setRequestHeader 必须在 open 之后，send 之前
// XMLRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
XMLRequest.onreadystatechange = function () {
    if (XMLRequest.readyState === 4) {
        if (XMLRequest.status >= 200 && XMLRequest.status < 300 || XMLRequest.status === 304) {
            success(XMLRequest)
        } else {
            error(XMLRequest)
        }
    }
}
XMLRequest.send('{name: "zhangsan"}')
```
## 手写 Promise.all
```javascript

Promise.all2 = (arrayList) => {
    return new Promise((resolve, reject) => {
        const result = []
        let count = 0
        arrayList.map((item, index) => {
            item.then((data) => {
                result[index] = data
                count = count + 1
                if (count === arrayList.length - 1) {
                    resolve(result)
                }
            }, (reason) => {
                reject(reason)
            })
        })
    })
}

```

## 手写深拷贝

    以下几种方法都可以实现深拷贝，各有各的优缺点，

第一种：
利用 JSON 方法
```javascript
// 假定 a 是要拷贝的对象
const res = JSON.parse(JSON.stringify(a))
```
这种方法的缺点：
1、不支持拷贝正则，Date，undefined,函数
2、不支持环形引用

第二种：
使用递归
1、递归
2、判断类型，不用类型用不同的方法拷贝
3、检查环形引用
4、不拷贝继承过来的属性
```javascript
const deepClone = (param, mapData) => {
    if (!mapData) {
        // 将 mapData 映射作为参数传进函数体内，防止多次深拷贝创建的 mapData 相互影响，
        mapData = new Map() 
    }
    if (param instanceof Object) { // 如果 params 是对象需要单独处理
        if (mapData.get(param)) {
            return mapData.get(param)
        }
        let result = undefined
        if (param instanceof Function) { // 如果是函数
            if (param.prototype) { // 如果是普通函数
                result = function () { param.apply(this, arguments) }
            } else { // 不是普通函数，是箭头函数（箭头函数没有 prototye 属性）
                result = () => { param.call(undefined, ...arguments) }
            }
        } else if (param instanceof Array) { // 如果是数组
            result = []
        } else if (param instanceof Date) { // 如果是日期
            result = new Date(param - 0) // 利用时间戳去重新生成一个日期
        }else if (param instanceof RegExp) { // 如果是正则
            // result = new RegExp(param)
            result = new RegExp(param.source, a.flags)
        } else { // 其他则视为普通对象
            result = {}
        }
        // 在这里利用 mapData 去存储已经拷贝过的值，用来避免遇到 环形引用。
        mapData.set(param, result)
        
        // 这里将其他属性，依次遍历重新拷贝一遍
        // const keys = Object.keys(param)
        for(let key in param) {
            if (param.hasOwnProperty(key)) { // 只遍历 param 自己的可枚举属性，不遍历继承过来的属性
                result[key] = deepClone(param[key], mapData)
            }
        }
        return result
    } else { // param 是基本数据类型
        return param
    }
}
```
```javascript
const a = {
    one: [1,2,3,4, [9,8,7]],
    two: function () {
        console.log('two')
    },
    three: new Date(),
    four: () => {
        console.log('箭头函数')
    }
}
```