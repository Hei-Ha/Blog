import React from "react";
import Provider from "./provider";
import "@src/style/global.scss";
import Header from "@src/app/components/Header";

export default ({ children }: { children: React.ReactNode }) => {
    return (
        <html className="h-full w-full min-w-375px">
            <body>
                <Provider>
                    <Header/>
                    {children}
                </Provider>
            </body>
        </html>
    );
};
