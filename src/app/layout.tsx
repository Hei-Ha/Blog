import React from "react";
import Provider from "./provider";
import "../style/global.css";
import Header from "@src/app/components/Header";

export default ({ children }: { children: React.ReactNode }) => {
    return (
        <html className="bg-#f0f0f0 h-full w-full">
            <body>
                <Provider>
                    <Header/>
                    {children}
                </Provider>
            </body>
        </html>
    );
};
