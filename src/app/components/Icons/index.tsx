'use client'
import React, { useEffect, useState } from "react";
import { Skeleton } from '@nextui-org/react'
import { useTheme } from "next-themes";

const Icon = ( { iconName, className }: { iconName: string; className?: string } ) => {
    return <svg className={ `icon ${ className }` } aria-hidden="true">
        <use xlinkHref={ `#${ iconName }` } />
    </svg>
}


const ThemeIcons = (
    { lightIconName, darkIconName, className }: { lightIconName: string; darkIconName: string; className?: string }
) => {
    const [mounted, setMounted] = useState<boolean>( false )
    const { theme } = useTheme();
    
    useEffect( () => {
        setMounted( true )
    }, [] )
    if ( !mounted ) {
        return (
            <Skeleton className={'rounded-lg'}>
                <svg className={ `icon` } aria-hidden="true">
                    <use xlinkHref={''} />
                </svg>
            </Skeleton>
        )
    }
    
    return theme === 'dark' ?
        <svg className={ `icon ${ className }` } aria-hidden="true">
            <use xlinkHref={ `#${ darkIconName }` } />
        </svg>
        :
        <svg className={ `icon ${ className }` } aria-hidden="true">
            <use xlinkHref={ `#${ lightIconName }` } />
        </svg>
}


export {
    Icon,
    ThemeIcons,
}
