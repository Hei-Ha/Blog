## vue2 双向绑定

vue2 的双向绑定一般是用过 v-model 使用的  
v-model 是 vue2 双向绑定的一个语法糖，具体是结合了： v-bind:value和 v-on:input 来实现的，  
+ v-bind:value实现了 data  --> UI 的单向绑定
+ v-on:input实现了  UI --> data 的单向绑定

两者结合，就形成了双向绑定

`v-bind:value`的具体实现是借助了 `Object.defineProperty` 函数，给数据的 getter和 setter属性，修改，监听数据修改的时机，进而去更新 UI

`v-on`是通过 `template`给 `Dom`添加监听事件， `Dom input`的值改变了，就回去更新 `data`。

这种方法有两个弊端：
1、动态创建的 data() 属性需要使用 Vue.set 来赋值，否则不会触发视图更新。（vue3 不需要）
2、`Object.defineProperty` 需要提前递归的便利 `data` 才能做到响应式。 （vue3 不需要）

## Vue3 的双向绑定
Vue3 的双向绑定是通过 Proxy 实现的。

通过 Proxy 代理对象，解决了 Vue2 中使用 `Object.defineProperty` 的弊端。