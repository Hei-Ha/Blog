import { Metadata} from 'next';
import {Providers} from "./providers";


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
            <Providers>
                {children}
            </Providers>
           
            </body>
        </html>
    )
}

export default Layout;