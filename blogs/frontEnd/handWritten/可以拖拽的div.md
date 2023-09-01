## 手写可拖拽的 Div
思路： 监听鼠标按下事件，给 div 的坐标赋值 监听鼠标移动事件，获取鼠标移动的偏移量，在div 起始位置的坐标上加上鼠标的偏移量。就是移动后的div 坐标。

```javascript
let div = document.getElementsByTagName('div')[0]
let toMove = false
let position = null
div.addEventListener('mousedown', function(e) {
    toMove = true // div 正在移动
    position = [e.clientX, e.clientY]
})


document.addEventListener('mousemove', function(e) {
    if (toMove === false ) { return } // 如果鼠标没有按下，则不获取鼠标的偏移量
    const x = e.clientX
    const y = e.clientY
    const moveX = x - position[0]
    const moveY = y - position[1]
    const left = parseInt(div.style.left || 0)
    const top = parseInt(div.style.top || 0)
    div.style.left = left + moveX + 'px'
    div.style.top = top + moveY + 'px'
    position = [x, y]
})

document.addEventListener('mouseup', function(e) {
    toMove = false
})
```