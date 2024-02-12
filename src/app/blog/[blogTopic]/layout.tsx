import React from "react";
import Header from "@src/app/components/Header";
import SideMenu from "@src/app/components/SideMenu";
import { getMenuData } from './constants'
import TopicList from '@src/app/components/TopicList'


export default async ( { params, children } ) => {
    
    const menuData = await getMenuData( params.blogTopic );
    
    return <>
        <div className="flex">
            <div className="sm:hidden w-280px sideMenuScroll overflow-auto sticky top-16 z-30 h-[calc(100vh-64px)] border-r border-solid border-#e7e7e7">
                <SideMenu listData={menuData} />
            </div>
            <section className={'flex flex-col'}>
                <TopicList listData={menuData} className={'bg-pink py-3 text-sm'} />
                <div className="overflow-auto flex justify-center max-w-full">
                    {children}
                </div>
            </section>
        </div>
    </>
};



