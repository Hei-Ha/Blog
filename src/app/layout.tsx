import { Metadata } from 'next';
import '@src/style/global.css';
import GlobalLayout from "@src/components/globalLayout";


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
                <GlobalLayout>
                    {children}
                </GlobalLayout>
            </body>
        </html>
    )
}

export default Layout;