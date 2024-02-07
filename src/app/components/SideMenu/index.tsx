"use client";
import { SideMenuListType } from "@src/types/SideMenu/index";
import { Listbox, ListboxSection, ListboxItem } from "@nextui-org/listbox";
import Link from "next/link";
import { useState, useEffect } from "react";

export default ({ listData }: { listData: SideMenuListType[] }) => {
    const [selectKey, setSelectKey] = useState<string>('HTTPS加密过程.md');

    return (
        <Listbox
            label="sideMenuList"
            className="p-0 pl-3"
            selectedKeys={selectKey}
            selectionMode="none"
            variant="flat"
            color="primary"
            onAction={(key: string) => {
                setSelectKey(key);
            }}
        >
            {listData.map(i => {
                return (
                    <ListboxSection
                        className="my-3"
                        title={i.folderPath.split("/")[1]}
                        key={i.folderPath}
                        showDivider
                    >
                        {i.folderContent.map(item => {
                            return (
                                <ListboxItem
                                    className={`my-0.5 px-3 rounded-sm ${
                                        selectKey === item ? "bg-#d3e5fc" : ""
                                    }`}
                                    key={item}
                                    value={item}
                                    aria-label={item}
                                    shouldHighlightOnFocus={true}
                                >
                                    <Link href={`/${i.folderPath}/${item}`}>
                                        <div className="w-full leading-7">
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
