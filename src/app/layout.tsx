import React from "react";
import Provider from "./provider";
import "@src/style/global.scss";
import '@icon-park/react/styles/index.css'

export default async ({ children }: { children: React.ReactNode }) => {
    return (
        <html className="min-w-375px">
            <body>
                <Provider>
                    {children}
                </Provider>
            </body>
        </html>
    );
};
