'use client'
import {Accordion, AccordionItem} from "@nextui-org/accordion";
import {Listbox, ListboxItem} from "@nextui-org/listbox";
import {useState} from "react";
import Link from 'next/link';
import { useParams, useRouter } from "next/navigation";
import { Card, CardBody } from '@nextui-org/card'


interface PropsType {
    menuMap: Map<string, string[]>; // 菜单分类
    menuType: string;
}

export default (props: PropsType) => {
    const router = useRouter();
    const urlMsg = useParams();
    const { menuMap } = props;
    
    // 设置默认值
    const defaultFilename = Object.keys(urlMsg).length > 0
        ? decodeURI(urlMsg.fileMsg[1])
        :
        menuMap.get(Array.from(menuMap.keys())[0])[0]
    
    const [selectedKeys, setSelectedKeys] = useState<string[]>([defaultFilename]);
    
    
    
    
    return <div className='w-full h-full pr-1 py-2 bg-#f0f0f0 rounded overflow-y-scroll'>
        <Accordion
            className=''
            disallowEmptySelection={false}
            defaultSelectedKeys='all'
            variant="splitted"
            selectionMode={'multiple'}
            isCompact={true}
            showDivider={false}
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
                                        onClick={() => {
                                            router.push(
                                                `${window.location.origin}/${props.menuType}/${item}/${menu}`,
                                                { scroll: false }
                                            )
                                        }}
                                    >
                                        <div className='text-xs w-full'>{fileTitle.join()}</div>
                                        {/*<Link*/}
                                        {/*    href={{*/}
                                        {/*        pathname: encodeURI(`${window.location.origin}/frontEnd/${item}/${menu}`),*/}
                                        {/*    }}*/}
                                        {/*    scroll={false}*/}
                                        {/*>*/}
                                        {/*   */}
                                        {/*</Link>*/}
                                    </ListboxItem>
                                })
                            }
                        </Listbox>
                    </AccordionItem>
                })
            }
        </Accordion>
    </div>
}