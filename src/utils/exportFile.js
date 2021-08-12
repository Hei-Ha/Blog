// 前端导出文件工具方法
import Axios from 'axios'

/**
 * 导出文件
 * @params params {object} 请求参数
 * @params url {string} 请求完整路径
 * @params methodsType {string} 请求方法 (get)
 * @params fileType {string} 文件类型 (xls)
 * @parmas fileName {string} 导出文件名 (文件)
 * */
export const exportFile = (params, url, methodsType = 'get', fileType = 'xls', fileName = '文件') => {
    if (url[0] !== '/') throw new Error('export address must be begin with a "/"')
    const resUrl = `${window.location.protocol}//${window.location.host}${url}`
    Axios({
        method: methodsType,
        url: resUrl,
        data: params,
        responseType: 'blob'
    })
        .then((response) => {
            const data = response.data
            if (!data) {
                return
            }
            const temporaryUrl = window.URL.createObjectURL(new Blob([data]))
            const a = document.createElement('a')
            a.style.display = 'none'
            a.href = temporaryUrl
            a.setAttribute('download', `${fileName}.${fileType}`)
            document.body.appendChild(a)
            a.click()
            setTimeout(() => {
                document.removeChild(a)
            }, 1000 * 30)
        })
        .catch((error) => {
            console.log(error)
        })
}