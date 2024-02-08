import React from "react";
import Header from "@src/app/components/Header";
import SideMenu from "@src/app/components/SideMenu";
import { getMenuData } from './constants'


export default async ( { params, children } ) => {
    
    const menuData = await getMenuData( params.blogTopic );
    
    return <>
        <div className="flex bg-#FFFFFF">
            <div
                className="w-280px sideMenuScroll overflow-auto sticky top-16 z-30 h-[calc(100vh-64px)] border-r border-solid border-#e7e7e7">
                <SideMenu listData={menuData} />
            </div>
            <section className="overflow-auto flex-1 flex justify-center">
                {children}
            </section>
        </div>
    </>
};

