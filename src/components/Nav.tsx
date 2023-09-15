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
import { Listbox, ListboxItem } from '@nextui-org/listbox';
import SwitchTheme from "@src/components/SwitchTheme";
import { useRouter, usePathname, useParams } from "next/navigation";
import { useEffect } from 'react'


interface MenuType {
    title: string;
    icon?: string;
    path: string;
    children?: MenuType[]
}

export default () => {
    const router = useRouter();
    const params = useParams();
    const pathname = usePathname();
    // const defaultSelected = params.fi
    // leMsg && params.fileMsg[0] ? params.fileMsg[0] : 'frontEnd'
    
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [curMenu,setCurMenu ] = useState<string>(pathname.split('/')[1] || '');
    
    
    const menus: MenuType[] = [
        {
            title: '前端',
            icon: '',
            path: '/frontEnd/HTTP相关/HTTPS加密过程.md'
        },
        {
            title: '算法题',
            path: '/algorithm/leetCode/1-两数之和.md',
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
                <Link
                    href={item.path}
                    onClick={() => setCurMenu(item.title)}
                >
                    <span className={`${curMenu === item.title ? 'text-#F79327' : 'text-#3b3c43'}`}>
                        {item.title}
                    </span>
                </Link>
            </NavbarItem>
        })
    }
    
    const getSmMenus = (menus: MenuType[]) => {
        if (menus.length === 0) return []
        
        return <Listbox
            aria-label={`Single menu`}
            selectionMode={'single'}
            selectedKeys={[curMenu]}
        >
            
            {menus.map((item) => {
                return <ListboxItem
                    showDivider={true}
                    key={item.path}
                    textValue={item.title}
                    onClick={() => {
                        setCurMenu(item.title);
                        router.push(item.path);
                        setIsMenuOpen(false);
                    }}
                >
                    <Link href={item.path}>
                        <span className={`${curMenu === item.title ? 'text-#F79327' : 'text-#3b3c43'}`}>
                            {item.title}
                        </span>
                    </Link>
                </ListboxItem>
            })}
        </Listbox>
        
    }
    
    
    return (
        <Navbar
            className='w-full bg-#f0f0f0'
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
                    <Link href='/' onClick={() => setCurMenu('')}>
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
            <NavbarContent className='mdScreens:hidden lgScreens:hidden' justify='end'>
                <NavbarMenuToggle />
                <NavbarMenu className='' onClick={() => {
                    setIsMenuOpen(false);
                }}>
                    {getSmMenus(menus)}
                </NavbarMenu>
            </NavbarContent>
            
            {/*大屏显示的内容*/}
            <NavbarContent className='smScreens:hidden' justify='end'>
                {...getLgMenu(menus)}
            </NavbarContent>
        </Navbar>
    )
}