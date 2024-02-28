'use client'
import React, { useState } from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    User,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
} from "@nextui-org/react";
import Link from 'next/link';
import { MenuItemList } from "../constants"
import { ThemeIcons } from "@src/components/Icons";
import SwitchTheme from './components/SwitchTheme';


export default (
    { className }: { className?: string;}
) => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>( false );
    
    return <div className='sticky top-0'>
        <Navbar maxWidth="full" isBordered className={`sm:hidden h-[64px] box-border px-10 ${className}`}>
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
                <Link target="_blank" href={'https://github.com/Hei-Ha'}>
                    <ThemeIcons lightIconName={'blog-github-light'} darkIconName={'blog-github-dark'} />
                </Link>
                <SwitchTheme />
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
                    <SwitchTheme />
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    </div>
}