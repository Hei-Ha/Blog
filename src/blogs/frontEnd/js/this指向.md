## this 指向


### this 绑定共有四种：
分别是：
1. 默认绑定
2. 隐式绑定
3. 显示绑定
4. new 绑定
### 优先级:
由高到低： new > 显示绑定 > 隐式绑定 > 默认绑定

### 逐个介绍：
#### 1. 默认绑定
*可以把这条规则看作是无法应用其他规则时候的默认规则。*
```js
function foo () {
    console.log(this.a)
}
var a = 2
foo() // 2
```
在调用 foo 的时候，默认将 this 指向全局对象。

**但是在严格模式中，this 将会被绑定成 undefined, 因此在严格模式中，上述代码将会报错。**

#### 2. 隐式绑定
```js
function foo() {
    console.log(this.a)
}
var obj = {
    a: 2,
    foo: foo
}
console.log(obj.foo()) // 2
```
当函数 foo 被调用的时候，他的前面加上了对 obj 的引用，这就是隐式绑定，隐式绑定会把函数调用中的 this 绑定到这个上下文对象。即把 this 绑定到 obj 。

#### 3. 显式绑定
使用 call, apply, bind 绑定

#### 4. new 绑定
```js
function foo(a) {
    this.a = a
}
var bar = new foo(2)
console.log(bar.a)
```
使用 new 来调用 foo(...) 时，我们会创造一个新对象，并把它绑定到 foo(...)调用中的 this 上， new 是最后一种可以影响函数调用时候 this 绑定行为的方法。
