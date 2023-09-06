import { Metadata } from 'next';
import GlobalLayout from "@src/components/globalLayout";
import '@src/style/global.css';


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
            <body className='bg-#f0f0f0'>
                <GlobalLayout>
                    {children}
                </GlobalLayout>
            </body>
        </html>
    )
}

export default Layout;