## React 19 的新特性

### 新的 API
在 React 19 中，引入了一个新的 API, use.
你可以使用 use 读取一个 promise ，React 将挂起，知道 promise 解析完成。
注：
use 不支持在渲染中创建的 promises。
```javascript
import {use} from 'react';

function Comments({commentsPromise}) {
  // `use` 将被暂停直到 promise 被解决.
  const comments = use(commentsPromise);
  return comments.map(comment => <p key={comment.id}>{comment}</p>);
}

function Page({commentsPromise}) {
  // 当“use”在注释中暂停时,
  // 将显示此悬念边界。
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Comments commentsPromise={commentsPromise} />
    </Suspense>
  )
}
```
### React 服务器组件
服务器组件是一种新的选项，在与你的客户端应用程序，或者 ssr 服务器不同的环境中,允许在打包前提前渲染组件。
这个独立的环境就是 react 服务器组件中的 "服务器"。服务器组件可以在你的 Ci 服务器上在构建时运行一次，或者可以在每次请求时，使用 web 服务器运行。

### React19 中的改进
- ref 作为一个属性
从 React19 开始，可以在函数组件中将 ref 作为 prop 进行访问：
```javascript
function MyInput({placeholder, ref}) {
  return <input placeholder={placeholder} ref={ref} />
}

//...
<MyInput ref={ref} />
```


- Context 作为提供者
在 React 19 中，你可以将 `<context>` 渲染为提供者，就无需再使用 `<Context.Provider>` 了：
```javascript
const ThemeContext = createContext('');

function App({children}) {
  return (
    <ThemeContext value="dark">
      {children}
    </ThemeContext>
  );  
}
```
- refs 支持清理函数
这将使得 ref 改变的时候，执行清理操作变得更加容易， 
例如：你可以在 ref 改变的时候，取消订阅事件
```javascript
<input
  ref={(ref) => {
    // ref 创建

    // 新特性: 当元素从 DOM 中被移除时
    // 返回一个清理函数来重置 ref
    return () => {
      // ref cleanup
    };
  }}
/>

```
当组件卸载时，React 将调用从 ref 回调返回的清理函数。这适用于 DOM refs，类组件的 refs，以及 useImperativeHandle。

- 支持文档 元数据
在 HTML 中，像 `<title>、<link>、<meta>` 这样的文档元数据标签被保留在文档的 `<head>` 部分.
在 `react` 中，决定应用程序适合的元数据组件可能与你渲染的 <head> 的地方相差甚远，或者 `react` 根本就不渲染 `<head>`，
在过去，这些元素需要手动插入，或者通过一些库（react-helmet）并在服务端渲染 react 应用程序的时候，需要非常小心的处理。

在 react 19 中，将原生支持在组件中渲染文档元数据标签
```javascript
function BlogPost({post}) {
  return (
    <article>
      <h1>{post.title}</h1>
      <title>{post.title}</title>
      <meta name="author" content="Josh" />
      <link rel="author" href="https://twitter.com/joshcstory/" />
      <meta name="keywords" content={post.keywords} />
      <p>
        Eee equals em-see-squared...
      </p>
    </article>
  );
}
```

当 `react` 渲染这个组件时，它会看到 `<title>、<link>、<meta>` 标签，并自动将它们提升到文档的 `<head>` 部分，
通过原生支持这些元数据标签，能够确保它们仅在客户端应用，流式 SSR 和服务器组件一起工作。