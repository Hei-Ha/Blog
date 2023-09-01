## 清除浮动

### 给父元素加上下面的类：
```css
.parent::after {
    clear: both;
    content: '';
    display: block;
}
```

### 使用 BFC
[参考链接](https://www.yuque.com/u2024994/hlr5sc/gph2ke)