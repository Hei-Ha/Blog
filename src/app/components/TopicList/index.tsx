'use client'
import React, { useState, useEffect, useRef } from 'react';
import { SideMenuListType } from "@src/types/SideMenu";
import {
    Accordion,
    AccordionItem,
    Listbox,
    ListboxItem,
    Modal,
    ModalContent,
    ModalBody,
    Card,
    CardBody,
} from '@nextui-org/react'
import Link from 'next/link';

export default ( { listData, className }: { listData: SideMenuListType[], className?: string, } ) => {
    const [isOpen, setIsOpen] = useState( false );
    const modalContainer = useRef<Element | null>(null);
    
    useEffect(() => {
        modalContainer.current = document.getElementsByClassName('articleContent')[0]
    }, [])
    
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
    
    return <Card radius='none' shadow={'sm'} className={ `sticky top-0 flex box-border border-y border-solid border-#4b4b4b ${ className } ` }>
        <CardBody className='px-3 py-3 text-sm text-right' onClick={ () => setIsOpen( true ) }>Menu</CardBody>
        <Modal
            portalContainer={modalContainer.current}
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
    </Card>
}