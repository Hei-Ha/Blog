'use client'
import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from 'next-themes';


export default ( { children }: { children: React.ReactNode } ) => {
    return <NextUIProvider className='w-full h-full'>
        <ThemeProvider attribute="class" defaultTheme="dark">
            { children }
        </ThemeProvider>
    </NextUIProvider>
};
