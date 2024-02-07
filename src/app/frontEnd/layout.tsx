import React from "react";
import Header from "@src/app/components/Header";
import SideMenu from "@src/app/components/SideMenu";
import { getMenuData } from './constants'


export default async ({children}: { children: React.ReactNode }) => {
    const menuData = await getMenuData();

    return <>
        <Header/>
        <div className="flex bg-#FFFFFF">
            <section
                className="sideMenu w-300px overflow-auto sticky top-16 z-30 h-[calc(100vh-64px)] border-r border-solid border-#e7e7e7">
                <SideMenu listData={menuData} />;
            </section>
            <section className="overflow-auto flex-1 flex justify-center ">
                {children}
            </section>
        </div>
    </>
};
