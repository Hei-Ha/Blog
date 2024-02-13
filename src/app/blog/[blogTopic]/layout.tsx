import React from "react";
import SideMenu from "@src/app/components/SideMenu";
import { getMenuData } from './constants'
import TopicList from '@src/app/components/TopicList'


export default async ( { params, children } ) => {
    
    const menuData = await getMenuData( params.blogTopic );
    
    return <>
        <div className="flex flex-1">
            <div className="sm:hidden w-280px sideMenuScroll overflow-auto sticky top-16 z-30 h-[calc(100vh-64px)] border-r border-solid border-#e7e7e7">
                <SideMenu listData={menuData} />
            </div>
            <section className={'flex flex-col flex-1 items-center'}>
                <TopicList listData={menuData} className={'w-full py-3 text-sm md:hidden lg:hidden'} />
                <div className="articleContent sm:w-[100vw] sm:min-h-[calc(100vh-110px)]">
                    {children}
                </div>
            </section>
        </div>
    </>
};



