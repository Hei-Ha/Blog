export const ClientOrServer = (name: string) => {
    if (typeof window === 'undefined') {
        console.log('server component index', name)
    } else {
        console.log('client component index', name)
    }
}