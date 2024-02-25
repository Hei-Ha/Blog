'use client'
import { useTheme } from 'next-themes'
import MoonIcon from "@src/app/components/Header/components/MoonIcon";
import SunIcon from "@src/app/components/Header/components/SunIcon";
import { Switch, Skeleton } from "@nextui-org/react";
import React, { useEffect, useState } from "react";

export default () => {
    const [mounted, setMounted] = useState<boolean>(false);
    const { theme, setTheme } = useTheme();
    
    useEffect(() => {
        setMounted(true)
    }, [])
    
    if ( !mounted ) {
        return <Skeleton />
    }
    
    return <Switch
        size="sm"
        color="default"
        className='rounded-md'
        isSelected={ theme === 'dark' }
        onValueChange={ ( isSelected ) => setTheme( isSelected ? 'dark' : 'light' ) }
        thumbIcon={ ( { isSelected, className } ) => (
            isSelected ? (
                <MoonIcon className={ className } />
            ) : (
                <SunIcon className={ className } />
            )
        )
        }
    />
}