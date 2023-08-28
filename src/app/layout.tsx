import { Metadata } from 'next';
import { Providers } from '@src/app/providers';
import '@src/style/globals.scss';

import GlobalLayout from '@src/components/globalLayout';

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
                <Providers>
                    <GlobalLayout>
                        {children}
                    </GlobalLayout>
                </Providers>
            </body>
        </html>
    )
}

export default Layout;