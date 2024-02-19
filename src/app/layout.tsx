import React from "react";
import Provider from "./provider";
import "@src/style/global.scss";
import '@icon-park/react/styles/index.css'

export default async ({ children }: { children: React.ReactNode }) => {
    return (
        <html className="min-w-375px" style={{ background: 'var(--blog-bg-color-page)'}}>
            <body>
                <Provider>
                    {/*<Header />*/}
                    {children}
                </Provider>
            </body>
        </html>
    );
};
