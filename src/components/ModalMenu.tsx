'use client'
import React from 'react';
import { Modal, ModalContent, ModalBody, useDisclosure } from '@nextui-org/modal';
import { Divider } from '@nextui-org/divider';
export default ({children}) => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    return <div className=''>
        <div
            className='w-full h-11 flex justify-end items-center px-6 text-sm'
            onClick={onOpenChange}
        >
            菜单
        </div>
        <Divider />
        <Modal
            backdrop={'blur'}
            placement={'bottom'}
            hideCloseButton={true}
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            scrollBehavior={'inside'}
            className='w-full h-full'
        >
            <ModalContent>
                <ModalBody className='p-0'>
                    {children}
                </ModalBody>
            </ModalContent>
        </Modal>
    </div>
}