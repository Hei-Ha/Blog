"use client"
import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    User,
    Switch,
} from "@nextui-org/react";
import Link from 'next/link';
import { MenuItemList } from "../constants"
import SunIcon from './SunIcon'
import MoonIcon from './MoonIcon'
import { useStore } from '@src/store'


export default () => {
    const switchTheme = useStore( state => state.actions.switchTheme )
    
    return (
        <Navbar maxWidth="full" className="px-10 h-64px box-border border-b border-solid border-#e7e7e7">
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
    )
};
