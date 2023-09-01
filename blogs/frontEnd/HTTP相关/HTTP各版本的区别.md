### HTTP1 和 HTTp2 的区别
1、HTTP/2 使用二进制传输数据，并且将 head 和 body 分成帧来传输； HTTP/1.1 是字符串传输。

2、HTTP/2 是多路复用，HTTP/1.1 不支持。
    多路复用简单来说就是复用同一个 tcp 连接，发送多个请求。

3、HTTP/2 可以压缩 head, HTTP/1.1 不行。

4、HTTP/2 支持服务器推送消息，HTTP/1.1 不支持。
