# CSS 面试题
## BFC 是什么
BFC 是块级格式化上下文，具有 BFC 特性的元素可以看作是一个独立的容器，容器里面的元素在布局上不会影响外面的元素。
BFC 的作用：
    1、防止 margin 合并。
    2、清楚浮动。
BFC 触发条件：[MDN 参考](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)
    1、浮动元素（float：不是none）
    2、绝对定位的元素。（元素的定位属性是 absolute 或者 fixed）
    3、行内快元素  （display: inline-block）
    4、overflow 值不为 visible 的元素
    5、弹性元素 （display 为flex 或者 inline-flex 的元素的直接元素）

## 水平垂直居中的方法有哪些？
1、借助 table （父元素定宽高）

    这种方法父、子元素不需要设置宽高（这里设置宽高是为了截图效果）。
```javascript
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
<img src="/Users/wangchuang/Desktop/截屏2022-02-11 14.22.35.png" alt="截屏2022-02-11 14.22.35" style="zoom:25%;" />

2、利用伪元素

    这种方法父、子元素不需要设置宽高（这里设置宽高是为了截图效果）。
    需要给伪元素设置高度撑满父元素。
```javascript
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
<img src="/Users/wangchuang/Desktop/截屏2022-02-11 15.53.12.png" alt="截屏2022-02-11 15.53.12" style="zoom:25%;" />

3、绝对定位 + 负 margin

    此种方法父元素和子元素都必须设置宽高
```javascript
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
<img src="/Users/wangchuang/Desktop/截屏2022-02-11 15.36.27.png" alt="截屏2022-02-11 15.36.27" style="zoom:25%;" />

4、transform: translate()

    这种方法和 负margin 一样，就是把 负的margin 换成 transform: translate(-50%, -50%)，
    父元素需要规定宽高，子元素不用规定宽高。

```javascript
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
<img src="/Users/wangchuang/Desktop/截屏2022-02-11 15.42.13.png" alt="截屏2022-02-11 15.42.13" style="zoom:25%;" />

5、绝对定位 + margin: auto

    这种方法父子元素都需要给定宽高。

```javascript
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
<img src="/Users/wangchuang/Desktop/截屏2022-02-11 15.46.37.png" alt="截屏2022-02-11 15.46.37" style="zoom:25%;" />

6、  flex

    flex 布局不需要给父元素、子元素设置宽高（此处父元素设置宽高是为了截图效果）。
```javascript
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
<img src="/Users/wangchuang/Desktop/截屏2022-02-11 15.50.24.png" alt="截屏2022-02-11 15.50.24" style="zoom:25%;" />