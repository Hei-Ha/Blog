'use client'
import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { useStore } from '@src/store'


export default ({ children }: { children: React.ReactNode }) => {
    const theme = useStore((state) => state.theme)

    return <NextUIProvider>
        <main
            className={`${theme} text-foreground bg-background`}
        >
            {children}
        </main>
    </NextUIProvider>;
};
