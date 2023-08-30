'use client'
import Nav from '@src/components/Nav';
import { NextUIProvider } from '@nextui-org/react';



const GlobalLayout = ({ children }: { children: React.ReactNode }) => {
    return <NextUIProvider>
        <main className={`dark text-foreground bg-background w-screen h-screen`}>
            <Nav />
            <div className='flex justify-center flex-col max-w-5xl mx-auto px-3'>
                {children}
            </div>
        </main>
    </NextUIProvider>
    // return <section className='w-screen h-screen'>
    //     <Nav />
    //     <div className='flex justify-center flex-col max-w-5xl mx-auto px-3'>
    //         {children}
    //     </div>
    // </section>
}
export default GlobalLayout;