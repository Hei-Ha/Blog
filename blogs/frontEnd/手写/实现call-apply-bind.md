## 手写：call、apply、bind
```js
var year = 2020
    obj = {
        year: 2021
    }
    const getDate = function (month, day) {
        return `${this.year}-${month}-${day}`
    }
    console.log(getDate.call(null, 3, 1))      // 2020-3-1
    console.log(getDate.call(obj, 5, 2))       // 2021-5-2
    console.log(getDate.apply(obj, [6, 8]))    // 2021-6-8
    console.log(getDate.bind(obj)(7, 9))       // 2021-7-9
```

### 相同点：
**三者都可以改变 this 指向**

### 不同点：
1. call 和 apply 是立即执行的，bind 返回一个函数，并不会执行，一般在后面跟上 () 来立即执行返回的函数。
2. 传参方式不同
call 可以传多个参数，第一个参数是要绑定的 this 对象，剩下的参数由逗号隔开，依次传入getDate 函数中
apply 只能有两个参数，第一个参数是要绑定的 this 对象，第二个参数是一个数组，数组中的元素作为 getDate 函数的参数
bind 也可以传递多个参数，参数规则类似 call，第一个参数为要绑定的 this 对象，后面的参数传递给要执行函数作为参数
由于bind 返回的是一个函数，所以需要在后面加上 () 去执行返回的函数， 此()里面也可以加参数。

### 手写代码：
#### call
```js
Function.prototype.call2 = function(context, ...args) {
        // 此时的 this 指的是 getDate 这个函数，
        context = (context === undefined || context === null) ? window : context
        context.__fn = this // 把 this 存起来，以备后面调用
        let result = context.__fn(...args)
        delete context.__fn // 删除自己添加的属性
        return result
    }
    // 调用 call2
    console.log(getDate.call2(obj, 5, 2)) // 2021-9-2
```

#### apply
```js
Function.prototype.apply2 = function(context, args) {
        context = (context === undefined || context === null) ? window : context
        context.__fn = this
        let result = context.__fn(...args)
        delete context.__fn
        return result
    }
    // 调用 apply2
    console.log(getDate.apply2(obj, [10, 1])) // 2021-10-1
```

#### bind
```js
Function.prototype.bind2 = function (context, ...args1) {
        context = (context === undefined || context === null) ? window : context
        let self = this
        return function (...args2) {
            context.__fn = self
            let result = context.__fn(...[...args1, ...args2])
            delete context.__fn
            return result
        }
    }
// 调用 bind2
    console.log(getDate.bind2(obj)(1, 9)) // 2021-1-9
```
