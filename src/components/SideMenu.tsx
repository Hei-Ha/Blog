'use client'
import {Accordion, AccordionItem} from "@nextui-org/accordion";
import {Listbox, ListboxItem} from "@nextui-org/listbox";
import {useState} from "react";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface PropsType {
    menuMap: Map<string, string[]>; // 菜单分类
}



export default (props: PropsType) => {
    const router = useRouter();
    
    const { menuMap } = props;
    const defaultValue = menuMap.get(Array.from(menuMap.keys())[0])[0]; // 获取默认值
    
    const [selectedKeys, setSelectedKeys] = useState<string[]>([defaultValue]);
    
    
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
                        defaultValue={defaultValue}
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
                                return <ListboxItem
                                    key={menu}
                                    textValue={menu}
                                    onClick={() => router.push(`/frontEnd/${item}`)}
                                >
                                    <div className='text-xs w-full'>{menu}</div>
                                    {/*<Link href={{ pathname: `${window.location.href}/${item}`}}>*/}
                                    {/*    <div className='text-xs w-full'>{menu}</div>*/}
                                    {/*</Link>*/}
                                </ListboxItem>
                            })
                        }
                    </Listbox>
                </AccordionItem>
            })
        }
    </Accordion>
}