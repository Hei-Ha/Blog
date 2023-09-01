## defer 和 async 异同点

### 相同点：
```js
defer 和 async 都不会阻塞 html 页面的解析，都会异步去加载外部的 js 脚本。
```

### 不同点：
```js
defer: 按照 script 标签出现的顺序加载，加载完后不会立即执行，等到 html 解析完成后再去执行刚才加载的 js 文件。
aysnc: 加载完 js 文件之后，会立即停止 html 的渲染，立即执行 js 文件。（加载的时候，不能保证加载 script 的顺序）
```

