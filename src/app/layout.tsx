import React from "react";
import Provider from "./provider";
import "../style/global.css";

export default ({ children }: { children: React.ReactNode }) => {
    return (
        <html className="bg-#f0f0f0 h-full w-full">
            <body>
                <Provider>{children}</Provider>
            </body>
        </html>
    );
};
