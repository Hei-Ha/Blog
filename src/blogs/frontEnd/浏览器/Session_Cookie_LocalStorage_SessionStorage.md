## Session、Cookie、LocalStorage、SessionStorage 区别


### Cookie：

- 存储位置：存储在客户端浏览器中。
- 生命周期：可以设置过期时间，过期后自动删除；如果不设置过期时间，会在浏览器会话结束时（用户关闭浏览器）删除。
- 容量限制：一般限制为每个域名下不超过4KB。
- 作用域：可以设置为与服务器的会话（Session）相关，也可以设置为持久化存储。

### Session
- 存储位置：Session通常指的是服务器端的会话状态，服务器会为每个用户创建一个唯一的Session标识（Session ID），并在客户端（通常是Cookie）存储这个标识。
- 生命周期：Session的生命周期通常由服务器控制，可以设置超时时间。用户关闭浏览器后，Session可能会失效，除非服务器配置了持久化Session。
- 容量限制：没有固定限制，取决于服务器的配置和资源。
- 作用域：与用户在服务器上的会话相关，通常用于存储用户登录状态、购物车信息等。

### LocalStorage：

存储位置：存储在客户端浏览器中，独立于文档的存储。
- 生命周期：持久化存储，直到被明确删除或者浏览器清除缓存。
- 容量限制：一般为5MB。
- 作用域：与源（origin）相关，即同一个源下的页面可以共享LocalStorage。
- 安全性：只能通过同源的页面访问，提供了一定程度的隔离。

### SessionStorage：
- 存储位置：存储在客户端浏览器中，与文档相关。
- 生命周期：与浏览器会话相关，当页面会话结束时（用户关闭浏览器标签页）数据被清除。
- 容量限制：一般为5MB。
- 作用域：与浏览器标签页的会话相关，同一浏览器的不同标签页之间不会共享SessionStorage。
- 安全性：提供了比LocalStorage更高的隔离性。

### 总结：
Cookie 适合存储小量数据，如Session ID，通常与服务器端会话状态相关。
Session 是服务器端的会话状态，用于跟踪用户在服务器上的活动。
LocalStorage 和 SessionStorage 是HTML5引入的Web存储API，适合存储大量数据，且在客户端本地。它们的主要区别在于生命周期和作用域。LocalStorage用于持久化存储，而SessionStorage用于存储临时数据，与浏览器会话相关。

[//]: # (+ Cookie 和 LocalStorage)

[//]: # (1、主要区别是 Cookie 会被发送到服务器，而 LocalStorage 是存储在浏览器本地的，不会发送到服务器。)

[//]: # (2、Cookie 一般大小是4k 左右，LocalStorage 大小是 5M 左右&#40;具体看浏览器的实现&#41;)

[//]: # ()
[//]: # (+ LocalStorage 和 SessionStorage)

[//]: # (1、LocalStorage 一般不会自动过期（除非用户手动删除）)

[//]: # (2、SessionStorage 在会话结束时，由浏览器决定何时清空，（一般在页签关闭的时候清空）)

[//]: # ()
[//]: # (+ Cookie 和 Session)

[//]: # (1、Cookie 存在浏览器里面，Session 存在服务器文件里)

[//]: # (2、Session 是基于 Cookie 实现的，具体做法就是把 SessionID 存放在 Cookie 里面，服务器里面存着对应 sessionID 的数据 )


