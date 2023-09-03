'use client'
import {Accordion, AccordionItem} from "@nextui-org/accordion";
import {Listbox, ListboxItem} from "@nextui-org/listbox";
import {useState} from "react";
import Link from 'next/link';
import { useParams } from "next/navigation";

interface PropsType {
    menuMap: Map<string, string[]>; // 菜单分类
}

export default (props: PropsType) => {
    const urlMsg = useParams();
    const { menuMap } = props;
    
    // 设置默认值
    const defaultFilename = Object.keys(urlMsg).length > 0
        ? decodeURI(urlMsg.fileMsg[1])
        :
        menuMap.get(Array.from(menuMap.keys())[0])[0]
    
    const [selectedKeys, setSelectedKeys] = useState<string[]>([defaultFilename]);
    
    
    
    
    return <Accordion
        disallowEmptySelection={false}
        defaultSelectedKeys='all'
        variant="splitted"
        selectionMode={'multiple'}
        isCompact={true}
        showDivider={true}
    >
        {
            Array.from(menuMap.keys()).map(item => {
                return <AccordionItem
                    key={item}
                    title={item}
                >
                    <Listbox
                        defaultValue={defaultFilename}
                        aria-label={`Single selection ${item}`}
                        variant="flat"
                        disallowEmptySelection={true}
                        selectionMode="single"
                        selectedKeys={selectedKeys}
                        onSelectionChange={(keys: Set<string>) => {
                            setSelectedKeys(Array.from(keys.keys()));
                        }}
                    >
                        {
                            menuMap.get(item).map((menu) => {
                                const fileTitle = menu.split('.');
                                fileTitle.pop();
                                return <ListboxItem
                                    key={menu}
                                    textValue={menu}
                                >
                                    
                                    <Link
                                        href={{
                                            pathname: encodeURI(`${window.location.origin}/frontEnd/${item}/${menu}`),
                                        }}
                                        scroll={false}
                                    >
                                        <div className='text-xs w-full'>{fileTitle.join()}</div>
                                    </Link>
                                </ListboxItem>
                            })
                        }
                    </Listbox>
                </AccordionItem>
            })
        }
    </Accordion>
}