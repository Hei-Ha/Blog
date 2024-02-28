import React from "react";
import SideMenu from "@src/components/SideMenu";
import { getMenuData } from './constants'
import TopicList from '@src/components/TopicList'
import Header from "@src/components/Header";


export default async ( { params, children } ) => {
    const menuData = await getMenuData( params.blogTopic );
    menuData.forEach( item => {
        item.folderContent.sort( ( a, b ) => Number( a.split( '-' )[0] ) - Number( b.split( '-' )[0] ) )
    } )
    
    return <>
        <Header />
        <div className="flex flex-1">
            <div
                className="sm:hidden w-280px sideMenuScroll overflow-auto sticky top-16 z-30 h-[calc(100vh-64px)] border-r border-solid border-#e7e7e7">
                <SideMenu listData={ menuData } />
            </div>
            <section className={ 'flex flex-col flex-1 items-center' }>
                <div className="articleContent sm:w-[100vw] sm:h-[calc(100vh-64px)] overflow-scroll box-border">
                    <TopicList listData={ menuData } className={ 'w-full md:hidden lg:hidden' } />
                    { children }
                </div>
            </section>
        </div>
    </>
};



