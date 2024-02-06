import React from "react";
import Header from "@src/app/components/Header";
import SideMenu from "./components/SideMenu";

export default ({children}: { children: React.ReactNode }) => {
    return <>
        <Header/>
        <div className="flex bg-#FFFFFF">
            <section
                className="sideMenu w-300px overflow-scroll  sticky top-16 z-30 h-[calc(100vh-64px)] border-r border-solid border-#e7e7e7">
                <SideMenu />
            </section>
            <section className="overflow-auto flex-1">
                {children}
            </section>
        </div>
    </>
};
