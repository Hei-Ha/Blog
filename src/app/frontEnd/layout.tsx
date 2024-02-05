import React from "react";
import Header from "@src/app/components/Header";
import SideMenu from "./components/SideMenu";

export default ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
            <div className="flex bg-#CCCCCC">
                <SideMenu />
                {/* {children} */}
            </div>
        </>
    );
};
