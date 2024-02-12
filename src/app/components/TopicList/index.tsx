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
                                        onClick={ () => setIsOpen( false ) }
                                        className={ 'block px-3 py-1.5' }
                                        href={ `/blog/${ item.blogTopic }/${ i }` }
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
    
    return <div className={ `${ className } flex flex-row-reverse px-3 box-border border-y border-solid border-#4b4b4b` }>
        <div onClick={ () => setIsOpen( true ) }>Menu</div>
        <Modal
            radius={ 'sm' }
            isOpen={ isOpen }
            placement={ 'top' }
            onOpenChange={ setIsOpen }
            onClose={ () => setIsOpen }
        >
            <ModalContent>
                <ModalBody className={ 'py-8' }>
                    <ContentAccordion />
                </ModalBody>
            </ModalContent>
        </Modal>
    </div>
}