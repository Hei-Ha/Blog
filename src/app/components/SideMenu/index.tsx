"use client";
import { SideMenuListType } from "@src/types/SideMenu/index";
import { Listbox, ListboxSection, ListboxItem } from "@nextui-org/listbox";

export default ({ listData }: { listData: SideMenuListType[] }) => {
    return (
        <Listbox label="sideMenuList">
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
                                >
                                    {item.split(".")[0]}
                                </ListboxItem>
                            );
                        })}
                    </ListboxSection>
                );
            })}
        </Listbox>
    );
};
