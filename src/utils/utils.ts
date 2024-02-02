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