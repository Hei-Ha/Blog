## React 有哪些 hooks
##### useState()：状态钩子
- useState()用于为函数组件引入状态（state）；
##### useContext(someContext): 共享状态钩子
- 如果需要在组件之间共享状态，可以使用useContext()。
##### useEffect()：副作用钩子。
- useEffect()用来引入具有副作用的操作，
- 通过依赖触发的钩子函数，常用于模拟类组件中的componentDidMount，componentDidUpdate，componentWillUnmount方法
##### useRef():
- useRef 是一个 React Hook，它能让你引用一个不需要渲染的值。(官网解释)
##### useReducer()：action 钩子
- 类似于 Redux 思想的实现，但其并不足以替代 Redux，可以理解成一个组件内部的 redux，并不是持久化存储，会随着组件被销毁而销毁；

##### useCallback(fn, dependencies)
- 缓存回调函数，避免传入的回调每次都是新的函数实例而导致依赖组件重新渲染，具有性能优化的效果；
##### useMemo(fn, dependencies)
- 缓存 fn 的计算结果，只有 dependencies 改变的时候才重新计算 fn 的结果。 
##### useId() 生成一个唯一的 ID
- 一般给无障碍属性使用
##### useDebugValue(value, format?)
- 没有返回值，在 react 调试工具中，显示 format 后的 value
##### useLayoutEffect(setup, dependencies)
- 在浏览器重新绘制界面前触发  fn , 
- 使用场景: 例如 tooltip 的显示位置。
##### useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot?)
- 订阅外部的 store ，例如第三方状态库...


## 什么是 hooks?
hooks 意思是 "钩子"，用来在函数中 "钩入" React 的特性，
## 为什么使用 hooks
在react 传统的 类 组件中，可以使用 state，各种生命周期钩子函数，但是类组件比较繁杂，不容易理解。
react 在16.8 版本之后，提供了hooks 这种形式， 可以在函数组件中使用 React 特性。
好处： 
- 易于跨组件复用。
- 相比较类组件，结构更清晰，定义比较简单，更容易理解。