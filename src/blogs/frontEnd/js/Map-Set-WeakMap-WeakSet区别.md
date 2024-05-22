## Map、Set、WeakMap、WeakSet 的区别

### Map、WeakMap 的区别
**Map**
1. 类似于对象，也是键值对的集合，但是 key 的范围不限于字符串，各种类型的值（包括对象，包括 null）都可以作为 key.
2. Map 有迭代器属性，可以使用 forEach 等方法。
3. Map 中的 key 对 value 的引用是强引用，即：即使该 value 在其他地方没有被引用，只要 Map 存在，该 value 就不会被垃圾回收。

**WeakMap**
1. 只接受对象（null 除外）和 Symbol 值作为间键名，不接受其他类型的值作为键名。
2. WeakMap 的 key 对 value 是弱引用，即： 如果 value 在其他地方没有被引用，即使 WeakMap 存在，该 value 也会被垃圾回收掉，并且当前 key - value 自动从 WeakMap 中移除。
3. WeakMap 没有迭代器属性，不能使用 forEach 等迭代方法，只有四个方法可以使用：get(), set(), has(), delete()



### Set、WeakSet 的区别

**Set**
1. 类似于数组，但成员的值都是唯一的，没有重复的值。
2. Set 有迭代器属性，可以进行遍历。keys(), values(), entries(), forEach()
3. 对元素的引用是强引用，只要 Set 存在，其包含的元素就不会被垃圾回收。


**WeakSet**
1. WeakSet 的成员只能是对象和 Symbol 值，而不能是其他类型的值。
2. WeakSet 不可遍历，只有 add(), delete(), has() 三个方法。
3. WeakSet 的对象都是弱引用，即： 如果 WeakSet 中的元素在其它地方没有被引用，那么会被垃圾回收掉，该元素自动从 WeakSet 中移除。


### 应用场景：
- Map: 适用于 任意类型的值作为 key 来关联、查找数据的场景。
- Set: 适用于确保元素唯一性切需要进行集合操作的场景。
- WeakMap: 适用于需要建立 对象和某些数据的关系，但又不想干扰正常的垃圾回收。
- WeakSet: 适用于需要管理一组对象示例，并确保其唯一性，且不希望这些对象因为被引用而无法被垃圾回收的场景。








