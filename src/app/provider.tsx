'use client'
import React from "react";
import { NextUIProvider } from "@nextui-org/react";

export default ({ children }: { children: React.ReactNode }) => {

    return <NextUIProvider>
        <main
            // className="dark text-foreground bg-background"
        >
            {children}
        </main>
    </NextUIProvider>;
};
