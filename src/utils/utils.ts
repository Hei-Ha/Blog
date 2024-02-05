import {promises as fsPromises} from "fs";

/**
 * 
 * 测试当前组件是服务端组件 or 客户端组件
 */
export const ClientOrServer = (name: string) => {
    if (typeof window === 'undefined') {
        console.log('server component index', name)
    } else {
        console.log('client component index', name)
    }
}


export const getAPIUrl = () => {
    return process.env.NODE_ENV === 'development' ? process.env.API_URL_DEVELOPMENT : process.env.API_URL_PRODUCTION
}


/**
 * 获取给定 url 目录下所有的文件夹名称（只读一层）
 * return: string[]
 */

export const readDirectory = async (path: string) => {
    const dirArr = await fsPromises.readdir(path);
    if (dirArr.indexOf('.DS_Store') >= 0) { // 排除 .DS_Store 文件夹
        dirArr.splice(dirArr.indexOf('.DS_Store'), 1)
    }
    
    if (dirArr.indexOf('images') >= 0) { // // 排除 images 文件夹
        dirArr.splice(dirArr.indexOf('images'), 1)
    }
    return dirArr || []
}