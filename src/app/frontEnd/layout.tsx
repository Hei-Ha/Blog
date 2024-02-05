import React from "react";
import Header from "@src/app/components/Header";
import SideMenu from "./components/SideMenu";

export default ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
            <div className="flex">
                <section className="w-300px overflow-scroll sticky top-16 z-30 h-[calc(100vh-64px)] bg-#CCCCCC">
                    <SideMenu />
                </section>
                <section className="overflow-scroll pt-16 flex-1">
                    {children}
                </section>
            </div>
        </>
    );
};
