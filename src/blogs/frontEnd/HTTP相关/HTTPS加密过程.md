

## HTTPS 加密过程
### 简介：
由于 HTTP 请求和相应的报文都是明文的，为了给 HTTP 增加安全性，在 HTTP 上加了一层安全协议 （SSL/TLS）
也就是 ：
HTTPS = HTTP + SSL(或者 TLS)

### 前置知识：
加密一般是通过 公钥和私钥，而这一对 公钥和私钥 一般存放在 服务器上，服务器会对外公开自己的 公钥，不会公开自己的 私钥。


### HTTPS 加密过程：
经过 TCP 三次握手之后会经历如下过程：

客户端 ：C  
服务端：S

1. C 向 S 发送一下信息，例如：TLS 版本、客户端支持的加密套件、并生成一个随机数，记为：随机数1
2. S 收到消息后，确认支持的 TLS 版本，和加密套件，并且也会生成一个随机数（记为：随机数2），发给 C。
同时也会向 C 发送 公钥、证书。都发送完毕后，告诉客户端发送完毕了。
3. 这时候 C 会再生成一个 随机数（记为：随机数3），也叫预主密钥。这个 预主密钥不会直接发送出去，而是刚才接收到的公钥进行加密，加密后再发送给 S。
4. S 收到加密后的 预主密钥 后，会用自己的 私钥 去解密，得到客户端生成的 预主密钥。此时，只有 C 和 S 知道真正的 预主密钥。（除非服务器的 私钥 被泄漏）
5. C 通过 随机数1、随机数2、预主密钥，生成一个会话密钥，
S 通过 随机数1、随机数2、预主密钥，生成一个会话密钥，
这个时候C 和 S 的会话密钥是相同的。
6. C 和 S 得到一个相同的会话密钥，以后的信息传输就会利用这个会话密钥进行加密。
也就是说，第五步以前是非对称加密，第5步以后就是对称加密了。


##### 为什么之后用 对称加密
因为当 C 和 S 得到相同的 会话密钥之后，就相当于双方有一个共同约定的加密方式，没有第三方知道。用会话密钥加密，就能够保证信息的安全性。
非对称加密比较消耗资源，所以后面就使用对称加密。

