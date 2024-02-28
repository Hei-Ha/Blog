'use client'
import { useTheme } from 'next-themes'
import { Switch, Skeleton } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { Icon } from "@src/components/Icons";

export default () => {
    const [mounted, setMounted] = useState<boolean>(false);
    const { theme, setTheme } = useTheme();
    
    useEffect(() => {
        setMounted(true)
    }, [])

    if ( !mounted ) {
        return <Skeleton className="h-6 w-12 rounded-lg"/>
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
                    <Icon iconName='blog-theme-dark' />
                ) : (
                    <Icon iconName='blog-theme-light' />
                )
            )
        }
        }
    />
}