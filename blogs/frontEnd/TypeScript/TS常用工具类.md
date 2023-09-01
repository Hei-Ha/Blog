## TS 工具类：

#### `Partial<Type>`

构建一个类型，将该类型的所有属性设置为可选。这个工具将返回一个表示给定类型的所有子集的类型。\
**Example**

```tsx
interface Todo {
  title: string;
  description: string;
}
 
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}
 
const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};
 
const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});
```

[在线链接](https://www.typescriptlang.org/play?#code/JYOwLgpgTgZghgYwgAgCoHsAm7kG8BQyyYwYANhAFzIDOYUoA5gNyHKYQ0IMAOJ6IanQYgW+AL758MAK4gE-EMhk9McSBmwAKMFnTVN6ADTIYwCGUw0MAVVXqqyAApwoJOGQA8hgHwBKPDYoCDAZKCVcZAA6GN1sExioswsrW3tIZHFWSXwEATpiPQBGZABeQKISckcAInQoRjgQYAAvFA4aAGsaozYO7mA+YAFqGoQKV2RxmTBIKB6JVlz8sELsACYy5XSIQx1ikwIift5FUbAACyh0AHdkdBniKDgaC4XxP2YgA)

### `Required<Type>`

构建一个由Type的所有属性组成的类型，且所有属性设置为必填（与Partial相反）。  
**Example**

```tsx
interface Props {
  a?: number;
  b?: string;
}
 
const obj: Props = { a: 5 };
 
const obj2: Required<Props> = { a: 5 }; // @errors: 2741
// 第八行 Obj2 会报错: Property 'b' is missing in type '{ a: number; }' but required in type 'Required<Props>'.
```

[在线链接](https://www.typescriptlang.org/play?#code/PTAEAEFMCdoe2gZwFygEwHYAsBGAUAJYB2ALjAGYCGAxpKAArwAOioA3nqKJQPypEBXALYAjGAG5OoEX1CIS0YgHNJAXzx5qcIvNBwRAK1SM4LUAF523VAFZQqyZu279BtKgBKkAI4CC0SAATAB4TFgA+CytKW3txIA)

#### `Readonly<Type>`

构造一个类型Type，Type 所有的属性都被设置为只读，意思是所有属性都不可以被更改。
**Example**

```tsx
interface Todo {
  title: string;
}

const todo: Readonly<Todo> = {
  title: "Delete inactive users",
};

todo.title = "Hello"; // @errors: 2540
// 第 10 行报错： Cannot assign to 'title' because it is a read-only property.
```

[在线链接](https://www.typescriptlang.org/play?#code/PTAEAEFMCdoe2gZwFygEwFYAsAGAUAJYB2ALjAGYCGAxpKACpwAmcoA3nqKCQSQDaRUiEtGIBzANx4AvnjzU4RYd2ZxUAJUiUWRPgE8APIxYA+UAF52nbrwGoARABFIAsqGI0eANzoBXRDCI9gA0MlJ4JKoAdDz8dJb2ABIufHD2EkA)

#### `Record<Keys, Type>`

构造一个对象类型，该类型里面键的类型为 `Keys`，值的属性为 `Type`。这个工具可以用来将一个类型的属性映射到另一个类型。\
**Example**

```tsx
interface CatInfo {
  age: number;
  breed: string;
}
 
type CatName = "miffy" | "boris" | "mordred";
 
const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};
```

[在线链接](https://www.typescriptlang.org/play?#code/JYOwLgpgTgZghgYwgAgMJzASRDA9sgbwChlk4BzCALmRAFcBbAI2gG4TkmoIIATGgM5goocuwC+RImACeABxTowAOTgMUAXmQAiBsBgwZ25AB8dTXCIHGzuy7269t7IglwghyBBgE0AShBuULwAPEqq6gA0aBjYeAB8yFrEpHoGMjQEZJQ0AIwADNFcPPw6AArQAsBwIMbikRwWVpnZ1MgArEXcfDTaALJwoIq47nUNqfaOLRRtuQBsXSW9AEIiYMACABbIAMqblmCbg1BjROIu3mACAHRNG+wA9A-IAHoA-EA)

#### `Pick<Type, keys>`

通过从 `Type中` 选取属性集合 `Keys` 来构造一个类型。\
**Example**

```tsx
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}
 
type TodoPreview = Pick<Todo, "title" | "completed">;
 
const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};
```

[在线链接](https://www.typescriptlang.org/play?#code/JYOwLgpgTgZghgYwgAgCoHsAm7kG8BQyyYwYANhAFzIDOYUoA5gNyHKYQ0IMAOJ6IanQYgWbBOgC2PCpEzUARunQU4IVgF98+MAE8eKDNgAKUCADdgEAO7IAvMmPAEAawA8R9ABpkAIhLkEL7IAD5+EtKyEJi+AHys+BIgdMRY6NSephZWtg4ERAEU1L4AwqogyFDKkr5e4lIyEHLU8GQ0EHUaCWBprAD0fcgAegD8QA)

#### `Omit<Type, Keys>`

构造一个类型，该类型的 `key`是去除 `Type` 中所有的 `Keys` 后组成的。\
**Example**

```tsx
interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}
 
type TodoPreview = Omit<Todo, "description">;
 
const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
  createdAt: 1615544252770,
};
 
todo;
 
const todo: TodoPreview
 
type TodoInfo = Omit<Todo, "completed" | "createdAt">;
 
const todoInfo: TodoInfo = {
  title: "Pick up kids",
  description: "Kindergarten closes at 5pm",
};
```

[在线链接](https://www.typescriptlang.org/play?#code/JYOwLgpgTgZghgYwgAgCoHsAm7kG8BQyyYwYANhAFzIDOYUoA5gNyHKYQ0IMAOJ6IanQYgWbBOgC2PCpEzUARunQU4IVkW4Q4cgIJhqIAK6SF0VgF98+MAE8eKDNgAKUCADdgEAO7IAvMgA8pKkADxO6AA0yABEHFy8-CAxAHys+BIgdMRY6NQRrh5evgEERCTkVLEAwqogyFDKkjGR4lIyEHLU8GQ0EK2abjoQmPrUAIwAbOMArDMALPMATDNLAOxrAAytFulguawA9IfIAHoA-NZ2Dmi5AJIgMDgBwWER0TES0rIjMcgAPrEtMNRmBUulMtl9tgHk98vdHs88GwKhRqDFnMAEABrZBGHjIbHATA0FpseLcYB8YACdEAaVAHCgjDgUEg9QQZHQfRoyB0yBmPGaOz2CKeRxOFyAA)

#### `Exclude<UnionType, ExcludedMembers>`

从 `UnionType` 的 key 中排出所有 `ExcludedMembers` 的key，组成一个类型。\
**Example**

```tsx
type T0 = Exclude<"a" | "b" | "c", "a">;
     // type T0 = "b" | "c"
     
type T1 = Exclude<"a" | "b" | "c", "a" | "b">;
     // type T1 = "c"
     
type T2 = Exclude<string | number | (() => void), Function>;
    // type T2 = string | number
 
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; x: number }
  | { kind: "triangle"; x: number; y: number };
 
type T3 = Exclude<Shape, { kind: "circle" }>
     
/*
type T3 = {
    kind: "square";
    x: number;
} | {
    kind: "triangle";
    x: number;
    y: number;
}
*/ 
```

[在线链接](https://www.typescriptlang.org/play?#code/C4TwDgpgBAKgDFAvFAogDwMYBsCuATCAHgCIBDYqAHymICMLriNiAaG8gPgG4AoAej5QhUAHoB+HqEiwAjElSZcBEuSo16apq3YN1xbv0HDxk8NBgAmeemz4iAZ2AAnAJYA7AOZq3OALa0IJzUACmCASiQOKAA3AHsXPDC2ADEcNwxgF1i3AwFhUQlTaQBlAAtSaUQeIWoAbygAa3c8AC4aDBcnbAhiLignUjwXHHs2n39AqABfarV6prdWmnsARxxSJx6+tDG-AKCZmqh55rbiZxdSTywtqB2ocf2+kF2Jg94i8wBma0U7QjKFQgbBOizOHS6NwoUw4hny4iAA)

#### `Extract<Type, Union>`

提取 Type 和 Union 中相同的 key，组成一个类型。
**Example**

```tsx
type T0 = Extract<"a" | "b" | "c", "a" | "f">;
     
// type T0 = "a"
type T1 = Extract<string | number | (() => void), Function>;
     
//type T1 = () => void
 
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; x: number }
  | { kind: "triangle"; x: number; y: number };
 
type T2 = Extract<Shape, { kind: "circle" }>
/*
type T2 = {
    kind: "circle";
    radius: number;
}
*/     
```

[在线链接]