// 前端导出文件工具方法
import Axios from 'axios'

// /**
//  * 导出文件
//  * @params params {object} 请求参数
//  * @params url {string} 请求完整路径
//  * @params methodsType {string} 请求方法 (get)
//  * @params fileType {string} 文件类型 (xls)
//  * @parmas fileName {string} 导出文件名 (文件)
//  * */
// export const exportFile = (params, url, methodsType = 'get', fileType = 'xls', fileName = '文件') => {
//     if (url[0] !== '/') throw new Error('export address must be begin with a "/"')
//     const resUrl = `${window.location.protocol}//${window.location.host}${url}`
//     Axios({
//         method: methodsType,
//         url: resUrl,
//         data: params,
//         responseType: 'blob'
//     })
//         .then((response) => {
//             const data = response.data
//             if (!data) {
//                 return
//             }
//             const temporaryUrl = window.URL.createObjectURL(new Blob([data]))
//             const a = document.createElement('a')
//             a.style.display = 'none'
//             a.href = temporaryUrl
//             a.setAttribute('download', `${fileName}.${fileType}`)
//             document.body.appendChild(a)
//             a.click()
//             setTimeout(() => {
//                 document.removeChild(a)
//             }, 1000 * 30)
//         })
//         .catch((error) => {
//             console.log(error)
//         })
// }

export function download(method = 'post', address, params) {
    const resUrl = `${window.location.protocol}//${window.location.host}/${address}`
    Axios({
        method: method,
        url: resUrl,
        data: params,
        responseType: 'arraybuffer'
    })
        .then((response) => {
            const data = response.data // 根据返回拿到 Blob 的数据
            if (!data) {
                return
            }

            const getFileName = response.headers['content-disposition'].split(';')[1]?.split('fileName*=')[1]?.split("''")[1] || response.headers['content-disposition'].split(';')[1]?.split('fileName=')[1]
            const fileName = decodeURIComponent(getFileName)
            const url = window.URL.createObjectURL(new Blob([data]))
            const a = document.createElement('a') // 创建<a>标签
            a.style.display = 'none'
            a.href = url
            a.setAttribute('download', fileName)
            document.body.appendChild(a)
            a.click() // 点击<a>标签
            setTimeout(() => {
                document.body.removeChild(a)
            }, 30000)
        })
        .catch((error) => {
            console.log(error)
        })
}
