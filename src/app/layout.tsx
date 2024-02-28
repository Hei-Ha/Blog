import React from "react";
import Provider from "./provider";
import "@src/style/global.scss";
import Script from 'next/script'

export default async ( { children }: { children: React.ReactNode } ) => {
    return (
        <html suppressHydrationWarning>
            <body className="min-w-375px">
                <Provider>
                    { children }
                </Provider>
            </body>
            <Script src='//at.alicdn.com/t/c/font_4434854_dezmhcagoqu.js' />
        </html>
    );
};
