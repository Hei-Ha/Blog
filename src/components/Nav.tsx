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
import { User } from '@nextui-org/user';
import Link from 'next/link';
import { Avatar } from '@nextui-org/avatar';
import SwitchTheme from "@src/components/SwitchTheme";
// import Image from 'next/image'



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
            title: '前端',
            icon: '',
            path: '/frontEnd'
        },
        {
            title: '文章',
            icon: '',
            path: '/articles',
        },
        {
            title: '算法题',
            path: '/algorithm',
        },
        {
            title: 'Contact',
            path: '/contact'
        },
        {
            title: '其他',
            path: '/other',
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
        return <div>
            <div className='flex justify-end'>
                <SwitchTheme />
            </div>
            {menus.map((item, index) => {
                return <NavbarMenuItem key={`${item.title}-${index}`}>
                    <Link className='text-#8294C4' href={item.path}>
                        <span className='text-#8294C4'>
                            {item.title}
                        </span>
                    </Link>
                </NavbarMenuItem>
            })}
        </div>
    }
    
    
    return (
        <Navbar
            className='w-full'
            maxWidth='2xl'
            isBordered={true}
            position={'sticky'}
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={(value)=> {
                setIsMenuOpen(value);
            }}
        >
            <NavbarContent justify='start'>
                <NavbarBrand>
                    <Link href='/'>
                        <User
                            name='Wang'
                            description='Front-end Development Engineer'
                            avatarProps={{
                                src: "https://images.wangchuang.space/Images/Blogs/Avatar.JPG"
                            }}
                        />
                    </Link>
                </NavbarBrand>
            </NavbarContent>
            
            {/*小屏显示的内容*/}
            <NavbarContent className='lgScreens:hidden' justify='end'>
                <NavbarMenuToggle />
                <NavbarMenu className='lgScreens:hidden' onClick={() => {
                    setIsMenuOpen(false);
                }}>
                    {getSmMenus(menus)}
                </NavbarMenu>
            </NavbarContent>
            
            {/*大屏显示的内容*/}
            <NavbarContent className='smScreens:hidden' justify='end'>
                {...getLgMenu(menus)}
                <SwitchTheme />
            </NavbarContent>
        </Navbar>
    )
}