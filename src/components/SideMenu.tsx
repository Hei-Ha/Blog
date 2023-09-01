'use client'
import {Accordion, AccordionItem} from "@nextui-org/accordion";
import {Listbox, ListboxItem} from "@nextui-org/listbox";
import {useState} from "react";


interface PropsType {
    menuMap: Map<any, any>; // 菜单分类
}



export default (props: PropsType) => {
    const { menuMap } = props
    
    const [selectedKey, setSelectedKey] = useState<string>('text');
    
    return <Accordion
        className='w-64'
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
                        aria-label={`Single selection ${item}`}
                        variant="flat"
                        disallowEmptySelection
                        selectionMode="single"
                        selectedKeys={selectedKey}
                        onSelectionChange={setSelectedKey as any}
                    >
                        {
                            menuMap.get(item).map(menu => {
                                const listTitle = menu.split('.');
                                listTitle.pop()
                                return <ListboxItem
                                    key={item + menu}
                                >
                                    {listTitle.join('')}
                                </ListboxItem>
                            })
                        }
                    </Listbox>
                </AccordionItem>
            })
        }
    </Accordion>
}