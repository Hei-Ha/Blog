"use client";
import { SideMenuListType } from "@src/types/SideMenu";
import { Tooltip, Listbox, ListboxSection, ListboxItem } from '@nextui-org/react'
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default ( { listData }: { listData: SideMenuListType[] } ) => {
    const params = useParams<{
        blogTopic: string;
        foldername: string;
        fileName: string;
    }>();
    const urlPath = usePathname();
    
    const [selectKey, setSelectKey] = useState<string>(
        decodeURI( params.fileName )
    );
    
    useEffect( () => {
        setSelectKey( decodeURI( params.fileName ) );
    }, [urlPath] );
    
    return (
        <Listbox
            label="sideMenuList"
            className="p-0 pl-3"
            selectedKeys={ selectKey }
            selectionMode="none"
            variant="flat"
            color="primary"
            // onAction={(key: string) => {
            //     setSelectKey(key);
            // }}
        >
            { listData.map( i => {
                return (
                    <ListboxSection
                        className="my-3"
                        title={ i.blogTopic.split( "/" )[1] }
                        key={ i.blogTopic }
                        showDivider
                    >
                        { i.folderContent.map( item => {
                            return (
                                <ListboxItem
                                    className={ `my-0.5 px-3 rounded-sm ${
                                        selectKey === item
                                            ? "bg-#d3e5fc text-#2263ef"
                                            : ""
                                    }` }
                                    key={ item }
                                    value={ item }
                                    aria-label={ item }
                                    shouldHighlightOnFocus={ true }
                                >
                                    <Link href={ `/blog/${ i.blogTopic }/${ item }` }>
                                        <div className="w-full leading-7">
                                            { item.split( "." )[0] }
                                        </div>
                                        {/*<Tooltip*/}
                                        {/*    color={ 'primary' }*/}
                                        {/*    content={ item.split( "." )[0] }*/}
                                        {/*    radius={ 'sm' }*/}
                                        {/*    placement={ 'top-end' }*/}
                                        {/*>*/}
                                        {/*    */}
                                        {/*</Tooltip>*/}
                                    </Link>
                                </ListboxItem>
                            );
                        } ) }
                    </ListboxSection>
                );
            } ) }
        </Listbox>
    );
};
