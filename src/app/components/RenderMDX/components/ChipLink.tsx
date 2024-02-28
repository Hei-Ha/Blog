'use client'
import { Chip, Link } from "@nextui-org/react";
import Icons from "@src/app/components/Icons";
import { useTheme } from "next-themes";
import React, { useState, useEffect } from "react";

export const ChipLink = (
    { href, content, className }: { href: string; content: string; className?: string; }
) => {
    const { theme } = useTheme();
    const [isMounted, setIsMounted] = useState<boolean>(false)
    
    useEffect(() => {
        setIsMounted(true)
    }, [])
    
    if ( !isMounted ) return;
    
    return <Chip
        as={ Link }
        href={ href }
        target='_blank'
        size='md'
        className={ `bg-chipBg select-none cursor-pointer ${ className }` }
        startContent={
            theme === 'dark' ?
                <Icons iconName='blog-leetcode-dark' className='text-4xl mr-2' />
                :
                <Icons iconName='blog-leetcode-light' className='text-4xl mr-2' />
        }
    >
        { content }
    </Chip>
}