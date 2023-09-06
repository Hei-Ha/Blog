'use client'
import Nav from '@src/components/Nav';
import { NextUIProvider } from '@nextui-org/react';
import {ThemeProvider as NextThemesProvider, useTheme} from 'next-themes';
import React, {useEffect, useState} from 'react';

const GlobalLayout = ({ children }: { children: React.ReactNode }) => {
    const [isMounted, setIsMounted] = useState<boolean>(false);
    const { systemTheme} = useTheme();
    
    useEffect(() => {
        setIsMounted(true);
    }, [])

    if (!isMounted) {
        return null;
    }
    
    return <NextUIProvider>
        <NextThemesProvider attribute='class'  themes={['dark', 'light']}>
            <div className='h-[calc(100vh)] w-[calc(100vw)]'>
                <Nav />
                <div className='h-[calc(100vh-64px)] w-full overflow-hidden'>
                    {children}
                </div>
            </div>
        </NextThemesProvider>
    </NextUIProvider>
}
export default GlobalLayout;