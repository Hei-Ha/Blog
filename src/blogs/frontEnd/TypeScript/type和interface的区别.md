## type 和 interface 的区别

### 1、语法差异：
- `type` 用于声明一个类型的别名。
- `interface` 用于声明一个接口，它定义了对象的结构，包括属性，方法等。interface 相当于声明一个新的类型。

### 2、合并行为：  
两者都可以合并类型，但是有区别。
- `type` 不能重复声明，会报错。
- `interface` 可以重复声明，ts 会自动合并。

### 3、使用场景：
- 当需要定义一个复杂的类型，或者需要基于已有的类型创建一个新类型时，用 `type`
- 当需要定义对象的结构，或者需要定义特定的结构类型时，使用 `interface`