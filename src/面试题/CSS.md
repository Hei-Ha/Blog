# CSS 面试题
## BFC 是什么
BFC 是块级格式化上下文，具有 BFC 特性的元素可以看作是一个独立的容器，容器里面的元素在布局上不会影响外面的元素。
BFC 的作用：
    1、防止 margin 合并。
    2、清除浮动。
BFC 触发条件：[MDN 参考](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)
    1、浮动元素（float：不是none）
    2、绝对定位的元素。（元素的定位属性是 absolute 或者 fixed）
    3、行内快元素  （display: inline-block）
    4、overflow 值不为 visible 的元素
    5、弹性元素 （display 为flex 或者 inline-flex 的元素的直接元素）

## 水平垂直居中的方法有哪些？
1、借助 table （父元素定宽高）

    这种方法父、子元素不需要设置宽高（这里设置宽高是为了截图效果）。
```html
<div class="parent">
      <div class="child">子元素</div>
</div>

// CSS
.parent {
  width: 200px;
  height: 200px;
  display: table;
  background-color: cornflowerblue;
}
.child {
  display: table-cell;
  background-color: aqua;
  vertical-align: middle;
  text-align: center;
}
```
<img width="221" alt="截屏2022-02-11 15 23 32" src="https://user-images.githubusercontent.com/42307613/153556715-3122ac27-c52e-4912-b558-39f0eef3d0e2.png">

2、利用伪元素

    这种方法父、子元素不需要设置宽高（这里设置宽高是为了截图效果）。
    需要给伪元素设置高度撑满父元素。
```html
<div class="parent">
      <div class="child">利用伪元素</div>
</div>
.parent {
  width: 300px;
  height: 300px;
  background-color: cornflowerblue;
  text-align: center;
}

.parent::before, .parent::after {
  content:'';
  height: 100%;
  display: inline-block;
  vertical-align: middle;
}
.child {
  display: inline-block;
  vertical-align: middle;
  background-color: red;
}
```
<img width="335" alt="截屏2022-02-11 15 53 12" src="https://user-images.githubusercontent.com/42307613/153556780-105cba35-b501-4079-9a90-976b1111c8f2.png">


3、绝对定位 + 负 margin

    此种方法父元素和子元素都必须设置宽高
```html
<div class="parent">
    <div class="child">绝对定位 + 负margin</div>
</div>

    .parent{
    height: 300px;
    width: 300px;
    position: relative;
    background-color: cornflowerblue;
}
.child{
    width: 100px;
    height: 100px;
    background-color: aqua;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -50px;
    margin-top: -50px;
}
```
<img width="372" alt="截屏2022-02-11 15 36 27" src="https://user-images.githubusercontent.com/42307613/153556806-af341e8c-9a74-403a-b674-c672a7ce4526.png">


4、transform: translate()

    这种方法和 负margin 一样，就是把 负的margin 换成 transform: translate(-50%, -50%)，
    父元素需要规定宽高，子元素不用规定宽高。

```html
<div class="parent">
      <div class="child">绝对定位 + transform: translate(-50%, -50%)</div>
</div>

.parent{
  height: 300px;
  width: 300px;
  position: relative;
  background-color: cornflowerblue;
}
.child{
  /*width: 100px;*/
  /*height: 100px;*/
  background-color: aqua;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```
<img width="323" alt="截屏2022-02-11 15 42 13" src="https://user-images.githubusercontent.com/42307613/153556828-0ba5c847-8412-4631-a11a-b800c7281398.png">


5、绝对定位 + margin: auto

    这种方法父子元素都需要给定宽高。

```html
 <div class="parent">
      <div class="child">绝对定位 + margin: auto</div>
</div>

.parent{
  height: 300px;
  width: 300px;
  position: relative;
  background-color: cornflowerblue;
}
.child{
  width: 100px;
  height: 100px;
  background-color: aqua;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
```
<img width="386" alt="截屏2022-02-11 15 46 37" src="https://user-images.githubusercontent.com/42307613/153556866-d8c481e5-2faf-46d3-b2d4-f8e8a273b325.png">


6、  flex

    flex 布局不需要给父元素、子元素设置宽高（此处父元素设置宽高是为了截图效果）。
```html
<div class="parent">
      <div class="child">flex</div>
</div>

.parent{
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: cornflowerblue;
}

.child {
  background-color: aqua;
}
```
<img width="348" alt="截屏2022-02-11 15 50 24" src="https://user-images.githubusercontent.com/42307613/153557111-8bc3f24e-6dae-4f1c-9fda-75384597269c.png">



## CSS 选择器有哪些，优先级是怎么样的？

大致遵循这样一个规则：
优先级关系：内联样式 > ID 选择器 > 类选择器 = 属性选择器 = 伪类选择器 > 标签选择器 = 伪元素选择器

1、选择器越具体，优先级越高。
2、如果相同的优先级，后面的覆盖前面的。
3、加 !important 的优先级最高，最好不要用

## 如何清楚浮动
1、给父元素加上这么一个类：
```css
.parent::after {
    clear: both;
    content: '';
    display: block;
}
```
2、使用 BFC
 触发 BFC 的方法请参考上面链接。

## 说一下盒模型
盒模型分两种：

    一种是 `content-box`（标准盒模型），他的 width 属性指定的是 内容区域的宽度，如果加上padding, border 的话，实际宽度会大于给定的 width。
    实际宽度计算方式 = 给定的 width + padding左右 + border左右

    另一中是 `border-box`（IE 盒模型），它的实际宽度就是给定的宽度。
    实际宽度计算方式 = 给定的 width

## 回流、重回

回流(重排) (Reflow)：

    当 Render Tree 中部分或全部元素的尺寸、结构、或某些属性发生改变时，
    浏览器重新渲染部分或全部文档的过程称为回流。
    
会导致回流的操作：
```text
+ 面首次渲染
+ 浏览器窗口大小发生改变
+ 元素尺寸或位置发生改变
+ 元素内容变化（文字数量或图片大小等等）
+ 元素字体大小变化
+ 添加或者删除可见的DOM元素
+ 激活CSS伪类（例如：:hover）
+ 查询某些属性或调用某些方法
```

常见的会导致回流的操作有：
```javascript
clientWidth、clientHeight、clientTop、clientLeft
offsetWidth、offsetHeight、offsetTop、offsetLeft
scrollWidth、scrollHeight、scrollTop、scrollLeft
scrollIntoView()、scrollIntoViewIfNeeded()
getComputedStyle()
getBoundingClientRect()
scrollTo()
```

重绘 (Repaint):

    当页面中元素样式的改变并不影响它在文档流中的位置时（例如：color、background-color、visibility等），
    浏览器会将新样式赋予给元素并重新绘制它，这个过程称为重绘。

回流比重绘的代价要更高。
有时即使仅仅回流一个单一的元素，它的父元素以及任何跟随它的元素也会产生回流。


现代浏览器会对频繁的回流或重绘操作进行优化：
浏览器会维护一个队列，把所有引起回流和重绘的操作放入队列中，如果队列中的任务数量或者时间间隔达到一个阈值的，
浏览器就会将队列清空，进行一次批处理，这样可以把多次回流和重绘变成一次。

当你访问以下属性或方法时，浏览器会立刻清空队列：
```javascript
clientWidth、clientHeight、clientTop、clientLeft
offsetWidth、offsetHeight、offsetTop、offsetLeft
scrollWidth、scrollHeight、scrollTop、scrollLeft
width、height
getComputedStyle()
getBoundingClientRect()
```
    这是因为队列中可能会有影响到这些属性或方法返回值的操作，即使你希望获取的信息与队列中操作引发的改变无关，
    浏览器也会强行清空队列，确保你拿到的值是最精确的。

如何避免：

    避免使用table布局。
    尽可能在DOM树的最末端改变class。
    避免设置多层内联样式。
    将动画效果应用到position属性为absolute或fixed的元素上。
    避免使用CSS表达式（例如：calc()）。
