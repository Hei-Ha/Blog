import { Metadata} from 'next';


import '@/style/global.style.css';
export const metadata: Metadata = {
    title: 'Next Bolg',
    icons: {
        icon: '/blog.png',
    },
}
const Layout = (
    {children}: { children: React.ReactNode }
) => {
    
    return (
        <html>
            <body>
            {children}
            </body>
        </html>
    )
}

export default Layout;