import { Metadata } from 'next';
import '@/style/global.scss';

export const metadata: Metadata = {
    title: 'Blogs',
    icons: {
        icon: '/blog.svg'
    }
}
const Layout = (
    { children }: { children: React.ReactNode }
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