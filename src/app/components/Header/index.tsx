import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    User,
} from "@nextui-org/react";
import Link from 'next/link';
import { MenuItemList } from "../constants"



export default () => {
    return (
        <Navbar maxWidth="full" className="px-10 h-64px box-border border-b border-solid border-#e7e7e7">
            <NavbarBrand>
                <Link href={'/'}>
                    <User
                        className="font-bold"
                        name="Wang"
                        description="Front-end Development Engineer"
                        avatarProps={{
                            src: "https://static.wangchuang.space/Images/Blogs/Avatar.JPG",
                        }}
                    />
                </Link>
            </NavbarBrand>

            <NavbarContent justify='end'>
                {MenuItemList.map((item) => {
                    return (
                        <NavbarItem key={item.path}>
                            <Link href={item.path}>{item.title}</Link>
                        </NavbarItem>
                    )
                })}
            </NavbarContent>
        </Navbar>
    )
};
