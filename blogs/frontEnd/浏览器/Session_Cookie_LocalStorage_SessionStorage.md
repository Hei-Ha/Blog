## Session、Cookie、LocalStorage、SessionStorage 区别
+ Cookie 和 LocalStorage
1、主要区别是 Cookie 会被发送到服务器，而 LocalStorage 是存储在浏览器本地的，不会发送到服务器。
2、Cookie 一般大小是4k 左右，LocalStorage 大小是 5M 左右(具体看浏览器的实现)

+ LocalStorage 和 SessionStorage
1、LocalStorage 一般不会自动过期（除非用户手动删除）
2、SessionStorage 在会话结束时，由浏览器决定何时清空，（一般在页签关闭的时候清空）

+ Cookie 和 Session
1、Cookie 存在浏览器里面，Session 存在服务器文件里
2、Session 是基于 Cookie 实现的，具体做法就是把 SessionID 存放在 Cookie 里面，服务器里面存着对应 sessionID 的数据 