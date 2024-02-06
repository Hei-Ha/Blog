"use client";
import { SideMenuListType } from "@src/types/SideMenu/index";
import { Listbox, ListboxSection, ListboxItem } from "@nextui-org/listbox";
import Link from "next/link";
import { useState } from 'react'

export default ({ listData }: { listData: SideMenuListType[] }) => {
    const [selectKey, setSelectKey] = useState<string>('');

    return (
        <Listbox
            selectedKeys={selectKey}
            defaultSelectedKeys={'HTTPS加密过程.md'}
            label="sideMenuList"
            variant="flat"
            color="primary"
            selectionMode="single"
            onAction={(key: string) => {
                setSelectKey(key)
            }}
        >
            {listData.map(i => {
                return (
                    <ListboxSection
                        title={i.folderPath.split("/")[1]}
                        key={i.folderPath}
                    >
                        {i.folderContent.map(item => {
                            return (
                                <ListboxItem
                                    key={item}
                                    value={item}
                                    aria-label={item}
                                    shouldHighlightOnFocus={true}
                                >
                                    <Link href={`/${i.folderPath}/${item}`}>
                                        <div className="w-full ">
                                            {item.split(".")[0]}
                                        </div>
                                    </Link>
                                </ListboxItem>
                            );
                        })}
                    </ListboxSection>
                );
            })}
        </Listbox>
    );
};
