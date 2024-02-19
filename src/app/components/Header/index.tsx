'use client'
import React, { useState, useEffect } from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    User,
    Switch,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
} from "@nextui-org/react";
import Link from 'next/link';
import { MenuItemList } from "../constants"
import SunIcon from './components/SunIcon'
import MoonIcon from './components/MoonIcon'
import { useStore } from '@src/store'


export default () => {
    const switchTheme = useStore( state => state.actions.switchTheme )
    const theme = useStore(state => state.theme)
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>( false );
    
    
    return <>
        <Navbar maxWidth="full" isBordered className="sm:hidden h-[64px] box-border px-10">
            <NavbarContent>
                <NavbarBrand>
                    <Link href={ '/' }>
                        <User
                            className="font-bold"
                            name="Wang"
                            description="Front-end Development Engineer"
                            avatarProps={ {
                                src: "https://static.wangchuang.space/Images/Blogs/Avatar.JPG",
                            } }
                        />
                    </Link>
                </NavbarBrand>
            </NavbarContent>
            
            <NavbarContent justify='end'>
                { MenuItemList.map( ( item ) => {
                    return (
                        <NavbarItem key={ item.path }>
                            <Link href={ item.path }>{ item.title }</Link>
                        </NavbarItem>
                    )
                } ) }
                <Switch
                    size="sm"
                    color="default"
                    className='rounded-md'
                    isSelected={ theme === 'dark' }
                    onValueChange={ ( isSelected ) => switchTheme( isSelected ? 'dark' : 'light' ) }
                    thumbIcon={ ( { isSelected, className } ) => (
                        isSelected ? (
                            <MoonIcon className={ className } />
                        ) : (
                            <SunIcon className={ className } />
                        )
                    )
                    }
                />
            </NavbarContent>
        </Navbar>
        <Navbar
            maxWidth="full"
            className='md:hidden lg:hidden'
            isMenuOpen={isMenuOpen}
        >
            <NavbarContent>
                <NavbarBrand>
                    <Link href={ '/' }>
                        <User
                            name="Wang"
                            description="Front-end Development Engineer"
                            avatarProps={ {
                                src: "https://static.wangchuang.space/Images/Blogs/Avatar.JPG",
                            } }
                        />
                    </Link>
                </NavbarBrand>
                <NavbarMenuToggle
                    aria-label={ isMenuOpen ? "Close menu" : "Open menu" }
                    onChange={(isSelected) => {
                        setIsMenuOpen(isSelected)
                    }}
                />
            </NavbarContent>
            
            <NavbarMenu onClick={() => setIsMenuOpen(false)}>
                { MenuItemList.map( item => {
                    return <NavbarMenuItem key={ item.path }>
                        <Link href={ item.path }>
                            <div className={ 'text-base' }>
                                { item.title }
                            </div>
                        </Link>
                    </NavbarMenuItem>
                } ) }
                
                <NavbarMenuItem className={ 'flex flex-row-reverse justify-center' }>
                    <Switch
                        size="sm"
                        color="default"
                        className='rounded-md'
                        isSelected={theme === 'dark'}
                        onValueChange={ ( isSelected ) => switchTheme( isSelected ? 'dark' : 'light' ) }
                        thumbIcon={ ( { isSelected, className } ) => (
                            isSelected ? (
                                <MoonIcon className={ className } />
                            ) : (
                                <SunIcon className={ className } />
                            )
                        )
                        }
                    >主题</Switch>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    </>
}