'use client'
import React, { useState } from 'react';
import { SideMenuListType } from "@src/types/SideMenu";
import {
    Accordion,
    AccordionItem,
    Listbox,
    ListboxItem,
    Modal,
    ModalContent,
    ModalBody,
    Button,
} from '@nextui-org/react'
import Link from 'next/link';

export default ( { listData, className }: { listData: SideMenuListType[], className?: string, } ) => {
    const [isOpen, setIsOpen] = useState( false );
    
    const items = [
        {
            key: "new",
            label: "New file",
        },
        {
            key: "copy",
            label: "Copy link",
        },
        {
            key: "edit",
            label: "Edit file",
        },
        {
            key: "delete",
            label: "Delete file",
        }
    ];
    const ContentAccordion = () => {
        return <Accordion
            selectionMode={ 'single' }
            isCompact
        >
            {
                listData.map( item => {
                    return <AccordionItem
                        key={ item.blogTopic }
                        title={ item.blogTopic.split( '/' )[1] }
                        className={ 'text-sm' }
                    >
                        <Listbox aria-label="TopicList">
                            { item.folderContent.map( i => {
                                return <ListboxItem
                                    key={ i }
                                    value={ i }
                                    aria-label={ i }
                                    shouldHighlightOnFocus={ true }
                                >
                                    <Link
                                        onClick={() => setIsOpen(false)}
                                        className={ 'block px-3 py-1.5' }
                                        href={ `/blog/${item.blogTopic}/${i}` }
                                    >
                                        { i.split( '.' )[0] }
                                    </Link>
                                </ListboxItem>
                            } ) }
                        </Listbox>
                    </AccordionItem>
                } )
            }
        </Accordion>
    }
    
    const ModalList = () => {
        return <Modal
            radius={ 'sm' }
            isOpen={ isOpen }
            placement={ 'top' }
            onOpenChange={ setIsOpen }
        >
            <ModalContent>
                <ModalBody className={ 'py-8' }>
                    <ContentAccordion />
                </ModalBody>
            </ModalContent>
        </Modal>
    }
    return <div className={ `${ className } flex flex-row-reverse bg-pink px-3` }>
        <Button size={ 'sm' } color={ 'primary' } onPress={ () => {
            setIsOpen( true )
        } }>click</Button>
        <ModalList />
    </div>
}