import React from "react";
import Provider from "./provider";
import "@src/style/global.scss";
import Script from 'next/script'
import { Analytics } from "@vercel/analytics/react"

export default async ( { children }: { children: React.ReactNode } ) => {
    return (
        <html suppressHydrationWarning>
            <body className="min-w-375px">
                <Provider>
                    { children }
                    <Analytics />
                </Provider>
            </body>
            <Script src='//at.alicdn.com/t/c/font_4434854_m2c51rv0eh.js' />
        </html>
    );
};
