## 回流、重绘

### 回流

#### 什么是回流：
当 Render Tree 中部分或全部元素的尺寸、结构、或某些属性发生改变时，
浏览器重新渲染部分或全部文档的过程称为回流。

#### 会导致回流的操作：
1. 面首次渲染
2. 浏览器窗口大小发生改变
3. 元素尺寸或位置发生改变
4. 元素内容变化（文字数量或图片大小等等）
5. 元素字体大小变化
6. 添加或者删除可见的DOM元素
7. 激活CSS伪类（例如：:hover）
8. 查询某些属性或调用某些方法

#### 常见的会导致回流的操作有：
```js
clientWidth, clientHeight, clientTop, clientLeft
offsetWidth,offsetHeight,offsetTop,offsetLeft
scrollWidth, scrollHeight, scrollTop, scrollLeft
scrollIntoView(), scrollIntoViewIfNeeded(),
getComputedStyle(),
getBoundingClientRect(),
scrollTo()
```

### 重绘
#### 什么是重绘：
当页面中元素样式的改变并不影响它在文档流中的位置时（例如：color、background-color、visibility等），
浏览器会将新样式赋予给元素并重新绘制它，这个过程称为重绘。

**回流比重绘的代价要更高。**

*有时即使仅仅回流一个单一的元素，它的父元素以及任何跟随它的元素也会产生回流。*

现代浏览器会对频繁的回流或重绘操作进行优化：
浏览器会维护一个队列，把所有引起回流和重绘的操作放入队列中，如果队列中的任务数量或者时间间隔达到一个阈值的，
浏览器就会将队列清空，进行一次批处理，这样可以把多次回流和重绘变成一次。

#### 当你访问以下属性或方法时，浏览器会立刻清空队列：
```js
clientWidth, clientHeight, clientTop, clientLeft
offsetWidth, offsetHeight, offsetTop, offsetLeft
scrollWidth, scrollHeight, scrollTop, scrollLeft
width, height,
getComputedStyle(),
getBoundingClientRect()
```
这是因为队列中可能会有影响到这些属性或方法返回值的操作，即使你希望获取的信息与队列中操作引发的改变无关，
浏览器也会强行清空队列，确保你拿到的值是最精确的。

#### 如何避免：
1. 避免使用table布局。
2. 尽可能在DOM树的最末端改变class。
3. 避免设置多层内联样式。
4. 将动画效果应用到position属性为absolute或fixed的元素上。
5. 避免使用CSS表达式（例如：calc()）。



