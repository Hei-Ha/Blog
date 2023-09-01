'use client'
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import {
    Listbox,
    ListboxSection,
    ListboxItem
} from "@nextui-org/listbox";
import { useState } from "react";


export default () => {
    // const testData = await fetch('http://localhost:3000')
    const [selectedKey, setSelectedKey] = useState<string>('text');
    
    return (
        <Accordion
            defaultSelectedKeys='all'
            variant="splitted" className='w-64'>
            <AccordionItem
                key="1"
                title="Accordion 1"
            >
                <Listbox
                    aria-label="Single selection example"
                    variant="flat"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={selectedKey}
                    onSelectionChange={setSelectedKey}
                >
                    <ListboxItem key="text">Text</ListboxItem>
                    <ListboxItem key="number">Number</ListboxItem>
                    <ListboxItem key="date">Date</ListboxItem>
                    <ListboxItem key="single_date">Single Date</ListboxItem>
                    <ListboxItem key="iteration">Iteration</ListboxItem>
                </Listbox>
            </AccordionItem>
            <AccordionItem
                key="2"
                title="Accordion 2"
            >
                <Listbox
                    aria-label="Single selection example"
                    variant="flat"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={selectedKey}
                    onSelectionChange={setSelectedKey}
                >
                    <ListboxItem key="text3">Text3</ListboxItem>
                    <ListboxItem key="number3">Number3</ListboxItem>
                    <ListboxItem key="date3">Date3</ListboxItem>
                    <ListboxItem key="single_date3">Single Date3</ListboxItem>
                    <ListboxItem key="iteration3">Iteration3</ListboxItem>
                </Listbox>
            </AccordionItem>
            <AccordionItem
                key="3"
                title="Accordion 3"
            >
                Lorem ipsum dolo
            </AccordionItem>
        </Accordion>
    )
}