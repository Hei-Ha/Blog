*##* 实现一个 instanceof 方法：

**instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。**

实现代码：

```javascript
const instanceof2 = (target, origin) => {
    if (typeof target !== "object" || target === null) return false; // 如果不是 object直接返回false
    var proto = Object.getPrototypeOf(target); // 获取 target 的原型对象
    while (proto) {
        if (proto === origin.prototype) { // 如果 target 的原型是 origin.prototype，则返回 true
            return true;
        }
        proto = Object.getPrototypeOf(proto); // 如果不是，则取 proto 的原型，接续循环比较，直到原型不存在，返回 false
    }
    return false;
}
```

