import React from "react";
import SideMenu from "@src/components/SideMenu";
import { getMenuData } from "./constants";
import TopicList from "@src/components/TopicList";
import Header from "@src/components/Header";
import { Spinner } from '@nextui-org/react'

export default async ({ params, children }) => {
    const menuData = await getMenuData(params.blogTopic);
    menuData.forEach(item => {
        item.folderContent.sort(
            (a, b) => Number(a.split("-")[0]) - Number(b.split("-")[0])
        );
    });

    return (
        <>
            <Header />
            <div className="flex">
                <div className="sm:hidden w-280px shrink-0 sideMenuScroll overflow-auto sticky top-16 h-[calc(100vh-64px)] border-r border-solid border-#e7e7e7">
                    <SideMenu listData={menuData} />
                </div>
                
                <div className="sm:hidden w-full flex grow flex-col items-center"> {/* 大屏、中屏 显示内容 */}
                    {children}
                </div>
                
                <div className="md:hidden lg:hidden w-[100vw]">{/* 小屏显示内容 */}
                    <TopicList listData={menuData} className={"w-full h-48px"} />
                    <div className="overflow-scroll h-[calc(100vh-64px-48px)]">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};
