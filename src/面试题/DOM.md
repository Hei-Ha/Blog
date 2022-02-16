## DOM 事件模型
指一个事件触发时，必须要经过两个阶段，先捕获，再冒泡
捕获阶段：父 到 子
冒泡阶段：子 到 父

addEventListener 的第三个参数可以指定在哪个阶段触发事件 （true： 指在捕获阶段，false 指在冒泡阶段）
可以使用 event.stopPropagation() 来组织捕获或者冒泡

## 手写事件委托
    
    MDN 的解释：
    Event 接口的只读属性 currentTarget 表示的，标识是当事件沿着 DOM 触发时事件的当前目标。
    它总是指向事件绑定的元素，而 Event.target 则是事件触发的元素。
```javascript
ul.addEventListener('click', function(e) {
    if (e.target.tagName.toLowerCase() === 'li') {
        fn() // 执行某个函数
    }
})
```
完善版：
```javascript
function weiTuo(element, eventType, selector, fn) {
    element.addEventListener(eventType, e => {
        let el = e.target // el 表示当前点击的元素
        while(!el.matches(selector)) { // 如果所选的元素，不是 li, 则判断当前所选元素的父节点，是不是 li 直到判断到 ul,如果还没有，则说明当前点击的元素，不是要事件委托的元素
            if (element === el) {
                el = null
                break
            }
            el = el.parentNode
        }
        el && fn.call(el. e, el)
    })
    return element
}

weiTuo(a, 'click', 'li', A)

```

事件委托：
好处：
1、节省监听器，性能好
2、动态监听，针对新加的Dom 元素，不用新加事件监听器
缺点：
调试的时候，不容易找到是哪个事件。
