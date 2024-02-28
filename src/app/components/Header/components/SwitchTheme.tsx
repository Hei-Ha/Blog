'use client'
import { useTheme } from 'next-themes'
import { Switch, Skeleton } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import Icons from "@src/app/components/Icons";

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
        classNames={{
            thumb: theme === 'dark' ? 'bg-#4b4b4b shadow-none' : 'shadow-none',
        }}
        isSelected={ theme === 'dark' }
        onValueChange={ ( isSelected ) => setTheme( isSelected ? 'dark' : 'light' ) }
        thumbIcon={ ( { isSelected, className } ) => {
            return (
                isSelected ? (
                    <Icons iconName='blog-dark' />
                ) : (
                    <Icons iconName='blog-a-LightTheme' />
                )
            )
        }
        }
    />
}