## 手写：Promise.all
```js
Promise.all2 = (arrayList) => {
    return new Promise((resolve, reject) => {
        const result = []
        // let count = 0
        arrayList.map((item, index) => {
            item.then((data) => {
                result[index] = data
                if (index >= arrayList.length - 1) {
                    resolve(result)
                }
                // count = count + 1
                // if (count === arrayList.length - 1) {
                //     resolve(result)
                // }
            }, (reason) => {
                reject(reason)
            })
        })
    })
}
```