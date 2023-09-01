## script 标签的 async 和 defer 的区别

#### script 不加任何标签
```js
<script src=""></script>
```
这种情况，浏览器遇到 script  标签的时候，会立即加载 script 标签中的脚本，然后接着就执行。

#### defer
```js
<script defer src=""></script>
```

`defer` 要等到整个页面在内存中正常渲染结束（DOM 结构完全生成，以及其他脚本执行完成），才会执行；

#### async
```js
<script async src=""></script>
```
`async` 一旦下载完js 文件，就回立即终端页面的渲染，去执行这个脚本，然后继续渲染。


#### 总结：
一句话，`defer` 是“渲染完再执行”，`async` 是“下载完就执行”。
另外，如果有多个 `defer` 脚本，会按照它们在页面出现的顺序加载，而多个 `async` 脚本是不能保证加载顺序的。