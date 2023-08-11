'use client'
import { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem
} from '@nextui-org/navbar'
import Link from 'next/link';
import { Avatar } from '@nextui-org/avatar';



interface MenuType {
    title: string;
    icon?: string;
    path: string;
    children?: MenuType[]
}

export default () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    
    
    const menus: MenuType[] = [
        {
            title: '文章',
            icon: '',
            path: 'articles',
        },
        {
            title: '算法题',
            path: 'algorithm',
        },
        {
            title: 'Contact',
            path: 'contact'
        },
        {
            title: '其他',
            path: 'other',
        },
    ]
    
    const getLgMenu = (menus: MenuType[]) => {
        if (menus.length === 0) return []
        return menus.map((item, index) => {
            return <NavbarItem key={`${item.title}-${index}`} className={'mr-2'}>
                <Link className='text-#8294C4' href={item.path}>
                    {item.title}
                </Link>
            </NavbarItem>
        })
    }
    
    const getSmMenus = (menus: MenuType[]) => {
        if (menus.length === 0) return []
        return menus.map((item, index) => {
            return <NavbarMenuItem key={`${item.title}-${index}`}>
                <Link className='text-#8294C4' href={item.path}>
                    <span className='text-#8294C4'>
                        {item.title}
                    </span>
                </Link>
            </NavbarMenuItem>
        })
    }
    
    const avatar = () => {
        return <Avatar name='Wang' />
    }
    
    return (
        <Navbar
            isBordered={true}
            position={'sticky'}
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={(value)=> {
                setIsMenuOpen(value);
            }}
        >
            <NavbarContent className='lgScreens:hidden' justify='start'>
                <NavbarMenuToggle />
                <NavbarBrand className='flex justify-end'>
                    <Link href='/'>
                        {avatar()}
                    </Link>
                </NavbarBrand>
                <NavbarMenu className='lgScreens:hidden'>
                    {...getSmMenus(menus)}
                </NavbarMenu>
            </NavbarContent>
            
            <NavbarContent className='smScreens:hidden' justify='center'>
                <NavbarBrand>
                    <Link href='/'>
                        {avatar()}
                    </Link>
                </NavbarBrand>
                {...getLgMenu(menus)}
            </NavbarContent>
        </Navbar>
    )
}