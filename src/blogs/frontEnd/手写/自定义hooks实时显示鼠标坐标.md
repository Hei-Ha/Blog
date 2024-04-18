## 自定义 hooks ，实时显示鼠标坐标

很简单，面试的时候脑子没反应过来，没写出来...

```javascript
// customizeHooks.js
import React, { useEffect, useState } from "react";
const useXY = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const handleRemove = e => {
        setX(e.clientX);
        setY(e.clientY);
    };

    useEffect(() => {
        window.addEventListener("mousemove", handleRemove);

        return () => {
            window.removeEventListener("mousemove", handleRemove);
        };
    }, []);
    return [x, y];
};

export { useXY };
```


```javascript
// 使用 hooks 
import React, { useEffect } from 'react'
import { useXY } from './customizeHooks.js'


export default () => {

    const [x, y] = useXY()

    useEffect(() => {
        console.log(1)
        console.log([x, y])
    }, [x, y])
    return <div>123</div>
}

```
