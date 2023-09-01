## 手写：Ajax

```js
var XMLRequest = new XMLHTTPRequest()
XMLRequest.open('GET', '/xxx?', true) // 第三个参数：是否为异步
// 如果是 post 请求，必须要加上请求头。setRequestHeader 必须在 open 之后，send 之前
// XMLRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
XMLRequest.onreadystatechange = function () {
    if (XMLRequest.readyState === 4) {
        if (XMLRequest.status >= 200 && XMLRequest.status < 300 || XMLRequest.status === 304) {
            success(XMLRequest)
        } else {
            error(XMLRequest)
        }
    }
}
XMLRequest.send('{name: "zhangsan"}')
```