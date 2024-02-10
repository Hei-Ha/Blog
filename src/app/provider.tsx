'use client'
import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { useStore } from '@src/store'


export default ({ children }: { children: React.ReactNode }) => {
    const theme = useStore((state) => state.theme)

    return <NextUIProvider>
        <main
            style={{  background: 'var(--td-warning-color-5)' }}
            // className={`${theme} text-foreground bg-background`}
        >
            {children}
        </main>
    </NextUIProvider>;
};
