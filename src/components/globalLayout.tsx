'use client'
import Nav from '@src/components/Nav';
import { NextUIProvider } from '@nextui-org/react';
import {ThemeProvider as NextThemesProvider, useTheme} from 'next-themes';
import React, {useEffect, useState} from 'react';

const GlobalLayout = ({ children }: { children: React.ReactNode }) => {
    const [isMounted, setIsMounted] = useState<boolean>(false);
    // const { systemTheme} = useTheme();
    
    useEffect(() => {
        setIsMounted(true);
    }, [])

    if (!isMounted) {
        return null;
    }
    
    return <div className='mx-auto min-h-[calc(100vh)] max-w-1200px min-w-300px'>
        <NextUIProvider>
            <NextThemesProvider attribute='class' forcedTheme={'light'} themes={['dark', 'light']}>
                <Nav />
                <div className='h-[calc(100vh-64px-16px)] w-full'>
                    {children}
                </div>
            </NextThemesProvider>
        </NextUIProvider>
    </div>
    
}
export default GlobalLayout;