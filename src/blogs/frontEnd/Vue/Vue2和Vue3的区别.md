## Vue2 和 Vue3 的区别

[//]: # (1、`createdApp&#40;&#41;` 代替了 `new Vue&#40;&#41;`。  )

[//]: # (2、`v-model` 代替了以前的 `v-model` 和 `.sync`。  )

[//]: # (3、vue3 的根元素可以不止一个。  )

[//]: # (4、Vue2 中的生命周期 `destroy` 改成了，`unmount`&#40;`beforeUnmount` 和 `unmounted`&#41;。  )

### 1、性能提升
- `Vue3` 使用 `proxy` 作为数据响应式的底层实现，相比较 Vue2 的 Object.definedProperty， Proxy 提供了更全面的响应式能力，包括对数据索引和长度的响应式，以及对象的新属性的响应式。

### 2、`Composition API` 组合式 API
- Vue3 引入了新的编写组件逻辑的方式：`Composition API`。
与 `Vue2` 的 `Options API` (选项式API) 相比较，使得编写组件逻辑 复用逻辑更加灵活。

### 3、声明周期钩子名称有所变化
- 例如 `beforeCreate` 和 `created` 在 `Vue 3` 中变为 `onBeforeCreate` 和 `onCreated`。

### 4、更好的支持 `Typescript`
