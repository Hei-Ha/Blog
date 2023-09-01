'use client'
import {Accordion, AccordionItem} from "@nextui-org/accordion";
import {Listbox, ListboxItem} from "@nextui-org/listbox";
import {useState} from "react";


interface PropsType {
    menuMap: Map<string, string[]>; // 菜单分类
}



export default (props: PropsType) => {
    const { menuMap } = props;
    const defaultValue = menuMap.get(Array.from(menuMap.keys())[0])[0]; // 获取默认值
    
    const [selectedKeys, setSelectedKeys] = useState<string[]>([defaultValue]);
    
    
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
                        defaultValue={defaultValue}
                        aria-label={`Single selection ${item}`}
                        variant="flat"
                        disallowEmptySelection={true}
                        selectionMode="single"
                        selectedKeys={selectedKeys}
                        onSelectionChange={setSelectedKeys as any}
                    >
                        {
                            menuMap.get(item).map((menu) => {
                                return <ListboxItem
                                    key={menu}
                                >
                                    {menu}
                                </ListboxItem>
                            })
                        }
                    </Listbox>
                    
                </AccordionItem>
            })
        }
    </Accordion>
}