"use client";
import { SideMenuListType } from "@src/types/SideMenu";
import { Tooltip, Button, Listbox, ListboxSection, ListboxItem } from '@nextui-org/react'
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
    const [selectKey, setSelectKey] = useState<string>( decodeURI( params.fileName ) );
    
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
        >
            { listData.map( i => {
                return (
                    <ListboxSection
                        className="my-3 p-0"
                        title={ i.blogTopic.split( "/" )[1] }
                        key={ i.blogTopic }
                        showDivider
                    >
                        { i.folderContent.map( item => {
                            return (
                                <ListboxItem
                                    className={ `p-0 my-0.5 rounded-sm ${ selectKey === item ? "text-#2263ef" : "" }` }
                                    key={ item }
                                    value={ item }
                                    aria-label={ item }
                                    shouldHighlightOnFocus={ true }
                                >
                                    <Link
                                        className={ 'block px-3 py-1.5' }
                                        href={ `/blog/${ i.blogTopic }/${ item }` }
                                    >
                                        <div className="w-full leading-7">
                                            { item.split( "." )[0] }
                                        </div>
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
