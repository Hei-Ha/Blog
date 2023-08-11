import { Metadata } from 'next';
import { Providers } from '@/app/providers';
import '@/style/globals.scss';

import GlobalLayout from '@/components/globalLayout';

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